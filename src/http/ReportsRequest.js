import { RequestHttp } from '@/http/RequestHttp'

class ReportsRequest extends RequestHttp {
  #url = 'reports'

  async getAll(query) {
    const { data } = await this.$authHost.get(`${this.#url}/${query}`)
    return data
  }

  async getItem() {}

  async getTypes() {}
}
