import { Alert } from '@/extension/Alert'
import { CameraRequest } from '@/http/CameraRequest'

export class CameraService {
  #cameraRequest

  constructor() {
    this.alert = Alert()
    this.#cameraRequest = new CameraRequest()
  }

  async update(formData) {
    try {
      await this.#cameraRequest.update(formData, formData.id)
      this.alert.setSuccess('Камера успешно изменена')
    } catch (e) {
      this.alert.setError(e)
    }
  }

  async create(formData) {
    try {
      await this.#cameraRequest.create(formData)
      this.alert.setSuccess('Камера успешно создана')
    } catch (e) {
      this.alert.setError(e)
    }
  }
}
