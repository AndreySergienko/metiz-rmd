import { ValidatorErrorMsg } from '@/modules/validator/ValidatorErrorMsg'

export class Expression {
  static required(value) {
    if (value) return true
    return ValidatorErrorMsg.required()
  }

  static minLength(value, minLength) {
    if (value.length >= minLength) return true
    return ValidatorErrorMsg.minLength(minLength)
  }

  static maxLength(value, maxLength) {
    if (value.length <= maxLength) return true
    return ValidatorErrorMsg.maxLength(maxLength)
  }

  static equal(value, field, key) {
    if (field[key] === value) return true
    // if (value === field?.[key]) return true

    return ValidatorErrorMsg.equal()
  }
}
