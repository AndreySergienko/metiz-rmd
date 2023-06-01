import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSearchStore = defineStore('search', () => {
  const search = ref('')

  const clearSearch = () => (search.value = '')
  return {
    search,
    clearSearch
  }
})
