import axios from 'axios'
import { API_ENDPOINT } from '../constants/constants'

export function apiRequest() {
  const token = window.localStorage.getItem('token')
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  }
  return axios.create({
    baseURL: API_ENDPOINT,
    headers: headers,
  })
}
