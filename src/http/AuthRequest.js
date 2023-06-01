import { RequestHttp } from '@/http/RequestHttp'

export class AuthRequest extends RequestHttp {
  async registration(form) {
    const { data } = await this.$host.post('/register', form)
    return data
  }

  async login(form) {
    const { data } = await this.$host.post('/login', form)
    return data
  }

  async logout() {
    const { data } = await this.$authHost.post('/logout')
    return data
  }
}
