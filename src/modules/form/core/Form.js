import { ref } from 'vue'
import { ObjectHelper } from '@/extension/ObjectHelper'

export class Form {
  constructor(formData) {
    this.isSend = ref(false)
    this.formData = formData
    this.isDifference = false
    this.frostFormData = {}
  }

  setFrozenFormData(data) {
    this.frostFormData = ObjectHelper.deepClone(data)
  }

  findDifference(data, invalidKeys = []) {
    const keys = Object.keys(this.frostFormData)
    let isTrue = true
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i]
      if (data[key] === null && this.frostFormData[key] === null) continue
      if (data[key] !== this.frostFormData[key] && !invalidKeys.includes(key)) {
        isTrue = false
        break
      }
    }
    this.isDifference = !isTrue
    return this.isDifference
  }

  async action(cb) {
    this.isSend.value = true
    await cb()
    this.isSend.value = false
  }

  toFormData(to, from) {
    Object.keys(from).forEach((key) => (to[key] = from[key]))
    this.setFrozenFormData(to)
  }
}
