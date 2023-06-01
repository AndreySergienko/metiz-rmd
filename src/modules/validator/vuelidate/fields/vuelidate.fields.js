import { ValidatorErrorMsgVuelidate } from '@/modules/validator/vuelidate/ValidatorErrorMsgVuelidate'
import {
  regexIncludeCapitalizeLetter,
  regexIncludeNumbers,
  regexIncludeOnlyLatins,
  regexIncludeSpecialSymbol
} from '@/modules/validator/vuelidate/fields/regex'
import { helpers } from '@vuelidate/validators'

export const required = {
  required: ValidatorErrorMsgVuelidate.required()
}

export const base = ({ min = 2, max = 255 }) => {
  return {
    minLength: ValidatorErrorMsgVuelidate.minLength(min),
    maxLength: ValidatorErrorMsgVuelidate.maxLength(max),
    required: ValidatorErrorMsgVuelidate.required()
  }
}

export const email = {
  email: ValidatorErrorMsgVuelidate.email()
}

export const password = {
  ...base({ min: 8 }),
  regexIncludeNumbers: helpers.withMessage(
    'Добавьте 1 цифру',
    regexIncludeNumbers
  ),
  regexIncludeOnlyLatins: helpers.withMessage(
    'Используйте латиницу',
    regexIncludeOnlyLatins
  ),
  regexIncludeCapitalizeLetter: helpers.withMessage(
    'Добавьте 1 заглавную букву',
    regexIncludeCapitalizeLetter
  ),
  regexIncludeSpecialSymbol: helpers.withMessage(
    'Добавьте специальный символ',
    regexIncludeSpecialSymbol
  )
}
