import { RequestHttp } from '@/http/RequestHttp'

export class EventRequest extends RequestHttp {
  #url = '/events'

  async getAllItems(query = '', url = '') {
    const { data } = await this.$authHost.get(`${url || this.#url}${query}`)
    return data
  }

  async getReport(query) {
    const { data } = await this.$authHost.get(`${this.#url}/report${query}`)
    return data
  }

  async getItem(id, query) {
    const { data } = await this.$authHost.get(`${this.#url}/${id}${query}`)
    return data
  }

  async acceptItem(id) {
    const { data } = await this.$authHost.post(`${this.#url}/accept/${id}`)
    return data
  }

  async rejectItem(id) {
    const { data } = await this.$authHost.post(`${this.#url}/reject/${id}`)
    return data
  }

  async getXlsXError(url) {
    const { data } = await this.$authHost.get(url)
    return data
  }
}
