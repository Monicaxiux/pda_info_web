import axios, { AxiosResponse, AxiosRequestConfig } from 'axios'
import { devUrl, proUrl } from './url'
const request = axios.create({
  baseURL: devUrl,//devUrl 本地请求路径，proUrl 在线请求路径
  // timeout: 15000,//请求超时时常
})
//请求拦截器
request.interceptors.request.use((config: AxiosRequestConfig) => {
  // if (config.headers) {
  //   config.headers.token = sessionStorage.getItem('token') || ''
  // }
  return config
}, (error: any) => {

  return Promise.reject(error)
})
//响应拦截器
request.interceptors.response.use((response: AxiosResponse) => {
  //请求状态码异常提示
  // response.data.status != 1 ? (
  //   console.log('网络超时')
  // ) : false
  return response.data
}, (error: any) => { 
  console.log('网络超时')
  return Promise.reject(error)
})
export default request