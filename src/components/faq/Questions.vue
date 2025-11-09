<script setup>
// Vue
import { computed, onMounted, ref } from 'vue'

// Store
import { useAppStore } from '@/stores/app'

// Composabless
import useAccordion from '@/composables/useAccordion'

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

// Componenets
import CategoryItemLoading from '../loadings/CategoryItemLoading.vue'
import AccordionItemLoading from '../loadings/AccordionItemLoading.vue'
import ItemCategories from '../globals/ItemCategories.vue'
import AccordionItem from './AccordionItem.vue'

// ----- START ----- //

// Generals
const store = useAppStore()
const { checkActiveAccordion } = useAccordion()

// Refs
const loading = ref(false)
const list = ref([])
const categories = ref([])
const selectedCategory = ref('')

// Computeds
const filteredList = computed(() => {
  return list.value.filter((item) => item.category_id == selectedCategory.value)
})

// Functions

/**
 * Get FAQ List
 */
const getFAQList = async () => {
  // Start Loading
  loading.value = true

  // Request
  await store.getFAQList().then((res) => {
    if (res) {
      categories.value = res.faq_categories
      list.value = res.faqs
      selectedCategory.value = categories.value[0].id
    }
  })

  // Stop Loading
  loading.value = false
}

onMounted(async () => {
  await getFAQList()
  checkActiveAccordion('faqAccordion')
})
</script>

<template>
  <!-- begin::Categories -->
  <div>
    <Swiper
      :slidesPerView="1.2"
      :spaceBetween="16"
      :breakpoints="{
        '450': {
          slidesPerView: 2
        },
        '576': {
          slidesPerView: 3
        },
        '768': {
          slidesPerView: 4
        },
        '1200': {
          slidesPerView: 5
        },
        '1400': {
          slidesPerView: 6
        }
      }"
      class="mySwiper swiper-tab"
    >
      <template v-if="loading">
        <SwiperSlide v-for="item in 2" :key="item">
          <CategoryItemLoading />
        </SwiperSlide>
      </template>

      <SwiperSlide v-for="item in categories" :key="item.id">
        <ItemCategories
          @click="selectedCategory = item.id"
          :active="selectedCategory === item.id"
          :title="item.title"
          icon="wallet"
          :subject="`${item.count} FAQ`"
        />
      </SwiperSlide>
    </Swiper>
  </div>
  <!-- end::Categories -->

  <!-- begin::Accordion -->
  <div class="accordion" id="faqAccordion">
    <AccordionItemLoading v-if="loading" />

    <template v-else>
      <AccordionItem v-for="(item, index) in filteredList" :key="index" :item="item" />

      <!-- begin::No FAQ Image -->
      <inline-svg
        v-if="!filteredList.length"
        src="/media/icons/shapes/no-ticket.svg"
        class="d-block mx-auto mt-10"
      ></inline-svg>
      <!-- end::No FAQ Image -->
    </template>
  </div>
  <!-- end::Accordion -->
</template>
