import { $authHost, $host } from '@/http/core/axios/AxiosRequest'

export class RequestHttp {
  constructor() {
    this.$host = $host
    this.$authHost = $authHost
  }
}
