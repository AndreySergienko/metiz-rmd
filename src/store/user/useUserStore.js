import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
import { decomposeObject } from '@/utils/helper.function'

export const useUserStore = defineStore('user', () => {
  // data
  const personal = reactive({
    job: '',
    name: ''
  })
  const isAuth = ref(false)

  // actions
  function setPersonal(info) {
    decomposeObject(personal, info)
    isAuth.value = true
  }

  function clearPersonal() {
    Object.keys(personal).forEach((key) => (personal[key] = null))
    isAuth.value = false
  }

  return {
    personal,
    setPersonal,
    clearPersonal,
    isAuth
  }
})
