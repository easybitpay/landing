<script setup></script>

<template>
  <section id="concepts">
    <h2 class="pb-3 border-bottom mb-4 text-dark">1. Concepts & Environments</h2>
  </section>

  <section id="concepts-environments" class="mb-10">
    <h4 class="text-dark mb-4">Environments</h4>

    <div class="row gy-4">
      <div class="col-md-6">
        <div class="card h-100">
          <div class="card-body">
            <h6 class="text-dark mb-4">Mainnet (Production)</h6>

            <input
              type="text"
              value="https://api.easybitpay.com"
              class="form-control form-control-sm mb-3 text-primary"
              readonly
            />
            <div class="d-flex align-items-center gap-2">
              <p class="fs-8 mb-0">Callback MODE:</p>
              <span class="badge badge-success">Live</span>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-6">
        <div class="card h-100">
          <div class="card-body">
            <h6 class="text-dark mb-4">Sandbox (Testing)</h6>

            <input
              type="text"
              value="https://api-sandbox.easybitpay.com"
              class="form-control form-control-sm mb-3 text-primary"
              readonly
            />
            <div class="d-flex align-items-center gap-2">
              <p class="fs-8 mb-0">No real token movement</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="concepts-flow" class="mb-10">
    <h4 class="text-dark mb-4">Account Setup & Flow</h4>

    <ol class="d-flex flex-column gap-2 fs-7 text-gray-800 dark-text-gray-400">
      <li><span class="text-dark fw-medium">Register</span> in the EasyBitPay panel</li>
      <li>
        <span class="text-dark fw-medium">Create a gateway</span> (configure name, image, banner)
      </li>
      <li>
        <span class="text-dark fw-medium">Generate an API key</span> for that gateway (merchants can
        manage multiple gateways)
      </li>
      <li>
        <span class="text-dark fw-medium">Validate your site/domain</span> — once validated, the API
        key activates
      </li>
      <li><span class="text-dark fw-medium">Create invoices</span> from the panel or via API</li>
      <li>
        <span class="text-dark fw-medium">Redirect customers</span> to the hosted checkout
        <span class="badge badge-primary dark-bg-gray-100 dark-text-primary">payment_url</span>
      </li>
      <li>
        <span class="text-dark fw-medium">Receive callbacks</span> on your callback URL with payment
        events
      </li>
      <li>
        <span class="text-dark fw-medium">Verify </span>callback authenticity using
        <span class="badge badge-primary dark-bg-gray-100 dark-text-primary">EVENT_HASH</span> ,
        then update your order state
      </li>
    </ol>
  </section>

  <section id="concepts-tokens" class="mb-10">
    <h4 class="text-dark mb-4">Tokens</h4>
    <p>
      You may pass <span class="text-dark fw-medium">token IDs</span> or
      <span class="text-dark fw-medium">token names/symbols</span> (e.g.,
      <span class="badge badge-primary dark-bg-gray-100 dark-text-primary">USDT</span>,
      <span class="badge badge-primary dark-bg-gray-100 dark-text-primary">TRX</span>,
      <span class="badge badge-primary dark-bg-gray-100 dark-text-primary">USDT-POLYGON</span>,
      <span class="badge badge-primary dark-bg-gray-100 dark-text-primary">ECG-Binance</span> ).
    </p>

    <p class="fs-7 text-gray-800 dark-text-gray-400 mb-0">
      Use
      <span class="badge badge-primary dark-bg-gray-100 dark-text-primary">available_tokens</span>
      to restrict which tokens the end-user can choose at checkout.
    </p>
  </section>
</template>
