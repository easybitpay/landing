<script setup>
// Componenets
import ItemTextIcon from './ItemTextIcon.vue';

// Props
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  items: {
    tyoe: Object,
    required: true
  }
})
</script>
<template>
  <div class="container py-23">
    <h1 class="fs-extra mb-23 text-center text-gray-800">{{ title }}</h1>

    <!-- begin::Itams -->
    <div class="row gy-12">
      <div class="col-sm-6 col-lg-4" v-for="(item, index) in items" :key="index">
        <ItemTextIcon :item="item" />
      </div>
    </div>
    <!-- end::Itams -->
  </div>
</template>
