import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSortStore = defineStore('sort', () => {
  const DEFAULT_SORT_VALUE = '-start_time'
  const sort = ref(DEFAULT_SORT_VALUE)

  const updateSort = (val) => (sort.value = val)

  const updateSortByTable = (val) => {
    if (!val.length) {
      sort.value = ''
      return
    }
    const sortable = val[0]
    sort.value = sortable.order === 'asc' ? sortable.key : `-${sortable.key}`
  }
  const clearSort = () => (sort.value = '')

  return {
    sort,
    clearSort,
    updateSortByTable,
    updateSort
  }
})
