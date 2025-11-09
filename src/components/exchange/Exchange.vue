<script setup>
// Vue
import { computed, onMounted, ref } from 'vue'

// Store
import { useExchangeStore } from '@/stores/exchange'

// Composabless
import useForm from '@/composables/useForm'

// Vuelidate
import useVuelidate from '@vuelidate/core'
import { helpers, required } from '@vuelidate/validators'

// Address Validator
import WAValidator from 'multicoin-address-validator/dist/wallet-address-validator.js'

// Componenets
import CoinDropdown from '../globals/CoinDropdown.vue'
import ExchangeReportOffcanvas from './ExchangeReportOffcanvas.vue'

// ----- START ----- //

// Generals
const store = useExchangeStore()
const { showFeedBacks } = useForm()

// Refs
const sendTokens = ref([])
const receiveTokens = ref([])
const exchangeRate = ref(0)

const selectedSendToken = ref({})
const selectedReceiveToken = ref({})

const loadings = ref({
  box: false,
  submit: false
})

// Computeds
const receiveAmount = computed(() => {
  const amount = +form.value.sendAmount
  const rate = +exchangeRate.value

  return amount * rate
})

// Vuelidate
const form = ref({
  sendAmount: null,
  sendTokenId: null,
  receiveAddress: null,
  receiveTokenId: null
})

const rules = {
  sendAmount: {
    required: helpers.withMessage('Send amount is required', required)
  },
  sendTokenId: {
    required: helpers.withMessage('Send token is required', required)
  },
  receiveTokenId: {
    required: helpers.withMessage('Receive token is required', required)
  },
  receiveAddress: {
    required: helpers.withMessage('Receive address is required', required)
  }
}

const v$ = useVuelidate(rules, form)

// Functions

/**
 * Toggle Send Token
 * @param {token} token
 */
const toggleSendToken = (token) => {
  selectedSendToken.value = token
  form.value.sendTokenId = token.id
  getExchangeRate()
}

/**
 * Toggle Receive Token
 * @param {token} token
 */
const toggleReceiveToken = (token) => {
  selectedReceiveToken.value = token
  form.value.receiveTokenId = token.id
  validateAddress()
  getExchangeRate()
}

/**
 * Validate Wallet Address
 */
const addressValidFlag = ref(false)
const validAddress = ref(false)
const validateAddress = async () => {
  addressValidFlag.value = true

  const valid = WAValidator.validate(
    `${form.value.receiveAddress}`,
    `${selectedReceiveToken.value.network.chain_type.toUpperCase()}`
  )

  if (valid) validAddress.value = true
  else validAddress.value = false
}

/**
 * Send Token Error Message
 */
const sendTokenError = computed(() => {
  if (v$.value.sendAmount.$errors.length && v$.value.sendTokenId.$errors.length) {
    return 'Send amount & token are required'
  } else if (v$.value.sendAmount.$errors.length) {
    return v$.value.sendAmount.$errors[0].$message
  } else if (v$.value.sendTokenId.$errors.length) {
    return v$.value.sendTokenId.$errors[0].$message
  } else {
    return ''
  }
})

/**
 * Receive Address Error Message
 */
const receiveAddressError = computed(() => {
  if (v$.value.receiveAddress.$errors.length) {
    return v$.value.receiveAddress.$errors[0].$message
  } else if (addressValidFlag.value && !validAddress.value) {
    return 'Receive address is not valid'
  } else {
    return ''
  }
})

/**
 * Get Send And Receive Tokens
 */
const getTokens = async () => {
  // Start Loading
  loadings.value.box = true

  // Request
  await store.getExchangeTokens().then((res) => {
    if (res) {
      sendTokens.value = res.sendTokens
      receiveTokens.value = res.receiveTokens
    }
  })

  // Stop Loading
  loadings.value.box = false
}

/**
 * Get Exchange Rate
 */
const getExchangeRate = async () => {
  if (form.value.sendTokenId && form.value.receiveTokenId) {
    // start loading
    loadings.value.box = true

    // set variable
    let params = {
      sendTokenId: form.value.sendTokenId,
      receiveTokenId: form.value.receiveTokenId
    }

    // request
    await store.getExchangeRate(params).then((res) => {
      if (res) {
        exchangeRate.value = res
      }
    })

    // stop loading
    loadings.value.box = false
  }
}

/**
 * Exchange Function
 */
const exchange = async () => {
  // Validate Form
  const result = await v$.value.$validate()
  const valid_address = validAddress.value

  if (result && valid_address) {
    // Start loading
    loadings.value.submit = true

    // Request
    await store.getExchangeLink(form.value).then((res) => {
      if (res) {
        window.location = res
      }
    })

    // Stop loading
    loadings.value.submit = false
  } else {
    showFeedBacks()
  }
}

onMounted(() => {
  getTokens()
})
</script>
<template>
  <div class="bg-gray-200">
    <div
      class="container d-flex justify-content-center justify-content-lg-end py-18 position-relative"
    >
      <!-- begin::Content -->
      <div class="card border-gray-300 w-100 mw-lg-400px mw-xl-448px">
        <div class="card-body">
          <!-- begin::Form -->
          <form @submit.prevent="exchange">
            <!-- begin::Send -->
            <div
              class="d-flex flex-column flex-sm-row align-items-start align-items-sm-center row-gap-2 column-gap-4 mb-8"
            >
              <!-- begin::Label -->
              <div>
                <label for="send" class="w-100 w-sm-104px text-gray-900"> You send </label>
              </div>
              <!-- end::Label -->

              <!-- begin::Input Box -->
              <div class="w-100 position-relative d-flex align-items-center">
                <input
                  id="send"
                  type="number"
                  class="form-control px-9"
                  placeholder="Amount"
                  v-model="form.sendAmount"
                />

                <div
                  class="invalid-feedback form-control"
                  v-if="v$.sendAmount.$errors.length || v$.sendTokenId.$errors.length"
                >
                  <span>
                    {{ sendTokenError }}
                  </span>
                </div>

                <!-- begin::Icon -->
                <inline-svg
                  src="media/icons/icons/arrow-forward.svg"
                  class="position-absolute start-8px"
                ></inline-svg>
                <!-- end::Icon -->

                <CoinDropdown
                  class="position-absolute end-8px"
                  showImage
                  showCoinNetwork
                  check="id"
                  :items="sendTokens"
                  :selected="selectedSendToken"
                  @change="toggleSendToken"
                />
              </div>
              <!-- end::Input Box -->
            </div>
            <!-- end::Send -->

            <!-- begin::Receive -->
            <div
              class="d-flex flex-column flex-sm-row align-items-start align-items-sm-center row-gap-2 column-gap-4 mb-8"
            >
              <!-- begin::Label -->
              <div>
                <label for="receive" class="w-100 w-sm-104px text-gray-900"> You Recieve </label>
              </div>
              <!-- end::Label -->

              <!-- begin::Input Box -->
              <div class="w-100 position-relative d-flex align-items-center">
                <input
                  id="receive"
                  type="number"
                  class="form-control px-9"
                  placeholder="Amount"
                  :value="receiveAmount"
                  readonly
                />

                <div class="invalid-feedback form-control" v-if="v$.receiveTokenId.$errors.length">
                  <span> {{ v$.receiveTokenId.$errors[0].$message }}</span>
                </div>

                <!-- begin::Icon -->
                <inline-svg
                  src="media/icons/icons/arrow-backward.svg"
                  class="position-absolute start-8px"
                ></inline-svg>
                <!-- end::Icon -->

                <CoinDropdown
                  class="position-absolute end-8px"
                  showImage
                  showCoinNetwork
                  check="id"
                  :items="receiveTokens"
                  :selected="selectedReceiveToken"
                  @change="toggleReceiveToken"
                />
              </div>
              <!-- end::Input Box -->
            </div>
            <!-- end::Receive -->

            <!-- begin::Receive Address -->
            <div class="w-100 position-relative d-flex align-items-center">
              <input
                id="send"
                type="text"
                class="form-control"
                placeholder="Recipient’s address"
                v-model="form.receiveAddress"
                @change="validateAddress"
              />

              <div
                class="invalid-feedback form-control"
                v-if="v$.receiveAddress.$errors.length || (addressValidFlag && !validAddress)"
              >
                <span> {{ receiveAddressError }}</span>
              </div>
            </div>
            <!-- end::Receive Address -->

            <!-- begin::Submit -->
            <button
              type="submit"
              :disabled="loadings.submit"
              class="btn btn-primary mw-240px w-100 neue-machina fs-4 fw-normal mt-12 ms-auto"
            >
              {{ loadings.submit ? 'Loading...' : 'Submit' }}
            </button>
            <!-- end::Submit -->
          </form>
          <!-- end::Form -->
        </div>

        <GlobalsBoxLoading v-if="loadings.box" />
      </div>
      <!-- end::Content -->

      <!-- begin::Fluid Image -->
      <div class="exchange-fluid-image">
        <div class="image-wrapper">
          <img src="/media/images/bg/exchange.svg" alt="exchange" class="img-fluid" />
          <h1 class="m-0 text">
            Stay in the
            <br />
            wallet
            <br />
            swap
            <br />
            instantly
          </h1>
        </div>
      </div>
      <!-- end::Fluid Image -->
    </div>
  </div>

  <ExchangeReportOffcanvas />
</template>
