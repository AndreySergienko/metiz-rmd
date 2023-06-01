import { reactive } from 'vue'
import { FormVuelidateValidator } from '@/modules/form/FormVuelidateValidator'
import {
  base,
  email,
  password,
  required
} from '@/modules/validator/vuelidate/fields/vuelidate.fields'
import { AuthService } from '@/http/services/AuthService'
import { helpers } from '@vuelidate/validators'
import { UserService } from '@/http/services/UserService'

class RegistrationForms extends FormVuelidateValidator {
  constructor({ rules, formData, cb }) {
    super({
      rules,
      formData
    })
    this.formData = formData
    this.cb = cb
    this.userService = new UserService()
    this.authService = new AuthService()
  }

  toFormData(from) {
    this.formData.password_confirmation = from.password
    this.formData.password = from.password
    if (from.roles.length) {
      this.formData.role_id = from.roles[0].id
    }
    this.formData.id = from.id
    super.toFormData(this.formData, from)
  }

  async action() {
    await super.action(async () => {
      if (this.formData?.id) {
        if (!super.findDifference(this.formData, ['roles']))
          return await this.cb()

        await this.userService.update(this.formData)
      } else {
        await this.authService.registration(this.formData)
      }
      await this.cb()
    })
  }
}

function useRegistrationForms(cb) {
  const formData = reactive({
    firstname: '',
    secondname: '',
    lastname: '',
    password: '',
    password_confirmation: '',
    email: '',
    login: '',
    role_id: null
  })
  return new RegistrationForms({
    rules: {
      email: {
        ...email
      },
      firstname: base({}),
      lastname: base({}),
      role_id: required,
      login: base({}),
      password: {
        ...password,
        equalPassword: helpers.withMessage(
          'Пароли не совпадают',
          () => formData.password === formData.password_confirmation
        )
      },
      password_confirmation: {
        ...password,
        equalPassword: helpers.withMessage(
          'Пароли не совпадают',
          () => formData.password === formData.password_confirmation
        )
      }
    },
    formData,
    cb
  })
}

export { useRegistrationForms }
