import { Alert } from '@/extension/Alert'
import { ZoneRequest } from '@/http/ZoneRequest'

export class ZoneService {
  #zoneRequest

  constructor() {
    this.alert = Alert()
    this.#zoneRequest = new ZoneRequest()
  }

  async update(formData) {
    try {
      await this.#zoneRequest.update(formData, formData.id)
      this.alert.setSuccess('Зона успешно изменена')
    } catch (e) {
      this.alert.setError(e)
    }
  }

  async create(formData) {
    try {
      await this.#zoneRequest.create(formData)
      this.alert.setSuccess('Зона успешно создана')
    } catch (e) {
      this.alert.setError(e)
    }
  }
}
