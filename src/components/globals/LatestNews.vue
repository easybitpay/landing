<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

// ----- START -----

// Functions

const nextSlide = () => {
  const swiper = document.querySelector('.latest-banner-swiper').swiper

  // Now you can use all slider methods like
  swiper.slideNext()
}

const prevSlide = () => {
  const swiper = document.querySelector('.latest-banner-swiper').swiper

  // Now you can use all slider methods like
  swiper.slidePrev()
}
</script>

<template>
  <div>
    <div class="container">
      <div class="card w-100">
        <div class="card-body p-12 d-flex gap-19">
          <Swiper :slidesPerView="1" :spaceBetween="24" :loop="true" class="latest-banner-swiper">
            <SwiperSlide v-for="(item, index) in 10" :key="index" class="d-flex">
              <!-- begin::Image -->
              <div class="d-none d-lg-block">
                <img src="/media/images/illustration/news.svg" alt="news" />
              </div>
              <!-- end::Image -->

              <div>
                <div>
                  <!-- begin::Category -->
                  <p class="mb-6 fs-7 text-gray-500 lh-1 mt-lg-4">Latest News</p>
                  <!-- end::Category -->

                  <!-- begin::Title -->
                  <h2
                    class="text-gray-800 mb-10 lh-30px h-60px description-ellipsis"
                    style="--line-camp: 2"
                  >
                    Choosing Open-Source vs. Third-Party Crypto Payment Processors
                  </h2>
                  <!-- end::Title -->
                </div>

                <!-- begin::Subject -->
                <p class="mb-0 lh-28px">
                  Navigating the world of cryptocurrency can feel like a daunting task, especially
                  when you’re an online business owner trying to keep up with the times. Accepting
                  cryptocurrencies isn’t just a trend—it’s becoming a necessity. With options like
                  the open-source BTCPayServer and the third-party crypto payment processi
                </p>
                <!-- end::Subject -->
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>

    <!-- begin::Action -->
    <div
      class="container-fluid border-top border-8 border-primary bg-gray-200 d-flex justify-content-center align-items-end gap-4 h-168px pb-6 mt-n20"
    >
      <!-- begin::Back -->
      <div
        class="w-40px h-40px d-flex align-items-center justify-content-center rounded bg-white cursor-pointer"
        @click="prevSlide"
      >
        <inline-svg src="/media/icons/icons/chevron-left.svg" class="svg-icon-primary" height="25">
        </inline-svg>
      </div>
      <!-- end::Back -->

      <!-- begin::Next -->
      <button class="btn btn-primary neue-machina w-168px" @click="nextSlide">Next</button>
      <!-- end::Next -->
    </div>
    <!-- end::Action -->
  </div>
</template>
