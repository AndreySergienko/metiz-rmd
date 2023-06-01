import { Axios } from '@/http/core/axios/Axios'
import { AxiosOptions } from '@/http/core/axios/AxiosOptions'

const $authHost = Axios.createHost()
const $host = Axios.createHost()

const axiosOptions = new AxiosOptions($host, $authHost)

Axios.createInterceptorRequest($authHost, axiosOptions.interceptorHostRequest)
Axios.createInterceptorRequest($host, axiosOptions.interceptorHostRequest)

Axios.createInterceptorResponse(
  $authHost,
  axiosOptions.interceptorAuthHostResponseSuccess,
  axiosOptions.interceptorAuthHostResponseReject
)

export { $authHost, $host }
