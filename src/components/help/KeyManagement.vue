<script setup></script>

<template>
  <section id="key-management" class="mb-10">
    <h2 class="pb-3 border-bottom mb-4 text-dark">4. Key Management (Public / Private Keys)</h2>

    <p class="text-gray-800 dark-text-gray-400 mb-6">
      When you generate a <span class="text-dark fw-bolder">public key</span> in the panel, the
      system <span class="text-dark fw-bolder">also generates a matching private key</span>. This
      private key is used to
      <span class="text-dark fw-bolder">confirm data authenticity</span>(e.g., to build/verify
      <span class="badge badge-primary dark-bg-gray-100 dark-text-primary"> EVENT_HASH </span> in
      callbacks).
    </p>

    <div class="d-flex flex-column gap-2 fs-7 mb-6">
      <div class="card">
        <div class="card-body p-4">
          <p class="mb-0 d-flex align-items-center gap-2">
            <inline-svg src="media/icons/icons/ok.svg" class="svg-icon-success"></inline-svg>
            <span>
              The <span class="text-dark fw-bolder"> private key is shown only once </span> at
              creation time. Store it securely (HSM, vault, KMS).
            </span>
          </p>
        </div>
      </div>

      <div class="card">
        <div class="card-body p-4">
          <p class="mb-0 d-flex align-items-center gap-2">
            <inline-svg src="media/icons/icons/ok.svg" class="svg-icon-success"></inline-svg>

            <span>
              If you lose it, <span class="text-dark fw-bolder">revoke</span> the key pair and
              generate a new one; the previous private key cannot be retrieved again.
            </span>
          </p>
        </div>
      </div>

      <div class="card">
        <div class="card-body p-4">
          <p class="mb-0 d-flex align-items-center gap-2">
            <inline-svg src="media/icons/icons/ok.svg" class="svg-icon-success"></inline-svg>

            <span>Rotate keys periodically and after any suspected compromise.</span>
          </p>
        </div>
      </div>

      <div class="card">
        <div class="card-body p-4">
          <p class="mb-0 d-flex align-items-center gap-2">
            <inline-svg src="media/icons/icons/ok.svg" class="svg-icon-success"></inline-svg>

            <span>Keep separate key pairs per environment (sandbox vs mainnet).</span>
          </p>
        </div>
      </div>

      <div class="card">
        <div class="card-body p-4">
          <p class="mb-0 d-flex align-items-center gap-2">
            <inline-svg src="media/icons/icons/ok.svg" class="svg-icon-success"></inline-svg>

            <span>
              The <span class="text-dark fw-bolder"> private key is shown only once </span> at
              creation time. Store it securely (HSM, vault, KMS).
            </span>
          </p>
        </div>
      </div>
    </div>

    <div
      class="px-3 py-4 fs-8 text-dark rounded-1 border-primary"
      style="border-inline-start: 3px solid"
    >
      You will also configure a <span class="text-dark fw-bolder">Callback URL</span> in the gateway
      settings. EasyBitPay will send payment notifications there.
    </div>
  </section>
</template>
