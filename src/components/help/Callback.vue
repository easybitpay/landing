<script setup>
// Constants
const payload = `{
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
}`

const verifying = `payload = parsed JSON
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
    reject as unauthentic`
</script>

<template>
  <section id="callback" class="mb-10">
    <h2 class="pb-3 border-bottom mb-4 text-dark">6. Callbacks / Webhooks</h2>
  </section>

  <section id="callback-config" class="mb-10">
    <h4 class="text-dark mb-4">6.1 Configure Callback URL</h4>

    <p class="text-gray-800 dark-text-gray-400 fs-7">
      In the gateway settings, define your
      <span class="text-dark fw-bolder">Callback URL</span> (HTTPS). EasyBitPay will send
      notifications (e.g.,<span class="badge badge-primary dark-bg-gray-100 dark-text-primary"> PAYMENT_SUCCESS </span
      >) to this endpoint whenever an invoice's state changes.
    </p>
  </section>

  <section id="callback-payload" class="mb-10">
    <h4 class="text-dark mb-4">6.2 Sample Callback Payload</h4>

    <p class="text-gray-800 dark-text-gray-400 fs-7">
      Below is an example payload you may receive from EasyBitPay:
    </p>

    <div class="card prism-card mb-4">
      <div class="card-body p-6">
        <pre class="language-javascript"><code>{{ payload }}</code></pre>
      </div>
    </div>

    <div class="text-gray-800 dark-text-gray-400">
      <div class="p-4 d-flex align-items-center gap-4 fs-7">
        <span class="w-15px min-w-15px h-15px rounded bg-success"></span>
        <div>
          <span class="text-primary">MODE: "live"</span> ⇒
          <span class="text-dark fw-bolder">mainnet</span>
        </div>
      </div>

      <div class="p-4 d-flex align-items-center gap-4 fs-7">
        <span class="w-15px min-w-15px h-15px rounded bg-success"></span>
        <div>
          <span class="text-primary">status: 10</span> in
          <span class="text-primary">EVENT_DATA.invoice</span> ⇒
          <span class="text-dark fw-bolder">paid</span>
        </div>
      </div>

      <div class="p-4 d-flex align-items-center gap-4 fs-7">
        <span class="w-15px min-w-15px h-15px rounded bg-success"></span>
        <div>
          <span class="text-primary">EVENT_TYPE</span> e.g.,
          <span class="text-primary">PAYMENT_SUCCESS</span> — route business logic accordingly
        </div>
      </div>
    </div>
  </section>

  <section id="callback-verify" class="mb-10">
    <h4 class="text-dark mb-4">6.3 Verifying Callback Authenticity (EVENT_HASH)</h4>

    <p class="text-gray-800 dark-text-gray-400 fs-7 mb-6">
      Each callback includes <span class="badge badge-primary dark-bg-gray-100 dark-text-primary"> EVENT_HASH </span>.
      Use it to ensure the payload truly comes from EasyBitPay.
    </p>

    <h5 class="text-dark mb-4 fs-7">HASH VERIFICATION ALGORITHM</h5>

    <div class="card prism-card mb-4">
      <div class="card-body p-6">
        <pre class="language-javascript"><code>{{ verifying }}</code></pre>
      </div>
    </div>

    <div class="alert alert-card alert-warning mb-0" role="alert">
      <p class="fw-bolder">Best Practices:</p>

      <ul class="mb-0 d-flex flex-column gap-2">
        <li>
          Store your <span class="fw-bolder">private key</span> in a secure secrets manager (not in
          code)
        </li>
        <li>
          Enforce <span class="fw-bolder">replay protection</span> using
          <span class="badge bg-yellow-700 text-yellow-200">EVENT_TIME</span> (reject old
          timestamps and duplicates)
        </li>
        <li><span class="fw-bolder">Constant-time</span>: compare for hashes</li>
        <li>
          After accepting a valid callback, <span class="fw-bolder">fetch current invoice</span> (optional) and confirm state
          before finalizing
        </li>
      </ul>
    </div>
  </section>
</template>
