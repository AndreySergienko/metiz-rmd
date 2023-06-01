import { reactive } from 'vue'
import { FormVuelidateValidator } from '@/modules/form/FormVuelidateValidator'
import {
  base,
  password
} from '@/modules/validator/vuelidate/fields/vuelidate.fields'
import { AuthService } from '@/http/services/AuthService'

class AuthorizationForms extends FormVuelidateValidator {
  constructor({ rules, formData }) {
    super({
      rules,
      formData
    })
    this.formData = formData
    this.authService = new AuthService()
  }

  async action() {
    await super.action(async () => {
      await this.authService.login(this.formData)
    })
  }
}

function useAuthorizationForms() {
  return new AuthorizationForms({
    rules: {
      login: base({}),
      password: password
    },
    formData: reactive({
      login: '',
      password: '',
      remember_me: false
    })
  })
}

export { useAuthorizationForms }
