export class ValidatorErrorMsg {
  static required() {
    return 'Обязательное поле'
  }

  static minLength(length) {
    return `Минимальная длина поля: ${length}`
  }

  static maxLength(length) {
    return `Максимальная длина поля: ${length}`
  }

  static email() {
    return 'Некорректный формат e-mail'
  }
}
