import { Form } from '@/modules/form/core/Form'
import { ref } from 'vue'

export class FormValidate extends Form {
  constructor(formData) {
    super(formData)
    this.isValid = ref(false)
  }


  async action(cb) {
    if (this.isValid.value) {
      await super.action(cb)
    }
  }
}
