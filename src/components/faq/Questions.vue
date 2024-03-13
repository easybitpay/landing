<script setup>
// Vue
import { onMounted, ref } from 'vue';

// Hooks
import useAccordion from '@/hooks/useAccordion'

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

// Componenets
import ItemCategories from '../globals/ItemCategories.vue';
import AccordionItem from './AccordionItem.vue';

// ----- START ----- //

// Generals
const { checkActiveAccordion } = useAccordion();

// Refs
const list = ref([
  {
    id: 1,
    title: "How do I deal with Bitcoin’sprice volatility?",
    description:
      "If you are a risk-averse business, you can accept bitcoin payments without ever worrying about the price volatility that comes with it. The automatic conversion and split settlement features let businesses choose to have their bitcoin payments automatically converted to our supported currencies, either in full or as a percentage, at the time of a transaction.",
  },
  {
    id: 2,
    title: "How do I deal with Bitcoin’sprice volatility?",
    description:
      "If you are a risk-averse business, you can accept bitcoin payments without ever worrying about the price volatility that comes with it. The automatic conversion and split settlement features let businesses choose to have their bitcoin payments automatically converted to our supported currencies, either in full or as a percentage, at the time of a transaction.",
  },
  {
    id: 3,
    title: "How do I deal with Bitcoin’sprice volatility?",
    description:
      "If you are a risk-averse business, you can accept bitcoin payments without ever worrying about the price volatility that comes with it. The automatic conversion and split settlement features let businesses choose to have their bitcoin payments automatically converted to our supported currencies, either in full or as a percentage, at the time of a transaction.",
  },
  {
    id: 4,
    title: "How do I deal with Bitcoin’sprice volatility?",
    description:
      "If you are a risk-averse business, you can accept bitcoin payments without ever worrying about the price volatility that comes with it. The automatic conversion and split settlement features let businesses choose to have their bitcoin payments automatically converted to our supported currencies, either in full or as a percentage, at the time of a transaction.",
  },
  {
    id: 5,
    title: "How do I deal with Bitcoin’sprice volatility?",
    description:
      "If you are a risk-averse business, you can accept bitcoin payments without ever worrying about the price volatility that comes with it. The automatic conversion and split settlement features let businesses choose to have their bitcoin payments automatically converted to our supported currencies, either in full or as a percentage, at the time of a transaction.",
  },
]);
const categories = ref([
  {
    id: 1,
    title: "Payments overview",
    count: 40,
  },
  {
    id: 2,
    title: "Currency conversion",
    count: 40,
  },
  {
    id: 3,
    title: "Hosted checkout",
    count: 40,
  },
  {
    id: 4,
    title: "Security & Protection",
    count: 40,
  },
  {
    id: 5,
    title: "Payment buttons",
    count: 40,
  },
  {
    id: 6,
    title: "Settlement & Transfer",
    count: 40,
  },
]);
const selectedCategory = ref(1);

// Functions
onMounted(async () => {
  checkActiveAccordion("faqAccordion");
});
</script>

<template>
  <!-- begin::Categories -->
  <div>
    <Swiper
      :slidesPerView="1.2"
      :spaceBetween="16"
      :breakpoints="{
        '450': {
          slidesPerView: 2,
        },
        '576': {
          slidesPerView: 3,
        },
        '768': {
          slidesPerView: 4,
        },
        '1200': {
          slidesPerView: 5,
        },
        '1400': {
          slidesPerView: 6,
        },
      }"
      class="mySwiper swiper-tab"
    >
      <SwiperSlide
        v-for="item in categories"
        :key="item.id"
        @click="selectedCategory = item.id"
      >
        <ItemCategories
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
    <AccordionItem v-for="(item, index) in list" :key="index" :item="item" />
  </div>
  <!-- end::Accordion -->
</template>
