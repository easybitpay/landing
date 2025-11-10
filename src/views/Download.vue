<script setup>
// Vue
import { computed, onMounted, ref } from 'vue'

// Store
import { useAppStore } from '@/stores/app'

// ----- START -----

// Generals
const appStore = useAppStore()

// Refs
const loading = ref(false)

// Computeds
const appInfo = computed(() => appStore.configs.APP_VERSION_INFO)

const versionArray = computed(() => {
  const version = appInfo.value?.latest?.version

  if (version) {
    const arr = version.split('').map((item) => (item == '.' ? 'dot' : item))

    if (arr[0] == '0') return arr.slice(2)
    return arr
  }

  return []
})

// Funstions

/**
 * Get Configs
 */
const getConfigs = async () => {
  // start loading
  loading.value = true

  // request
  await appStore.getConfigs()

  // stop loading
  loading.value = false
}

onMounted(() => {
  getConfigs()
})
</script>

<template>
  <div class="container pt-14">
    <div class="d-flex flex-column align-items-center">
      <Skeletor width="200px" height="83px" class="rounded-0" v-if="loading" />
      <div class="d-flex align-items-end justify-content-center gap-2" v-else>
        <img
          :src="`/media/number/number_${item}.svg`"
          v-for="(item, index) in versionArray"
          :key="index"
        />
      </div>
      <div class="my-10 w-100" v-if="loading">
        <Skeletor height="73px" class="mw-400px w-100 rounded-0 m-auto mb-3" />
        <Skeletor height="73px" class="mw-600px w-100 rounded-0 m-auto" />
      </div>
      <h1 class="text-dark fs-extra my-10 text-center" v-else>
        New version of
        <br />
        <span class="text-primary fw-bolder">EasyBitPay </span>App is available
      </h1>

      <p class="text-center fs-3 text-gray-700 mb-30 w-100">
        <Skeletor class="mw-400px w-100 rounded-0" v-if="loading" />
        <template v-else>
          {{ appInfo?.latest?.description }}
        </template>
      </p>

      <Skeletor height="58px" class="w-240px rounded-1" v-if="loading" />
      <a
        v-else
        :href="appInfo?.latest?.download"
        target="_blank"
        rel="noopener noreferrer"
        download
        class="btn btn-lg btn-primary px-15 w-240px"
      >
        Download
      </a>
    </div>
  </div>
</template>
