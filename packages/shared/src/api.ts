import axios from "axios"

axios.defaults.responseType = "json"

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_APP_API_URL,
})

API.interceptors.request.use(
  async (config) => {
    if (process.env.NODE_ENV === "development") {
      const token = localStorage.getItem(process.env.NEXT_PUBLIC_COOKIE_KEY)
      if (token) {
        config.headers["Authorization"] = "Bearer " + token
      }
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

API.interceptors.response.use(
  (response) => {
    return response?.data
  },
  (error) => {
    const status = error.response?.status ?? 401
    if (status === 401 || status === 403 || status === 419) {
      window.location.pathname = "/login"
      if (process.env.NODE_ENV === "development") {
        localStorage.removeItem(process.env.NEXT_PUBLIC_COOKIE_KEY)
      }
    }

    return Promise.reject(error.response)
  }
)

export { API }
