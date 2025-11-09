<script setup>
// Constants
const json = `{
  "base_token": "USDT",
  "amount": 100,
  "available_tokens": "TRX,USDT-POLYGON,ECG-Binance",
  "description": "Payment for invoice #124",
  "client_order_identifier": "3"
}`

const cUrl = `curl -X POST https://api.easybitpay.com/invoices \\
  -H "X-API-Key: YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "base_token": "USDT",
    "amount": 100,
    "available_tokens": "TRX,USDT-POLYGON,ECG-Binance",
    "description": "Payment for invoice #124",
    "client_order_identifier": "3"
}'`

const php = `// Create invoice
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
return redirect($data['payment_url']);`

const response = `{
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
}`
</script>

<template>
  <section id="invoice" class="mb-10">
    <h2 class="pb-3 border-bottom mb-4 text-dark">5. Invoices API</h2>
  </section>

  <section id="incoice-create" class="mb-10">
    <h4 class="text-dark mb-4">5.1 Create Invoice</h4>

    <div class="card mb-3">
      <div class="card-body d-flex flex-wrap align-items-center gap-3 p-4">
        <span class="badge bg-green-100 text-green-700 px-3 py-2">POST</span>

        <span class="fs-7 text-dark">/invoices</span>
      </div>
    </div>

    <p class="text-gray-800 dark-text-gray-400 fs-8">
      Create a new invoice. Pass the <span class="text-dark fw-bolder">base token</span> (by name or ID), charge
      amount, a description, and your internal order ID (<span
        class="badge badge-primary dark-bg-gray-100 dark-text-primary"
      >
        client_order_identifier </span
      >).
    </p>

    <h5 class="text-dark mb-4 fs-7">HEADERS</h5>

    <div class="card mb-4">
      <div class="card-body p-4">
        <pre class="text-dark mb-0"><code>X-API-Key: &lt;YOUR_API_KEY&gt;

Content-Type: application/json</code></pre>
      </div>
    </div>

    <h5 class="text-dark mb-4 fs-7">REQUEST BODY</h5>
    <div class="card prism-card mb-4">
      <div class="card-header">
        <nav>
          <div class="nav nav-tabs" id="nav-tab" role="tablist">
            <button
              class="nav-link active"
              id="invoice-request-json-tab"
              data-bs-toggle="tab"
              data-bs-target="#invoice-request-json-nav"
              type="button"
              role="tab"
              aria-controls="invoice-request-json-nav"
              aria-selected="true"
            >
              JSON
            </button>
            <button
              class="nav-link"
              id="invoice-request-curl-tab"
              data-bs-toggle="tab"
              data-bs-target="#invoice-request-curl-nav"
              type="button"
              role="tab"
              aria-controls="invoice-request-curl-nav"
              aria-selected="false"
            >
              cURL
            </button>
            <button
              class="nav-link"
              id="invoice-request-php-tab"
              data-bs-toggle="tab"
              data-bs-target="#invoice-request-php-nav"
              type="button"
              role="tab"
              aria-controls="invoice-request-php-nav"
              aria-selected="false"
            >
              PHP
            </button>
          </div>
        </nav>
      </div>
      <div class="card-body">
        <div class="tab-content" id="nav-tabContent">
          <div
            class="tab-pane show active"
            id="invoice-request-json-nav"
            role="tabpanel"
            aria-labelledby="invoice-request-json-tab"
            tabindex="0"
          >
            <pre class="language-javascript"><code>{{ json }}</code></pre>
          </div>
          <div
            class="tab-pane"
            id="invoice-request-curl-nav"
            role="tabpanel"
            aria-labelledby="invoice-request-curl-tab"
            tabindex="0"
          >
            <pre class="language-javascript"><code>{{ cUrl }}</code></pre>
          </div>
          <div
            class="tab-pane"
            id="invoice-request-php-nav"
            role="tabpanel"
            aria-labelledby="invoice-request-php-tab"
            tabindex="0"
          >
            <pre class="language-javascript"><code>{{ php }}</code></pre>
          </div>
        </div>
      </div>
    </div>

    <h5 class="text-dark mb-4 fs-7">RESPONSE</h5>
    <div class="card prism-card mb-4">
      <div class="card-body p-6">
        <pre class="language-javascript"><code>{{ response }}</code></pre>
      </div>
    </div>

    <div class="alert alert-card alert-primary mb-2" role="alert">
      <span class="fw-bolder">Next step:</span> Redirect your customer to
      <span class="badge badge-primary bg-gray-100">payment_url</span>
    </div>
  </section>

  <section id="invoice-get" class="mb-10">
    <h4 class="text-dark mb-4">5.2 Get Invoice (Details)</h4>

    <div class="card mb-3">
      <div class="card-body d-flex flex-wrap align-items-center gap-3 p-4">
        <span class="badge bg-blue-100 text-blue-700 px-3 py-2">GET</span>

        <span class="fs-7 text-dark">/invoices/{code}</span>
      </div>
    </div>

    <p class="text-gray-800 dark-text-gray-400 fs-8">
      Retrieve invoice by its short unique
      <span class="badge badge-primary dark-bg-gray-100 dark-text-primary"> code</span>.
    </p>
  </section>

  <section id="invoice-status" class="mb-10">
    <h4 class="text-dark mb-4">5.3 Get Payment Status</h4>

    <div class="card mb-3">
      <div class="card-body d-flex flex-wrap align-items-center gap-3 p-4">
        <span class="badge bg-blue-100 text-blue-700 px-3 py-2">GET</span>

        <span class="fs-7 text-dark">/invoices/status/{code}</span>
      </div>
    </div>

    <p class="text-gray-800 dark-text-gray-400 fs-8">
      Fetch the latest payment status for the invoice
      <span class="badge badge-primary dark-bg-gray-100 dark-text-primary"> code</span>.
    </p>

    <p class="fs-7 fw-medium text-dark">Typical Statuses</p>
    <div class="d-flex flex-wrap align-items-center gap-3 mb-4">
      <span class="badge badge-warning px-3 py-2">pending</span>
      <span class="badge badge-primary px-3 py-2">paid</span>
      <span class="badge badge-success px-3 py-2">confirmed</span>
      <span class="badge badge-danger px-3 py-2">failed / expired</span>
    </div>

    <div
      class="px-3 py-4 fs-8 text-dark rounded-1 border-primary"
      style="border-inline-start: 3px solid"
    >
      <span class="text-dark fw-bolder">Note:</span>
      In some responses you may see numeric status codes. For example,
      <span class="badge badge-primary dark-bg-gray-100 dark-text-primary">status: 10</span> means <span class="text-dark fw-bolder">paid</span>.
    </div>
  </section>
</template>
