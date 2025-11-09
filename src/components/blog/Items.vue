<script setup>
// Vue
import { onMounted, ref } from 'vue'

// Store
import { useBlogStore } from '@/stores/blog'

// ----- START -----

// Generals
const blogStore = useBlogStore()

// Refs
const blogInfo = ref({})
const loadings = ref({
  main: false,
  more: false
})

// Funstions

/**
 * Get Blog Items
 */
const getBlogList = async (page) => {
  // start loading
  if (page === 1) {
    loadings.value.main = true
  }
  loadings.value.more = true

  // set variables
  let params = new URLSearchParams()
  params.set('page', page)

  // request
  await blogStore.getBlogList(params).then((res) => {
    if (res) {
      if (page === 1) {
        blogInfo.value = res
      } else {
        blogInfo.value = { ...res, data: [...blogInfo.value.data, ...res.data] }
      }
    }
  })

  // stop loading
  loadings.value.main = false
  loadings.value.more = false
}

onMounted(() => {
  getBlogList(1)
})
</script>

<template>
  <div class="row gy-12">
    <template v-if="loadings.main">
      <div class="col-md-6 col-lg-4" v-for="item in 2" :key="item">
        <div class="blog-item">
          <Skeletor height="297px" width="100%" class="rounded-3" />

          <h2 class="title">
            <Skeletor class="rounded-0" />
          </h2>

          <p class="desc">
            <Skeletor width="100%" class="rounded-0" />
            <Skeletor width="60%" class="rounded-0" />
            <Skeletor width="80%" class="rounded-0" />
          </p>

          <Skeletor size="24px" class="rounded-0" />
        </div>
      </div>
    </template>
    <div class="col-md-6 col-lg-4" v-for="item in blogInfo.data" :key="item">
      <RouterLink :to="{ name: 'blog-detail', params: { slug: item.slug } }" class="blog-item">
        <div class="img-box">
          <img :src="item?.media?.cover?.url" :alt="item?.media?.cover?.alt" />
        </div>

        <h2 class="title description-ellipsis" style="--line-camp: 2">
          {{ item.title }}
        </h2>

        <p class="desc description-ellipsis" style="--line-camp: 4">
          {{ item.excerpt }}
        </p>

        <inline-svg src="/media/icons/icons/arrow-right.svg" class="svg-icon-primary h-24px arrow">
        </inline-svg>
      </RouterLink>
    </div>

    <div class="col-12 d-flex justify-content-center">
      <button
        class="btn btn-primary w-200px"
        v-if="blogInfo.current_page && blogInfo.current_page < blogInfo.last_page"
        :disabled="loadings.more"
        @click="getBlogList(blogInfo.current_page + 1)"
      >
        {{ loadings.more ? 'Loading...' : 'Load More' }}
      </button>
    </div>
  </div>
</template>
