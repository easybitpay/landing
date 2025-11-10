<script setup>
// Vue
import { computed } from 'vue'

// Vue Router
import { useRouter } from 'vue-router'

// Props
const props = defineProps({
  loading: {
    type: Boolean,
    required: false
  },
  extras: {
    type: Object,
    required: true
  }
})

// ----- START -----

// Generals
const router = useRouter()

// Computeds
const blogBoxInfo = computed(() => props.extras.next || props.extras.previous || {})
</script>

<template>
  <div>
    <div class="container">
      <div class="card w-100">
        <div class="card-body p-12 d-flex gap-8">
          <!-- begin::Image -->
          <div class="d-none d-lg-block w-268px min-w-268px h-268px">
            <Skeletor v-if="loading" height="100%" width="100%" class="rounded-2" />

            <img
              v-else
              :src="blogBoxInfo?.media?.cover?.url"
              :alt="blogBoxInfo?.media?.cover?.alt"
              class="w-100 h-100 object-cover rounded-2"
            />
          </div>
          <!-- end::Image -->

          <div class="flex-grow-1">
            <div>
              <!-- begin::Category -->
              <p class="mb-6 fs-7 text-gray-500 lh-1 mt-lg-4">
                <Skeletor v-if="loading" width="100px" class="rounded-0" />
                <template v-else> {{ extras.next ? 'Next' : 'Previous' }} Blog </template>
              </p>
              <!-- end::Category -->

              <!-- begin::Title -->
              <h2
                class="text-gray-800 mb-10 lh-30px h-60px description-ellipsis"
                style="--line-camp: 2"
              >
                <Skeletor v-if="loading" width="200px" class="rounded-0" />
                <template v-else>
                  {{ blogBoxInfo?.title }}
                </template>
              </h2>
              <!-- end::Title -->
            </div>

            <!-- begin::Subject -->
            <p class="mb-0 lh-28px description-ellipsis" style="--line-camp: 4">
              <template v-if="loading">
                <Skeletor width="100%" class="rounded-0" />
                <Skeletor width="60%" class="rounded-0" />
                <Skeletor width="80%" class="rounded-0" />
              </template>

              <template v-else>
                {{ blogBoxInfo?.excerpt }}
              </template>
            </p>
            <!-- end::Subject -->
          </div>
        </div>
      </div>
    </div>

    <!-- begin::Action -->
    <div
      class="container-fluid border-top border-8 border-primary bg-gray-200 d-flex justify-content-center align-items-end gap-4 h-168px pb-6 mt-n20"
    >
      <!-- begin::Back -->
      <Skeletor size="40px" class="rounded" v-if="loading" />
      <button
        v-else
        class="btn btn-white w-40px h-40px rounded p-0"
        :disabled="!extras?.previous?.slug"
        @click="router.push({ name: 'blog-detail', params: { slug: extras?.previous?.slug } })"
      >
        <inline-svg src="/media/icons/icons/chevron-left.svg" class="svg-icon-primary" height="25">
        </inline-svg>
      </button>
      <!-- end::Back -->

      <!-- begin::Next -->
      <Skeletor width="168px" height="40px" class="rounded-1" v-if="loading" />
      <button
        v-else
        :disabled="!extras?.next?.slug"
        @click="router.push({ name: 'blog-detail', params: { slug: extras?.next?.slug } })"
        class="btn btn-primary neue-machina w-168px"
      >
        Next
      </button>
      <!-- end::Next -->
    </div>
    <!-- end::Action -->
  </div>
</template>
