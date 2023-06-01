import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
import Manuals from '@/core/manuals-store/Manuals'

export const useManualStore = defineStore('manual', () => {
  const manuals = new Manuals()

  function createList() {
    const obj = {}
    const values = Object.values(manuals.manuals)
    values.forEach((val) => (obj[val.storage] = ref(val.default || [])))
    return obj
  }

  const obj = createList()
  // data reactive
  const list = reactive(obj)
  const isReady = ref(false)

  // getters
  function setList(key, val) {
    if (!val) return
    list[key] = val
  }

  function finishIsReady() {
    isReady.value = true
  }

  return {
    list,
    setList,
    isReady,
    finishIsReady
  }
})
