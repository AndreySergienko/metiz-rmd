import { Alert } from '@/extension/Alert'
import { UserRequest } from '@/http/UserRequest'

export class UserService {
  #userRequest

  constructor() {
    this.alert = Alert()
    this.#userRequest = new UserRequest()
  }

  async update(formData) {
    try {
      await this.#userRequest.update(formData, formData.id)
      this.alert.setSuccess('Пользователь успешно изменён')
    } catch (e) {
      this.alert.setError(e)
    }
  }
}
