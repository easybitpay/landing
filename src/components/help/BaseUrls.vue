<script setup></script>

<template>
  <section id="base-urls" class="mb-10">
    <h2 class="pb-3 border-bottom mb-4 text-dark">3. Base URLs</h2>

    <div class="card mb-4">
      <div class="card-body p-0">
        <div
          class="d-flex flex-column flex-md-row align-items-start align-items-md-center gap-3 p-4 border-bottom"
        >
          <p class="w-120px min-w-120px fw-medium fs-7 text-dark mb-0">Mainnet</p>

          <span class="badge badge-primary dark-bg-gray-100 dark-text-primary text-start">
            https://api.easybitpay.com</span
          >
        </div>

        <div
          class="d-flex flex-column flex-md-row align-items-start align-items-md-center gap-3 flex-wrap p-4"
        >
          <p class="w-120px min-w-120px fw-medium fs-7 text-dark mb-0">Sandbox</p>

          <div class="badge badge-primary dark-bg-gray-100 dark-text-primary text-start">
            https://api-sandbox.easybitpay.com
          </div>
        </div>
      </div>
    </div>

    <div class="px-3 py-4 fs-8 text-dark rounded-1 border-primary" style="border-inline-start: 3px solid">
      All endpoints described below are relative to these base URLs.
    </div>
  </section>
</template>
