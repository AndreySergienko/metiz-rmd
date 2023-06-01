import useVuelidate from '@vuelidate/core'

export default class ValidatorVuelidate {
  constructor(rules, formData) {
    this.v$ = useVuelidate(rules, formData)
  }

  validateField = async (event) => {
    const nameField = event.target.name
    console.log(nameField)
    this.v$.value[nameField].$touch()
    if (this.v$.value[nameField].$error) {
      this.v$.value[nameField].$validate()
      this.v$.value[nameField].$touch()
    }
  }

  validateForm = () => {
    this.v$.value.$validate()
    if (this.v$.value.$error) {
      return this.v$.value.$touch()
    }
    return true
  }

  resetValidateField = (nameField) => {
    this.v$.value[nameField].$reset()
  }
}
