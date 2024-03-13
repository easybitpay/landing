// Axios
import axios from 'axios'

// Alert
import { appendAlert } from '@/assets/js/Alerts'

const { origin } = window.location

const envBaseURL = import.meta.env.VITE_APP_BASE_URL

let baseURL = envBaseURL.includes('http') ? envBaseURL : `${origin}/${envBaseURL}`

const api = axios.create({
  baseURL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

api.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
api.interceptors.response.use(
  (response) => {
    return Promise.resolve(response)
  },
  (error) => {
    // General
    const errors = error.response.data.errors
    const message = error.response.data.message

    // Check Error Code For Show Error

    if (errors) {
      for (const [key, value] of Object.entries(errors)) {
        appendAlert(value[0], {
          color: 'danger',
          type: 'alert'
        })
      }
    } else {
      appendAlert(message, {
        color: 'danger',
        type: 'alert'
      })
    }

    return Promise.reject(error)
  }
)

export default api
