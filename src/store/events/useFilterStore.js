import { defineStore } from 'pinia'
import { computed, reactive } from 'vue'

export const useFilterStore = defineStore('filter', () => {
  // keys in object equal keys backend request
  const filter = reactive({
    Processed: null,
    Type: null,
    Approved: null,
    HasVideo: null,
    camera_id: null,
    range: reactive({
      start: '',
      end: ''
    })
  })

  const filterDefaultValues = {
    Processed: null,
    Type: null,
    Approved: null,
    HasVideo: null,
    camera_id: null,
    range: reactive({
      start: '',
      end: ''
    })
  }

  const filterForRequest = computed(() => {
    const queryFilter = {}
    for (const entries in filter) {
      if (entries === 'range') {
        queryFilter['DateFrom'] = filter.range.start
        queryFilter['DateTo'] = filter.range.end
      } else {
        queryFilter[entries] = filter[entries]
      }
    }
    return queryFilter
  })

  const updateFilterByKey = (key, val) => {
    filter[key] = val
  }

  const checkIsClearFilter = () => {
    return JSON.stringify(filterDefaultValues) === JSON.stringify(filter)
  }

  const clearFilter = () => {
    if (checkIsClearFilter()) return
    Object.keys(filter).forEach((key) => {
      switch (key) {
        case 'Processed':
          filter[key] = null
          break
        case 'range':
          filter.range = reactive({
            start: '',
            end: ''
          })
          break
        default:
          filter[key] = null
          break
      }
    })
  }

  return {
    updateFilterByKey,
    clearFilter,
    filter,
    filterForRequest
  }
})
