export default class TextCorrecter {
  static capitalize(str) {
    if (!str) return
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  static getPartString(str, idx) {
    return str.split(' ')[idx]
  }

  static deleteIndent(str) {
    return str.replace(/ /g, '')
  }
}
