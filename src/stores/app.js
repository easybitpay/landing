// Vue
import { ref } from 'vue'

// Axios
import api from '@/core/services/api'

// Pinia
import { defineStore } from 'pinia'

// Store
export const useAppStore = defineStore('app', () => {
  // ----- Refs -----
  const configs = ref({})

  // ----- Function -----

  /**
   * Get Configs
   */
  async function getConfigs() {
    try {
      const { data } = await api.get('v5/configs')

      let result = {};

      for (let i = 0; i < data.result.length; i++) {
        const element = data.result[i];
        result[element.key] = element.value
      }

      configs.value = result

      return true
    } catch (error) {
      return false
    }
  }

  /**
   * Get FAQ List
   */
  async function getFAQList() {
    try {
      const { data } = await api.get('faq/list')

      //
      return data
    } catch (error) {
      return false
    }
  }

  return {
    configs,
    getConfigs,
    getFAQList
  }
})
