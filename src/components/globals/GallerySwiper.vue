<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// import required modules
import { Navigation } from 'swiper/modules'
import { Pagination } from 'swiper/modules'

const modules = [Navigation, Pagination]

// Props
const props = defineProps({
  gallery: {
    type: Array
  }
})

// ----- START -----

// Functions
</script>

<template>
  <div>
    <div class="container">
      <div class="card w-100">
        <div class="card-body">
          <Swiper
            :slidesPerView="1"
            :spaceBetween="24"
            :navigation="true"
            :pagination="{ clickable: true }"
            :modules="modules"
            class="gallery-swiper"
          >
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
  </div>
</template>
