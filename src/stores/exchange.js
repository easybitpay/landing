// Axios
import api from '@/core/services/api'

// Pinia
import { defineStore } from 'pinia'

// Store
export const useExchangeStore = defineStore('exchange', () => {
  // ----- Function -----

  /**
   * Get Token List
   */
  async function getExchangeTokens() {
    try {
      const { data } = await api.get('exchange/get-instant-tokens')

      return data
    } catch (error) {
      return false
    }
  }

  /**
   * Get Exchange Rate
   * @param {form} payload
   */
  async function getExchangeRate(payload) {
    try {
      const { data } = await api.get('exchange/get-instant-exchange-rate', {
        params: payload
      })

      return data.exchangeRate
    } catch (error) {
      return false
    }
  }

  /**
   * Get Exchange Rate
   * @param {form} payload
   */

  async function getExchangeLink(payload) {
    try {
      const { data } = await api.post('exchange/instant-exchange', payload)

      return data.paymentLink
    } catch (error) {
      return false
    }
  }

  /**
   * Get Receip Info
   * @param {order id} payload
   */

  async function getExchangeReciep(payload) {
    try {
      const { data } = await api.get('exchange/get-instant-exchange', {
        params: {
          id: payload
        }
      })
      
      return data
    } catch (error) {
      return false
    }
  }

  return {
    getExchangeTokens,
    getExchangeRate,
    getExchangeLink,
    getExchangeReciep
  }
})
