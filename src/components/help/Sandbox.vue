<script setup></script>

<template>
  <section id="sandbox" class="mb-10">
    <h2 class="pb-3 border-bottom mb-4 text-dark">7. Sandbox Utilities</h2>

    <div class="card mb-3">
      <div class="card-body d-flex flex-wrap align-items-center justify-content-between gap-3 p-4">
        <div class="d-flex flex-wrap align-items-center gap-3">
          <span class="badge bg-green-100 text-green-700 px-3 py-2">POST</span>

          <span class="fs-7 text-dark">/invoices/update-status/{code}</span>
        </div>

        <span class="badge bg-yellow-200 text-yellow-700">Sandbox Only</span>
      </div>
    </div>

    <p class="text-gray-800 dark-text-gray-400 fs-7 mb-6">
      Simulate <span class="badge badge-primary dark-bg-gray-100 dark-text-primary"> pay </span>,
      <span class="badge badge-primary dark-bg-gray-100 dark-text-primary"> cancel </span>,
      <span class="badge badge-primary dark-bg-gray-100 dark-text-primary"> expire </span> to test webhooks and state
      transitions.
    </p>
  </section>
</template>
