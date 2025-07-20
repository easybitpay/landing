<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

const plans = [
  {
    title: 'Free',
    description:
      'Completely free — simply activate by freezing your EBP tokens. No payments required; access all features just by holding EBP.',
    prices: [
      {
        price: '0',
        title: 'month'
      },
      {
        price: '0',
        title: 'year'
      }
    ],
    action: {
      title: 'Register',
      type: 'light'
    }
  },
  {
    suggest: true,
    title: 'Pay as You Go',
    description:
      'Only pay 1% per transaction. No upfront fees — you pay only when you use the service.',
    extra: '1% per transaction',
    action: {
      title: 'Get yearly plan',
      type: 'primary'
    }
  },
  // {
  //   title: "Pay montly",
  //   description:
  //     "Multi-voting helps a committee or group narrow down a large number of items into just",
  //   prices: [
  //     {
  //       price: "19",
  //       title: "month",
  //     },
  //     {
  //       price: "228",
  //       title: "year",
  //     },
  //   ],
  //   action: {
  //     title: "Register",
  //     type: "light",
  //   },
  // },
  // {
  //   suggest: true,
  //   title: "Pay yearly",
  //   description:
  //     "Multi-voting helps a committee or group narrow down a large number of items into just",
  //   prices: [
  //     {
  //       price: "12",
  //       title: "month",
  //     },
  //     {
  //       price: "144",
  //       title: "year",
  //     },
  //   ],
  //   action: {
  //     title: "Get yearly plan",
  //     type: "primary",
  //   },
  // },
]
</script>
<template>
  <div class="plans-banner">
    <div class="container pe-0 pe-sm-4">
      <div class="d-flex align-items-center justify-content-between gap-36">
        <div class="d-none d-xl-block">
          <p class="title" style="width: 336px">Simple & affordable pricing plans</p>
        </div>

        <Swiper
          :slidesPerView="1.2"
          :spaceBetween="32"
          :breakpoints="{
            '450': {
              slidesPerView: 1.2
            },
            '576': {
              slidesPerView: 2
            },
            '768': {
              slidesPerView: 2
            },
            '992': {
              slidesPerView: 3
            },
            '1200': {
              slidesPerView: 2
            },
            '1400': {
              slidesPerView: 2
            }
          }"
          class="mySwiper"
        >
          <SwiperSlide v-for="(item, index) in plans" :key="index">
            <div class="card h-100">
              <div class="card-body pt-12 d-flex flex-column align-items-center justify-content-between">
                <div>
                  <!-- begin::Title -->
                  <h1 class="mb-6 lh-1 text-gray-800 text-center">{{ item.title }}</h1>
                  <!-- end::Title -->

                  <!-- begin::Description -->
                  <p class="text-center mb-0">{{ item.description }}</p>
                  <!-- end::Description -->
                </div>

                <div class="w-100">
                  <!-- begin::Prices -->
                  <div class="my-10">
                    <template v-if="item.prices">
                      <h4
                      :class="[
                        { 'text-center text-gray-800': true },
                        { 'mb-0': index + 1 == item.prices.length }
                      ]"
                      v-for="(price, index) in item.prices"
                      :key="index"
                    >
                      ${{ price.price }}/{{ price.title }}
                    </h4>
                    </template>
                    
                    <h4 v-else class="text-center text-gray-800 mb-0">
                      {{ item.extra }}
                    </h4>
                  </div>
                  <!-- end::Prices -->

                  <!-- begin::Action -->
                  <button :class="`btn btn-${item.action.type} w-100`">
                    {{ item.action.title }}
                  </button>
                  <!-- end::Action -->
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </div>
</template>
