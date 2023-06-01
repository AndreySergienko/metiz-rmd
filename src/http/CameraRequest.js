import { RequestHttp } from '@/http/RequestHttp'

export class CameraRequest extends RequestHttp {
  #url = '/cameras'

  async create(formData) {
    const { data } = await this.$authHost.post(this.#url, formData)
    return data
  }

  async update(formData, id) {
    const { data } = await this.$authHost.put(`${this.#url}/${id}`, formData)
    return data
  }

  async delete(id) {
    return await this.$authHost.delete(`${this.#url}/${id}`)
  }
}
