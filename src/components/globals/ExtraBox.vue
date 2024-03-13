<script setup>
// Props
const props = defineProps({
  background: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <div class="background-image" :style="`--background: url(${background})`">
    <div class="container">
      <slot />
    </div>
  </div>
</template>
