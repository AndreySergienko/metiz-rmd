import {
  email,
  helpers,
  maxLength,
  minLength,
  required
} from '@vuelidate/validators'
import { ValidatorErrorMsg } from '@/modules/validator/ValidatorErrorMsg'

export class ValidatorErrorMsgVuelidate {
  static required() {
    return helpers.withMessage(ValidatorErrorMsg.required(), required)
  }

  static minLength(num) {
    return helpers.withMessage(ValidatorErrorMsg.minLength(num), minLength(num))
  }

  static maxLength(num) {
    return helpers.withMessage(ValidatorErrorMsg.maxLength(num), maxLength(num))
  }

  static email() {
    return helpers.withMessage(ValidatorErrorMsg.email(), email)
  }
}
