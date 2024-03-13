<script setup>
// Props
const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})
</script>
<template>
  <a class="text-icon-card">
    <div>
      <inline-svg :src="`/media/icons/shapes/${$filters.shapeStatus(item.icon)}.svg`" width="48" height="48"> </inline-svg>

      <h4 class="title">{{ item.title }}</h4>

      <p class="subject">
        {{ item.subject }}
      </p>
    </div>

    <inline-svg src="/media/icons/icons/arrow-right.svg" class="svg-icon-primary h-24px arrow">
    </inline-svg>
  </a>
</template>
