<script setup></script>

<template>
  <section id="security">
    <h2 class="pb-3 border-bottom mb-4 text-dark">10. Security & Best Practices</h2>

    <div class="row gy-6">
      <div class="col-md-6 col-xxl-4">
        <div class="card h-100">
          <div class="card-body">
            <svg
              class="text-primary mb-4"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              data-v-7dd5efbe=""
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" data-v-7dd5efbe=""></rect>
              <path d="M7 11V7a5 5 0 0110 0v4" data-v-7dd5efbe=""></path>
            </svg>

            <h6 class="text-dark mb-2">Private Key Security</h6>

            <p class="fs-8 mb-0">
              Private key is displayed only once; store securely and revoke/rotate on exposure
            </p>
          </div>
        </div>
      </div>

      <div class="col-md-6 col-xxl-4">
        <div class="card h-100">
          <div class="card-body">
            <svg
              class="text-primary mb-4"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              data-v-7dd5efbe=""
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" data-v-7dd5efbe=""></path>
            </svg>

            <h6 class="text-dark mb-2">HTTPS Only</h6>

            <p class="fs-8 mb-0">Use HTTPS for all API and webhook traffic</p>
          </div>
        </div>
      </div>

      <div class="col-md-6 col-xxl-4">
        <div class="card h-100">
          <div class="card-body">
            <svg
              class="text-primary mb-4"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              data-v-7dd5efbe=""
            >
              <circle cx="12" cy="12" r="10" data-v-7dd5efbe=""></circle>
              <polyline points="12 6 12 12 16 14" data-v-7dd5efbe=""></polyline>
            </svg>

            <h6 class="text-dark mb-2">Key Rotation</h6>

            <p class="fs-8 mb-0">Rotate keys periodically, separate by environment/gateway</p>
          </div>
        </div>
      </div>

      <div class="col-md-6 col-xxl-4">
        <div class="card h-100">
          <div class="card-body">
            <svg
              class="text-primary mb-4"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              data-v-7dd5efbe=""
            >
              <path
                d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"
                data-v-7dd5efbe=""
              ></path>
              <polyline points="14 2 14 8 20 8" data-v-7dd5efbe=""></polyline>
            </svg>

            <h6 class="text-dark mb-2">Idempotency</h6>

            <p class="fs-8 mb-0">
              Use
              <span class="badge badge-primary dark-bg-gray-100 dark-text-primary"
                >client_order_identifier</span
              >
              for idempotent operations
            </p>
          </div>
        </div>
      </div>

      <div class="col-md-6 col-xxl-4">
        <div class="card h-100">
          <div class="card-body">
            <svg
              class="text-primary mb-4"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              data-v-7dd5efbe=""
            >
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14" data-v-7dd5efbe=""></path>
              <polyline points="22 4 12 14.01 9 11.01" data-v-7dd5efbe=""></polyline>
            </svg>

            <h6 class="text-dark mb-2">Verify Callbacks</h6>

            <p class="fs-8 mb-0">
              Always verify
              <span class="badge badge-primary dark-bg-gray-100 dark-text-primary">EVENT_HASH</span>
              and guard against replay attacks
            </p>
          </div>
        </div>
      </div>

      <div class="col-md-6 col-xxl-4">
        <div class="card h-100">
          <div class="card-body">
            <svg
              class="text-primary mb-4"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              data-v-7dd5efbe=""
            >
              <path
                d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"
                data-v-7dd5efbe=""
              ></path>
              <polyline points="14 2 14 8 20 8" data-v-7dd5efbe=""></polyline>
              <line x1="16" y1="13" x2="8" y2="13" data-v-7dd5efbe=""></line>
              <line x1="16" y1="17" x2="8" y2="17" data-v-7dd5efbe=""></line>
              <polyline points="10 9 9 9 8 9" data-v-7dd5efbe=""></polyline>
            </svg>

            <h6 class="text-dark mb-2">Logging</h6>

            <p class="fs-8 mb-0">Log request IDs and results; avoid logging secrets</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
