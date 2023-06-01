import axios from 'axios'

export class Axios {
  static createHost(url = '') {
    return axios.create({
      withCredentials: true,
      baseURL: url || process.env.VUE_APP_SERVER_URL
    })
  }

  static createInterceptorRequest(host, cb) {
    host.interceptors.request.use(cb)
  }

  static createInterceptorResponse(host, cbSuccess, cbReject) {
    host.interceptors.response.use(cbSuccess, cbReject)
  }

  static createDefaultAxiosHost(
    url,
    { cbRequest, cbResponseSuccess, cbResponseReject }
  ) {
    const host = this.createHost(url)
    this.createInterceptorRequest(host, cbRequest)
    this.createInterceptorResponse(host, cbResponseSuccess, cbResponseReject)
    return host
  }
}
