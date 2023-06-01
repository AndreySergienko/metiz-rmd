import { helpers } from '@vuelidate/validators'

export const regexIncludeNumbers = helpers.regex(/^(?=.*[0-9])/)
export const regexIncludeOnlyLatins = helpers.regex(/^(?=.*[a-z])/)
export const regexIncludeCapitalizeLetter = helpers.regex(/^(?=.*[A-Z])/)
export const regexIncludeSpecialSymbol = helpers.regex(
  /^(?=.*[*.!@$%^&()[\]{}:;'"<>,?~_+=|/\\])/
)

console.log('test', typeof regexIncludeNumbers)
