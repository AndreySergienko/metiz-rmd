import { RequestHttp } from '@/http/RequestHttp'

export class UserRequest extends RequestHttp {
  #url = '/users'

  async getUserByToken() {
    const response = await this.$authHost.get(`${this.#url}/get`)
    if (!response) return
    return response.data
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
