<script setup>
// Props
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  }
})
</script>

<template>
  <div class="page-header">
    <div>
      <h1 class="title">{{ title }}</h1>
      <p class="description" v-if="description">
        {{ description }}
      </p>
    </div>

    <slot></slot>
  </div>
</template>
