// Axios
import api from '@/core/services/api'

// Pinia
import { defineStore } from 'pinia'

// Store
export const useAppStore = defineStore('app', () => {
  // ----- Function -----

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
    getFAQList
  }
})
