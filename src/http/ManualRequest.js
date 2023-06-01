import { RequestHttp } from '@/http/RequestHttp'

export class ManualRequest extends RequestHttp {
  async getManual(url) {
    const { data } = await this.$authHost.get(url)
    return data
  }

  async deleteById(url, id) {
    const { data } = await this.$authHost.delete(`${url}/${id}`)
    return data
  }

  async updateById(url, id, form) {
    const { data } = await this.$authHost.put(`${url}/${id}`, form)
    return data
  }
}
