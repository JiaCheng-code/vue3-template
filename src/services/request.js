import axios from 'axios'
import { BASE_URL, TIMEOUT } from './config'
export default function request(config) {
  const instance = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT
  })
  axios.interceptors.request.use(
    (config) => {
      return config
    },
    (err) => {
      console.log(err)
    }
  )
  axios.interceptors.response.use(
    (res) => {
      return res.data
    },
    (err) => {
      console.log(err)
    }
  )
  return instance(config)
}
