export class ObjectHelper {
  static getValueByKeys(obj, keys) {
    let currentValue = null
    keys.forEach((key) => {
      if (!currentValue) {
        if (!obj?.[key]) return
        currentValue = obj[key]
      } else {
        currentValue = currentValue[key]
      }
    })
    return currentValue
  }

  static deepClone(obj) {
    if (obj === null) return null
    const clone = Object.assign({}, obj)

    Object.keys(clone).forEach(
      (key) =>
        (clone[key] =
          typeof obj[key] === 'object'
            ? ObjectHelper.deepClone(obj[key])
            : obj[key])
    )

    return Array.isArray(obj) && obj.length
      ? (clone.length = obj.length) && Array.from(clone)
      : Array.isArray(obj)
      ? Array.from(obj)
      : clone
  }
}
