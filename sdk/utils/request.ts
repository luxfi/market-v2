import axios, { AxiosRequestConfig, AxiosRequestHeaders } from 'axios'
// import { version } from '../package.json'
import { getClient } from '../'

export function request(config: AxiosRequestConfig = {}) {
  const client = getClient()
  const headers: AxiosRequestHeaders = {
    'Content-Type': 'application/json',
    'x-rkc-version': '0.3.4', // hardcode latest stable version
  }
  if (client?.apiKey) {
    headers['x-api-key'] = client.apiKey || 'demo-api-key'
  }
  return axios.request({ headers: headers, ...config })
}
