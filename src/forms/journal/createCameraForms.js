import { reactive } from 'vue'
import { FormVuelidateValidator } from '@/modules/form/FormVuelidateValidator'
import { required } from '@/modules/validator/vuelidate/fields/vuelidate.fields'
import { CameraService } from '@/http/services/CameraService'

class CreateCameraForms extends FormVuelidateValidator {
  constructor({ rules, formData, cb }) {
    super({
      rules,
      formData
    })
    this.formData = formData
    this.cb = cb
    this.cameraService = new CameraService()
  }

  toFormData(from) {
    this.formData.id = from.id
    super.toFormData(this.formData, from)
  }

  async action() {
    this.formData.number = Number(this.formData.number)
    await super.action(async () => {
      if (this.formData?.id) {
        if (!super.findDifference(this.formData, ['zone'])) {
          return await this.cb()
        }

        await this.cameraService.update(this.formData, this.formData.id)
      } else {
        await this.cameraService.create(this.formData)
      }
      await this.cb()
    })
  }
}

function useCreateCameraForms(cb) {
  return new CreateCameraForms({
    rules: {
      url: required,
      number: required,
      title: required
    },
    formData: reactive({
      url: '',
      zone_id: null,
      number: '',
      is_recognition: false,
      is_active: false,
      title: ''
    }),
    cb
  })
}

export { useCreateCameraForms }
