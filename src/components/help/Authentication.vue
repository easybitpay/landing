<script setup></script>

<template>
  <section id="authentication" class="mb-10">
    <h2 class="pb-3 border-bottom mb-4 text-dark">2. Authentication</h2>

    <p class="text-gray-800 dark-text-gray-400">Every request must include your gateway key:</p>

    <div class="card mb-4">
      <div class="card-body p-4">
        <pre class="text-dark mb-0"><code>X-API-Key: &lt;YOUR_API_KEY&gt;</code></pre>
      </div>
    </div>

    <div class="alert alert-card alert-warning mb-0" role="alert">
      <span class="fw-bolder">Security Note: </span>

      Use different keys for sandbox vs production. Never expose keys in frontend code or public
      repos.
    </div>
  </section>
</template>
