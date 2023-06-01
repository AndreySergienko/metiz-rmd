import { computed } from 'vue'
import { useFilterStore } from '@/store/events/useFilterStore'

export function useFilterField() {
  const store = useFilterStore()

  function fieldComputed(key, getCb, setCb) {
    return {
      get() {
        if (getCb) {
          return getCb(store.filter[key])
        }
        return store.filter[key]
      },
      set(val) {
        if (setCb) {
          store.updateFilterByKey(key, setCb(val))
        } else {
          store.updateFilterByKey(key, val)
        }
      }
    }
  }

  const modelCameras = computed(fieldComputed('camera_id'))
  const modelTypeErrors = computed(fieldComputed('Type'))
  const modelReportsTypes = computed(fieldComputed('Approved'))
  const modelIsChecked = computed(
    fieldComputed(
      'Processed',
      (val) => Boolean(val),
      (val) => Number(val)
    )
  )
  const modelRangeDate = computed(fieldComputed('range'))

  return {
    modelReportsTypes,
    modelCameras,
    modelTypeErrors,
    modelIsChecked,
    modelRangeDate,
    clearFilter: store.clearFilter
  }
}
