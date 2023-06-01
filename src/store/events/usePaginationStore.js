import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePaginationStore = defineStore('pagination', () => {
  const DEFAULT_PER_PAGE = 8
  const START_PAGE = 1

  const perPage = ref(DEFAULT_PER_PAGE)
  const page = ref(START_PAGE)

  const updatePage = (val) => (page.value = val)
  const updatePerPage = (val) => (perPage.value = val)
  const clearPage = () => (page.value = START_PAGE)
  const clearPerPage = () => (perPage.value = DEFAULT_PER_PAGE)

  return {
    page,
    perPage,
    updatePage,
    updatePerPage,
    clearPage,
    clearPerPage
  }
})
