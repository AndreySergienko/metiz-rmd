import { Expression } from '@/modules/validator/expression/expression'

export class Validator {
  static password({ minLength = 8, maxLength = 32 }) {
    return [
      (value) => Expression.required(value),
      (value) => Expression.minLength(value, minLength),
      (value) => Expression.maxLength(value, maxLength)
    ]
  }

  static login() {
    return [
      (value) => Expression.required(value),
      (value) => Expression.maxLength(value, 12)
    ]
  }

  static required() {
    return [(value) => Expression.required(value)]
  }
}
