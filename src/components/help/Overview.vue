<script setup>
// Alert
import { appendAlert } from '@/assets/js/Alerts'

// Components
import PageHeader from '../globals/PageHeader.vue'

// ----- START -----

// Functions
const copyForLLM = () => {
  const llmContent = `# EasyBitPay API — Developer Documentation

> **Scope:** Merchant-facing API to create invoices and track crypto payments with EasyBitPay.
> **What's new in v3:** Key management notes (public/private keys), webhook/callback payload & verification (EVENT_HASH), status mapping (e.g., status=10), and environment clarifications.

---

## 1) Concepts & Environments

### Environments
- **Mainnet (production):** https://api.easybitpay.com (callback MODE: "live")
- **Sandbox (testing):** https://api-sandbox.easybitpay.com (no real token movement)

### Accounts & Flow
1. **Register** in the EasyBitPay panel.
2. **Create a gateway** (configure name, image, banner).
3. **Generate an API key** for that gateway (merchants can manage **multiple gateways**).
4. **Validate your site/domain** — once validated, the API key activates.
5. **Create invoices** from the panel _or_ via API (this document).
6. **Redirect customers** to the hosted checkout payment_url.
7. **Receive callbacks** on your **callback URL** with payment events (e.g., PAYMENT_SUCCESS).
8. **Verify** callback authenticity using EVENT_HASH, then update your order state.

### Tokens
- You may pass **token IDs** or **token names/symbols** (e.g., USDT, TRX, USDT-POLYGON, ECG-Binance).
- Use available_tokens to restrict which tokens the end‑user can choose at checkout.

---

## 2) Authentication

Every request must include your gateway key:
\`\`\`
X-API-Key: <YOUR_API_KEY>
\`\`\`

> Use different keys for sandbox vs production. Never expose keys in frontend code or public repos.

---

## 3) Base URLs

\`\`\`
Mainnet:  https://api.easybitpay.com
Sandbox:  https://api-sandbox.easybitpay.com
\`\`\`

All endpoints described below are relative to these base URLs.

---

## 4) Key Management (Public / Private Keys)

When you generate a **public key** in the panel, the system **also generates a matching private key**. This private key is used to **confirm data authenticity** (e.g., to build/verify EVENT_HASH in callbacks).

- The **private key is shown only once** at creation time. Store it securely (HSM, vault, KMS).
- If you lose it, **revoke** the key pair and generate a new one; the previous private key cannot be retrieved again.
- Rotate keys periodically and after any suspected compromise.
- Keep separate key pairs per environment (sandbox vs mainnet).

> You will also configure a **Callback URL** in the gateway settings. EasyBitPay will send payment notifications there.

---

## 5) Invoices API

### 5.1 Create Invoice
**POST** /invoices

Create a new invoice. Pass the **base token** (by **name** or **ID**), charge **amount**, a description, and your internal order ID (client_order_identifier).

**Headers**
\`\`\`
X-API-Key: <YOUR_API_KEY>
Content-Type: application/json
\`\`\`

**Body (JSON example):**
\`\`\`json
{
  "base_token": "USDT",
  "amount": 100,
  "available_tokens": "TRX,USDT-POLYGON,ECG-Binance",
  "description": "Payment for invoice #124",
  "client_order_identifier": "3"
}
\`\`\`

**cURL Example:**
\`\`\`bash
curl -X POST https://api.easybitpay.com/invoices \\
  -H "X-API-Key: YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "base_token": "USDT",
    "amount": 100,
    "available_tokens": "TRX,USDT-POLYGON,ECG-Binance",
    "description": "Payment for invoice #124",
    "client_order_identifier": "3"
  }'
\`\`\`

**Successful Response (example):**
\`\`\`json
{
  "status": "ok",
  "message": "Your invoice has been saved successfully",
  "invoice": {
    "app_id": 192,
    "status": 0,
    "amount": "100",
    "available_tokens": "TRX,USDT-POLYGON,ECG-Binance",
    "description": "Payment for invoice #124",
    "client_order_identifier": "3",
    "id": 4399,
    "base_token_id": 32,
    "code": "mVmMjM3ZWQwMzVlM"
  },
  "tokens": [...],
  "payment_url": "https://pay.easybitpay.com/#/pay/invoice/mVmMjM3ZWQwMzVlM"
}
\`\`\`

**Next step:** Redirect your customer to payment_url.

**PHP/Laravel Example:**
\`\`\`php
// Create invoice
$response = Http::withHeaders([
    'X-API-Key' => config('services.easybitpay.key'),
])->post(config('services.easybitpay.url').'/invoices', [
    'base_token' => 'USDT',
    'amount' => 100,
    'available_tokens' => 'TRX,USDT-POLYGON,ECG-Binance',
    'description' => 'Payment for invoice #124',
    'client_order_identifier' => (string) $payment->id,
]);

$data = $response->json();
if (! $data || ! isset($data['invoice'])) {
    throw new \\RuntimeException('EasyBitPay: invalid response');
}

$invoice = $data['invoice'];
$payment->code = $invoice['code'];
$payment->invoice_id = $invoice['id'];
$payment->save();

// Redirect to hosted checkout
return redirect($data['payment_url']);
\`\`\`

### 5.2 Get Invoice (Details)
**GET** /invoices/{code}

Retrieve invoice by its short unique code.

### 5.3 Get Payment Status
**GET** /invoices/status/{code}

Fetch the latest payment status for the invoice code.

**Typical statuses (examples):**
- pending — created, awaiting payment
- paid — payment detected, awaiting confirmations
- confirmed — confirmed on-chain
- failed / expired — not payable anymore

> **Note:** In some responses you may see numeric status codes. For example, status: 10 means **paid**.

---

## 6) Callbacks / Webhooks

### 6.1 Configure Callback URL
In the gateway settings, define your **Callback URL** (HTTPS). EasyBitPay will send notifications (e.g., PAYMENT_SUCCESS) to this endpoint whenever an invoice's state changes.

### 6.2 Sample Callback Payload
Below is an example payload you may receive from EasyBitPay:

\`\`\`json
{
  "MODE": "live",
  "EVENT_APP": "26b612fb-eeee-4a33-bcfb-0167319da858",
  "EVENT_HASH": "4d86d95cca5dafd973e874edccd8a2f0",
  "EVENT_TYPE": "PAYMENT_SUCCESS",
  "EVENT_DATA": {
    "invoice": {
      "id": 4619,
      "app_id": 195,
      "base_token_id": 37,
      "amount": "20",
      "paid": "20",
      "status": 10,
      "code": "WQ1ZjJjNjRiNGIwO",
      "client_order_identifier": "2568",
      "created_at": "2025-10-21 14:28:02"
    }
  },
  "EVENT_TIME": 1761057143
}
\`\`\`

**Notes**
- MODE: "live" ⇒ **mainnet**.
- status: 10 in EVENT_DATA.invoice ⇒ **paid**.
- EVENT_TYPE e.g., PAYMENT_SUCCESS — route business logic accordingly.

### 6.3 Verifying Callback Authenticity (EVENT_HASH)

Each callback includes EVENT_HASH. Use it to ensure the payload truly comes from EasyBitPay.

**High‑level algorithm (pseudocode):**
\`\`\`
payload = parsed JSON
invoice = payload.EVENT_DATA.invoice

string_to_hash =
    invoice.id + ":" +
    invoice.base_token_id + ":" +
    invoice.amount + ":" +
    invoice.client_order_identifier + ":" +
    invoice.code + ":" +
    YOUR_PRIVATE_KEY + ":" +
    payload.EVENT_TIME

expected_hash = MD5(string_to_hash)
if expected_hash != payload.EVENT_HASH:
    reject as unauthentic
\`\`\`

**Best practices**
- Store your **private key** in a secure secrets manager (not in code).
- Enforce **replay protection** using EVENT_TIME (reject old timestamps and duplicates).
- **Constant‑time** compare for hashes.
- After accepting a valid callback, **fetch current invoice** (optional) and confirm state before finalizing.

---

## 7) Sandbox Utilities

**POST** /invoices/update-status/{code} (Sandbox only) — simulate pay, cancel, expire to test webhooks and state transitions.

---

## 8) Withdraw (Separate API)

GET https://withdraw.api.easybitpay.com/withdraw — separate from invoices; may require different auth.

---

## 9) Data Model & Params (Quick Reference)

| Field                      | Type        | Required | Notes |
|---------------------------|-------------|---------:|------|
| base_token                | string/int  | ✓ | Base token by name/symbol (e.g., USDT) or ID. |
| amount                    | number/str  | ✓ | Amount to charge in base token. |
| available_tokens          | string      |  — | CSV list of tokens/networks (e.g., TRX,USDT-POLYGON,ECG-Binance). |
| description               | string      |  — | Human‑readable invoice description. |
| client_order_identifier   | string      |  — | Your order ID (idempotency). |
| code (response)           | string      |  — | Short unique invoice code. |
| payment_url (response)    | string      |  — | Hosted checkout URL. |
| EVENT_HASH (callback)     | string      |  — | MD5 of concatenated fields + private key + timestamp. |
| EVENT_TIME (callback)     | integer     |  — | Unix epoch seconds (replay protection). |
| MODE (callback)           | string      |  — | "live" means mainnet. |
| status (invoice)          | int/string  |  — | Example: 10 ⇒ **paid**. |

---

## 10) Security & Best Practices

- **Private key is displayed only once**; store securely and revoke/rotate on exposure.
- **HTTPS** for all API and webhook traffic.
- **Rotate keys**, separate by environment/gateway.
- **Idempotency** via client_order_identifier.
- **Always verify EVENT_HASH** and guard against replay.
- **Log** request IDs and results; avoid logging secrets.

---

End of EasyBitPay API Documentation`

  navigator.clipboard.writeText(llmContent)
  appendAlert('Copied to clipboard', {
    color: 'success',
    type: 'alert'
  })
}
</script>

<template>
  <section id="overview">
    <PageHeader title="EasyBitPay API" description="Developer Documentation — v3">
      <button class="btn btn-primary" @click="copyForLLM()">Copy for LLM</button>
    </PageHeader>

    <div class="alert alert-card alert-primary mb-2" role="alert">
      <span class="fw-bolder">Scope:</span> Merchant-facing API to create invoices and track crypto
      payments with EasyBitPay
    </div>

    <div class="alert alert-card alert-success mb-0" role="alert">
      <span class="fw-bolder">What's new in v3: </span> Key management, webhook verification
      (EVENT_HASH), status mapping, environment clarifications
    </div>
  </section>
</template>
