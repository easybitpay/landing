<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

// Props
const props = defineProps({
  gallery: {
    type: Array
  }
})

// ----- START -----

// Functions

const nextSlide = () => {
  const swiper = document.querySelector('.gallery-swiper').swiper

  // Now you can use all slider methods like
  swiper.slideNext()
}

const prevSlide = () => {
  const swiper = document.querySelector('.gallery-swiper').swiper

  // Now you can use all slider methods like
  swiper.slidePrev()
}
</script>

<template>
  <div>
    <div class="container">
      <div class="card w-100">
        <div class="card-body">
          <Swiper :slidesPerView="1" :spaceBetween="24" :loop="true" class="gallery-swiper">
            <SwiperSlide v-for="(item, index) in gallery" :key="index">
              <img
                v-if="item.type === 'image'"
                :src="item.url"
                :alt="item.alt"
                class="mh-400px h-100 rounded-1 d-block m-auto"
              />

              <template v-if="item.type === 'video'">
                <iframe
                  v-if="(item.platform = 'YouTube')"
                  :src="item.url"
                  title="Blockchain demo"
                  height="400"
                  width="100%"
                  frameborder="0"
                  allowfullscreen
                ></iframe>
                <video v-else controls width="100%" height="400">
                  <source :src="item.url" />
                </video>
              </template>
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
