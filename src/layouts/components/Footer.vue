<script setup>
// Vue
import { ref } from 'vue'

// Composabless
import useForm from '@/composables/useForm'

// Vuelidate
import useVuelidate from '@vuelidate/core'
import { helpers, required, email } from '@vuelidate/validators'

const links = [
  {
    title: 'Company',
    links: [
      {
        title: 'User Panel',
        outerLink: 'https://users.easybitpay.com'
      },
      {
        title: 'FAQ',
        link: 'faq'
      },
      {
        title: 'Privecy & terms',
        link: 'privacy'
      }
    ]
  },
  {
    title: 'Resources',
    links: [
      {
        title: 'Donwload Our App',
        link: 'download'
      },
      {
        title: 'Brand Book',
        outerLink: 'https://easybitpay.com/downloads/easybitpayBrandbook-1.0.pdf'
      },
      {
        title: 'Api Documentation',
        outerLink: 'https://github.com/easybitpay/documents/tree/main',
        download: true
      }
    ]
  }
]

// ----- START ----- //

// Generals
const { showFeedBacks } = useForm()

// Vuelidate
const form = ref({
  email: null
})

const rules = {
  email: {
    required: helpers.withMessage('Email is required', required),
    email: helpers.withMessage("Email isn't valid", email)
  }
}

const v$ = useVuelidate(rules, form)

// Functions

/**
 * Login User
 */
const newsletter = async () => {
  // Validate Form
  const result = await v$.value.$validate()
  if (result) {
    console.log('ashcj')
  } else {
    showFeedBacks()
  }
}

/**
 * Scroll To Top
 */
const scrollTop = () => {
  window.scrollTo(0, 0)
}
</script>

<template>
  <div class="container mt-18">
    <footer id="footer">
      <!-- begin::Menu Box -->
      <div class="menu-box rounded-top-2 pt-12 px-6 pb-22">
        <div class="row justify-content-between gy-8">
          <!-- begin::Links -->
          <div class="col-lg-9 order-1 order-lg-0">
            <div class="row gy-6">
              <!-- begin::Item -->
              <div class="col-lg-4" v-for="(item, index) in links" :key="index">
                <!-- begin::Title -->
                <h4 class="mb-6 text-gray-900">
                  {{ item.title }}
                </h4>
                <!-- end::Title -->

                <!-- begin::Links -->
                <ul>
                  <li v-for="(link, index) in item.links" :key="index">
                    <RouterLink v-if="link.link" :to="{ name: link.link }">
                      {{ link.title }}
                    </RouterLink>
                    <a v-else :href="link.outerLink" target="_blank" rel="noopener noreferrer">
                      {{ link.title }}
                    </a>
                  </li>
                </ul>
                <!-- end::Links -->
              </div>
              <!-- end::Item -->
            </div>
          </div>
          <!-- end::Links -->

          <!-- begin::Newsletter -->
          <div class="col-lg-3">
            <!-- begin::Logo -->
            <RouterLink to="/">
              <inline-svg src="/media/images/logo/Logo.svg" width="165"></inline-svg>
            </RouterLink>
            <!-- end::Logo -->

            <!-- begin::Subtitle -->
            <p class="mt-4 mb-6">Subscribe to our newsletter</p>
            <!-- end::Subtitle -->

            <!-- begin::Form -->
            <form @submit.prevent="newsletter">
              <button type="submit" hidden></button>
              <div class="position-relative d-flex align-items-center">
                <input
                  type="email"
                  class="form-control fs-8"
                  placeholder="Email address"
                  v-model="form.email"
                />
                <div class="invalid-feedback form-control fs-8" v-if="v$.email.$errors.length">
                  <span> {{ v$.email.$errors[0].$message }}</span>
                </div>

                <!-- begin::Icon -->
                <inline-svg
                  src="/media/icons/icons/arrow-right.svg"
                  width="24px"
                  class="position-absolute end-16px cursor-pointer svg-icon-primary"
                ></inline-svg>
                <!-- end::Icon -->
              </div>
            </form>
            <!-- end::Form -->
          </div>
          <!-- emd::Newsletter -->
        </div>
      </div>
      <!-- end::Menu Box -->

      <!-- begin::Copyright -->
      <div class="bg-primary py-3 px-6 d-flex align-items-center justify-content-between">
        <span class="fs-8 text-white"> All Rights Reservd by EasyBitPay </span>

        <!-- begin::Go To Top -->
        <div>
          <div
            class="h-24px w-24px d-flex align-items-center justify-content-center cursor-pointer"
            @click="scrollTop"
          >
            <inline-svg src="/media/icons/icons/arrow-up.svg"></inline-svg>
          </div>
        </div>
        <!-- end::Go To Top -->
      </div>
      <!-- end::Copyright -->
    </footer>
  </div>
</template>
