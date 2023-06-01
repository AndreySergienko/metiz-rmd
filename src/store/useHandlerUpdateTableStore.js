import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useHandlerUpdateTableStore = defineStore('handler-update', () => {
  const isReload = ref(false)

  const toggle = () => (isReload.value = !isReload.value)
  return {
    isState: isReload,
    toggle
  }
})
