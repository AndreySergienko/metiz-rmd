import { RequestHttp } from '@/http/RequestHttp'

export class ZoneRequest extends RequestHttp {
  #url = '/zones'

  async create(form) {
    const { data } = await this.$authHost.post(`${this.#url}`, form)
    return data
  }

  async update(form, id) {
    const { data } = await this.$authHost.put(`${this.#url}/${id}`, form)
    return data
  }

  async delete(id) {
    const { data } = await this.$authHost.delete(`${this.#url}/${id}`)
    return data
  }
}
