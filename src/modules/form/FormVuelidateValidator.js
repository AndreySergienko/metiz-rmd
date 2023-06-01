import { FormValidate } from '@/modules/form/FormValidate'
import ValidatorVuelidate from '@/modules/validator/vuelidate/ValidatorVuelidate'

export class FormVuelidateValidator extends FormValidate {
  constructor({ rules, formData }) {
    super(formData)
    if (!rules || !formData) {
      throw new Error('Properties cannot be empty')
    }
    this.validator = new ValidatorVuelidate(rules, formData)
  }

  async action(cb) {
    this.isValid.value = this.validator.validateForm() || false
    await super.action(cb)
  }

  getErrors(key) {
    if (!this.validator.v$.value[key].$errors.length) return
    return this.validator.v$.value[key].$errors[0].$message
  }
}
