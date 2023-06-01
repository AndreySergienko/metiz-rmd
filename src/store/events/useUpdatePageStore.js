import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUpdatePageStore = defineStore('update', () => {
  const isUpdatePage = ref(false)

  const toggleUpdate = () => (isUpdatePage.value = !isUpdatePage.value)

  return {
    isUpdatePage,
    toggleUpdate
  }
})
