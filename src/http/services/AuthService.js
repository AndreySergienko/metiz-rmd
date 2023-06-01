import { useUserStore } from '@/store/user/useUserStore'
import { AuthRequest } from '@/http/AuthRequest'
import router from '@/router'
import { routesNameList } from '@/router/routesNameList'
import { LocalStorage } from '@/extension/storage/LocalStorage'
import { Alert } from '@/extension/Alert'
import registry from '@/core/registry'

export class AuthService {
  #authRequest

  constructor() {
    this.alert = Alert()
    this.#authRequest = new AuthRequest()
  }

  async logout() {
    try {
      await this.#authRequest.logout()
      LocalStorage.clearItem('token')
      const user = useUserStore()
      user.clearPersonal()
      await router.push({ name: routesNameList.AUTH })
    } catch (e) {
      this.alert.setError(e)
    }
  }

  async login(formData) {
    try {
      const user = useUserStore()
      const { data } = await this.#authRequest.login(formData)
      const name = data.user.firstname + ' ' + data.user.lastname
      user.setPersonal({
        job: data.user.roles[0].title,
        name: name
      })
      LocalStorage.setItem('token', data.token)
      await router.push({
        name: 'registry',
        params: { ...registry.default.route }
      })
    } catch (e) {
      this.alert.setError(e)
    }
  }

  async registration(formData) {
    try {
      await this.#authRequest.registration(formData)
      this.alert.setSuccess('Пользователь успешно создан')
    } catch (e) {
      this.alert.setError(e)
    }
  }

  async update(formData) {
    try {
      await this.#authRequest.update(formData, formData.id)
      this.alert.setSuccess('Пользователь успешно изменён')
    } catch (e) {
      this.alert.setError(e)
    }
  }
}
