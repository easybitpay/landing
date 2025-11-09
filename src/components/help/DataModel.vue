<script setup></script>

<template>
  <section id="data-model" class="mb-10">
    <h2 class="pb-3 border-bottom mb-4 text-dark">9. Data Model & Parameters</h2>

    <div class="card">
      <div class="card-body p-0">
        <div class="table-responsive">
          <table class="table simple-table align-middle data-mode-table">
            <thead>
              <tr>
                <th class="min-w-200px">Field</th>
                <th>Type</th>
                <th>Required</th>
                <th class="min-w-300px">Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span class="badge badge-primary dark-bg-gray-100 dark-text-primary">
                    base_token
                  </span>
                </td>
                <td>string/int</td>
                <td>
                  <inline-svg src="media/icons/icons/ok.svg" class="svg-icon-success"></inline-svg>
                </td>
                <td>
                  Base token by name/symbol (e.g.,
                  <span class="badge badge-primary dark-bg-gray-100 dark-text-primary"> USDT </span
                  >) or ID
                </td>
              </tr>

              <tr>
                <td>
                  <span class="badge badge-primary dark-bg-gray-100 dark-text-primary">
                    amount
                  </span>
                </td>
                <td>number/int</td>
                <td>
                  <inline-svg src="media/icons/icons/ok.svg" class="svg-icon-success"></inline-svg>
                </td>
                <td>Amount to charge in base token</td>
              </tr>

              <tr>
                <td>
                  <span class="badge badge-primary dark-bg-gray-100 dark-text-primary">
                    available_tokens
                  </span>
                </td>
                <td>string</td>
                <td>—</td>
                <td>
                  CSV list of tokens/networks (e.g.,
                  <span class="badge badge-primary dark-bg-gray-100 dark-text-primary"> TRX </span>
                  ,<span class="badge badge-primary dark-bg-gray-100 dark-text-primary">
                    USDT-POLYGON </span
                  >)
                </td>
              </tr>

              <tr>
                <td>
                  <span class="badge badge-primary dark-bg-gray-100 dark-text-primary">
                    description
                  </span>
                </td>
                <td>string</td>
                <td>—</td>
                <td>Human-readable invoice description</td>
              </tr>

              <tr>
                <td>
                  <span class="badge badge-primary dark-bg-gray-100 dark-text-primary">
                    client_order_identifier
                  </span>
                </td>
                <td>string</td>
                <td>—</td>
                <td>Your order ID (idempotency)</td>
              </tr>

              <tr>
                <td>
                  <span class="badge badge-primary dark-bg-gray-100 dark-text-primary"> code </span>
                </td>
                <td>string</td>
                <td>—</td>
                <td>Short unique invoice code (response)</td>
              </tr>

              <tr>
                <td>
                  <span class="badge badge-primary dark-bg-gray-100 dark-text-primary">
                    payment_url
                  </span>
                </td>
                <td>string</td>
                <td>—</td>
                <td>Hosted checkout URL (response)</td>
              </tr>

              <tr>
                <td>
                  <span class="badge badge-primary dark-bg-gray-100 dark-text-primary">
                    EVENT_HASH
                  </span>
                </td>
                <td>string</td>
                <td>—</td>
                <td>MD5 of concatenated fields + private key + timestamp (callback)</td>
              </tr>

              <tr>
                <td>
                  <span class="badge badge-primary dark-bg-gray-100 dark-text-primary">
                    EVENT_TIME
                  </span>
                </td>
                <td>integer</td>
                <td>—</td>
                <td>Unix epoch seconds (replay protection, callback)</td>
              </tr>

              <tr>
                <td>
                  <span class="badge badge-primary dark-bg-gray-100 dark-text-primary"> MODE </span>
                </td>
                <td>string</td>
                <td>—</td>
                <td>
                  <span class="badge badge-primary dark-bg-gray-100 dark-text-primary">
                    "live"
                  </span>
                  means mainnet (callback)
                </td>
              </tr>

              <tr>
                <td>
                  <span class="badge badge-primary dark-bg-gray-100 dark-text-primary">
                    status
                  </span>
                </td>
                <td>int/string</td>
                <td>—</td>
                <td>
                  Example:
                  <span class="badge badge-primary dark-bg-gray-100 dark-text-primary"> 10 </span> ⇒
                  <span class="fw-bolder text-dark">paid</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>
