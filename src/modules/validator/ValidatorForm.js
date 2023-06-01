export class ValidatorForm {
  constructor(form) {
    this.form = form
  }

  async validate() {
    const { valid } = await this.$refs.form.validate()

    if (valid) alert('Form is valid')
  }

  reset() {
    this.$refs.form.reset()
  }

  resetValidation() {
    this.$refs.form.resetValidation()
  }
}
