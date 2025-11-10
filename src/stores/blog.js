// Axios
import api from '@/core/services/api'

// Pinia
import { defineStore } from 'pinia'

// Store
export const useBlogStore = defineStore('blog', () => {
  // ----- Function -----

  /**
   * Get Blog List
   */
  async function getBlogList(params) {
    try {
      const { data } = await api.get('v5/blog/posts', {
        params: params
      })

      return data.result
    } catch (error) {
      return false
    }
  }

  /**
   * Get Blog Detail
   */
  async function getBlogDetail(payload) {
    try {
      const { data } = await api.get(`blog/posts/${payload}`)

      return data.result
    } catch (error) {
      return false
    }
  }

  return {
    getBlogList,
    getBlogDetail
  }
})
