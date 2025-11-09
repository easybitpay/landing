<script setup>
// Vue
import { ref, onMounted, computed } from 'vue'

// Vue Router
import { useRoute } from 'vue-router'

// Unhead
import { useHead } from '@unhead/vue'

// Store
import { useBlogStore } from '@/stores/blog'

// Composabless
import useConvertDate from '@/composables/useConvertDate.js'

// Compnenents
import GallerySwiper from '@/components/globals/GallerySwiper.vue'

// ----- START -----

// Generals
const head = useHead()
const route = useRoute()
const blogStore = useBlogStore()
const { convertDate } = useConvertDate()

// Refs
const blogInfo = ref({})
const loading = ref(false)

// Computeds
const slug = computed(() => route.params.slug)

// Funstions

/**
 * Get Blog Items
 */
const getBlogDetail = async () => {
  // start loading
  loading.value = true

  // request
  await blogStore.getBlogDetail(slug.value).then((res) => {
    if (res) {
      blogInfo.value = {
        ...res,
        body: res.body
          .replace(/\\n\\n|n{2,}/g, '<br/><br/>')
          .replace(/(?:\\n|(?<=>)\s*n\s*(?=<))/g, '<br/>')
          .trim()
      }

      head.patch({
        title: res.seo.title,
        meta: [
          {
            name: 'description',
            content: res.seo.description
          },
          {
            name: 'keywords',
            content: res.tags?.join(', ') || 'default, keywords'
          },
          {
            property: 'og:image',
            content: res.seo.og_image
          }
        ]
      })
    }
  })

  // stop loading
  loading.value = false
}

onMounted(() => {
  getBlogDetail()
})
</script>

<template>
  <!-- begin::Title Box -->
  <div class="container">
    <div class="row">
      <div class="col-lg-9">
        <div class="blog-title-box">
          <p class="date">
            <Skeletor class="rounded-0" width="200px" v-if="loading" />
            <template v-else>
              {{ convertDate(blogInfo.created_at, 'MMMM DD, YYYY') }}
            </template>
          </p>
          <h1 class="title">
            <Skeletor class="rounded-0" v-if="loading" />
            {{ blogInfo.title }}
          </h1>
        </div>
      </div>
    </div>
  </div>
  <!-- end::Title Box -->

  <!-- begin::Main Image -->
  <div class="container-fluid container-xxl">
    <Skeletor class="rounded-3 h-300px h-lg-500px" v-if="loading" />
    <img
      :src="blogInfo?.media?.cover?.url"
      :alt="blogInfo?.media?.cover?.alt"
      class="blog-banner"
    />
  </div>
  <!-- end::Main Image -->

  <!-- begin::Blog -->
  <div class="container">
    <div class="blog-detail">
      <div class="content-box" v-if="loading">
        <h1>
          <Skeletor class="rounded-0" width="200px" />
        </h1>

        <p>
          <Skeletor class="rounded-0" width="100%" />
          <Skeletor class="rounded-0" width="80%" />
          <Skeletor class="rounded-0" width="100%" />
          <Skeletor class="rounded-0" width="50%" />
          <Skeletor class="rounded-0" width="90%" />
          <Skeletor class="rounded-0" width="70%" />
        </p>

        <Skeletor class="rounded-3 h-300px h-lg-500px" />

        <p>
          <Skeletor class="rounded-0" width="100%" />
          <Skeletor class="rounded-0" width="80%" />
          <Skeletor class="rounded-0" width="100%" />
          <Skeletor class="rounded-0" width="50%" />
          <Skeletor class="rounded-0" width="90%" />
          <Skeletor class="rounded-0" width="70%" />
        </p>
      </div>
      <div class="content-box" v-else v-html="blogInfo.body"></div>
    </div>
  </div>
  <!-- end::Blog -->

  <GallerySwiper
    class="mt-16"
    v-if="blogInfo?.media?.gallery?.length"
    :gallery="blogInfo?.media?.gallery"
  />
</template>
