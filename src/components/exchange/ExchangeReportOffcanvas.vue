<script setup>
// Vue
import { computed, ref, onMounted } from 'vue'

// Store
import { useExchangeStore } from '@/stores/exchange'

// Route
import { useRoute } from 'vue-router'

// Bootstrap
import { Offcanvas } from 'bootstrap'

// ----- START ----- //

// Generals
const route = useRoute()
const store = useExchangeStore()

// Refs
const loading = ref(false)
const reciep = ref({})

// Computeds
const orderId = computed(() => route.query.orderId)

// Functions

const convertStatusToColor = (status) => {
  if (status === 'pending') return 'warning'
  if (status === 'success') return 'success'
  if (status === 'expired' || status === 'canceled') return 'danger'
}

/**
 * Show Canvas
 */
const showCanvas = () => {
  const bsOffcanvas = new Offcanvas('#exchangeReport_offcanvas')
  bsOffcanvas.show()
}

/**
 * Get Reciep Info
 */
const getReciepInfo = async () => {
  // Start Loading
  loading.value = true

  // Request
  await store.getExchangeReciep(orderId.value).then((res) => {
    if (res) {
      reciep.value = res
    }
  })

  // Stop Loading
  loading.value = false
}

onMounted(() => {
  if (orderId.value) {
    showCanvas()

    getReciepInfo()
  }
})
</script>

<template>
  <div
    class="offcanvas offcanvas-bottom w-100 mw-792px"
    tabindex="-1"
    id="exchangeReport_offcanvas"
    aria-labelledby="offcanvasExchangeReport"
  >
    <div class="offcanvas-body">
      <inline-svg
        src="media/icons/icons/close.svg"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
        class="d-block mx-auto mb-4 cursor-pointer svg-icon-primary"
      ></inline-svg>

      <!-- begin::Content Card -->
      <div class="card border-0 mb-4">
        <div class="card-body pb-lg-22">
          <!-- begin::Header -->
          <div class="d-flex gap-4">
            <div>
              <div class="svg-holder">
                <inline-svg
                  :src="`/media/icons/shapes/${$filters.shapeStatus('balance')}.svg`"
                  width="39"
                  height="35"
                ></inline-svg>
              </div>
            </div>

            <div class="mb-10">
              <h3 class="mb-0 text-gray-900">Exchange Report</h3>

              <p class="fs-7 mb-0 text-gray-800 ls-base">Instance Exchange Reciep</p>
            </div>
          </div>
          <!-- end::Header -->

          <!-- begin::Content -->
          <div>
            <!-- begin::Receive Address -->
            <div class="fs-7 ls-sm">
              <p class="text-gray-600 mb-2">Receive Address</p>
              <p class="text-gray-800 mb-0">
                <Skeletor v-if="loading" class="rounded-0" />
                {{ reciep.receive_address }}
              </p>
            </div>
            <!-- end::Receive Address -->

            <!-- begin::Spacer -->
            <div class="border-bottom border-gray-400 w-100 my-4"></div>
            <!-- end::Spacer -->

            <!-- begin::Info -->
            <div class="auto-infos">
              <!-- begin::Item -->
              <div class="item">
                <p class="title">Status</p>
                <p :class="`value text-${convertStatusToColor(reciep.status)}`">
                  <Skeletor width="80px" v-if="loading" class="rounded-0" />

                  {{ $filters.capitalize(reciep.status) }}
                </p>
              </div>
              <!-- end::Item -->

              <!-- begin::Item -->
              <div class="item">
                <p class="title">Send Token</p>
                <p class="value">
                  <Skeletor width="150px" v-if="loading" class="rounded-0" />
                  <template v-else>
                    {{ reciep?.send_token?.name }}
                    <small>({{ reciep?.send_token?.network?.name }})</small>
                  </template>
                </p>
              </div>
              <!-- end::Item -->

              <!-- begin::Item -->
              <div class="item">
                <p class="title">Receive Token</p>

                <p class="value">
                  <Skeletor width="150px" v-if="loading" class="rounded-0" />
                  <template v-else>
                    {{ reciep?.receive_token?.name }}
                    <small>({{ reciep?.receive_token?.network?.name }})</small>
                  </template>
                </p>
              </div>
              <!-- end::Item -->
            </div>
            <!-- end::Info -->

            <!-- begin::Spacer -->
            <div class="border-bottom border-gray-400 w-100 my-4"></div>
            <!-- end::Spacer -->

            <!-- begin::Info -->
            <div class="auto-infos">
              <!-- begin::Item -->
              <div class="item">
                <p class="title">Order ID</p>
                <p class="value">
                  <Skeletor width="50px" v-if="loading" class="rounded-0" />
                  {{ reciep.id }}
                </p>
              </div>
              <!-- end::Item -->

              <!-- begin::Item -->
              <div class="item">
                <p class="title">Exchange Rate</p>
                <p class="value">
                  <Skeletor width="50px" v-if="loading" class="rounded-0" />
                  {{ reciep.exchange_rate }}
                </p>
              </div>
              <!-- end::Item -->

              <!-- begin::Item -->
              <div class="item">
                <p class="title">Fee</p>
                <p class="value">
                  <Skeletor width="50px" v-if="loading" class="rounded-0" />
                  {{ reciep.fee }}
                </p>
              </div>
              <!-- end::Item -->

              <!-- begin::Item -->
              <div class="item">
                <p class="title">Send Amount</p>
                <p class="value">
                  <Skeletor width="50px" v-if="loading" class="rounded-0" />
                  {{ reciep.send_amount }}
                </p>
              </div>
              <!-- end::Item -->

              <!-- begin::Item -->
              <div class="item">
                <p class="title">Receive Amount</p>
                <p class="value">
                  <Skeletor width="50px" v-if="loading" class="rounded-0" />
                  {{ reciep.receive_amount }}
                </p>
              </div>
              <!-- end::Item -->
            </div>
            <!-- end::Info -->
          </div>
          <!-- end::Content -->
        </div>
      </div>
      <!-- end::Content Card -->

      <!-- begin::Action Card -->
      <div class="d-flex gap-4">
        <div class="d-none d-md-flex">
          <div
            class="w-56px h-56px d-flex align-items-center justify-content-center rounded-3 bg-white"
          >
            <inline-svg
              :src="`/media/icons/shapes/${$filters.shapeStatus('documentation')}.svg`"
            ></inline-svg>
          </div>
        </div>
        <div class="card border-0 mb-6 w-100">
          <div
            class="card-body px-4 py-3 d-flex flex-wrap align-items-center justify-content-between gap-4"
          >
            <p class="fs-7 mb-0 ls-base text-gray-800 lh-32px">
              Latest clicks/conversions. Are you sure?
            </p>

            <!-- begin::Actions -->
            <div class="d-flex gap-4 w-100 w-sm-initial">
              <button
                type="button"
                class="btn btn-sm btn-primary w-100 w-sm-104px h-24px ls-base fw-normal"
              >
                Share
              </button>
            </div>
            <!-- end::Actions -->
          </div>
        </div>
      </div>
      <!-- end::Action Card -->
    </div>
  </div>
</template>
