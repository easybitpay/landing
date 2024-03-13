<script setup>
// Props
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  },
  badge: {
    type: String,
    required: false
  },
  subject: {
    type: String,
    required: true
  },
  active: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <!-- begin::Card -->
  <div :class="[{ 'card category-card h-100': true }, { active: active }]">
    <div class="card-body">
      <div>
        <!-- begin::Icon -->
        <inline-svg :src="`/media/icons/shapes/${$filters.shapeStatus(icon)}.svg`"></inline-svg>
        <!-- end::Icon -->

        <!-- begin::Title -->
        <div
          :class="`mt-5 mb-${badge ? '2' : '4'} d-flex align-items-center justify-content-between`"
        >
          <h5 class="m-0 title">{{ title }}</h5>

          <span
            v-if="badge"
            class="h-24px d-flex align-items-center justify-content-center bg-danger text-white rounded-pill"
            style="padding: 0 7px"
          >
            {{ badge }}
          </span>
        </div>
        <!-- end::Title -->
      </div>

      <!-- begin::Count -->
      <small class="subject">{{ subject }}</small>
      <!-- end::Count -->
    </div>
  </div>
  <!-- end::Card -->
</template>
