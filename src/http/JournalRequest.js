import { RequestHttp } from '@/http/RequestHttp'

export class JournalRequest extends RequestHttp {
  async getAll(query) {
    return await this.$authHost.get(`activities/${query}`)
  }
}
