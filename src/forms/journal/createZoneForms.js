import { reactive } from 'vue'
import { FormVuelidateValidator } from '@/modules/form/FormVuelidateValidator'
import { required } from '@/modules/validator/vuelidate/fields/vuelidate.fields'
import { ZoneService } from '@/http/services/ZoneService'

class CreateZoneForms extends FormVuelidateValidator {
  constructor({ rules, formData, cb }) {
    super({
      rules,
      formData
    })
    this.cb = cb
    this.formData = formData
    this.zoneService = new ZoneService()
  }

  toFormData(from) {
    super.toFormData(this.formData, from)
  }

  async action() {
    await super.action(async () => {
      if (this.formData?.id) {
        if (!super.findDifference(this.formData, [])) return this.cb()

        await this.zoneService.update(this.formData, this.formData.id)
      } else {
        await this.zoneService.create(this.formData)
      }
      await this.cb()
    })
  }
}

function useCreateZoneForms(cb) {
  return new CreateZoneForms({
    rules: {
      title: required
    },
    formData: reactive({
      title: ''
    }),
    cb
  })
}

export { useCreateZoneForms }
