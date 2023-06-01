import { useManualStore } from '@/store/manual/useManualStore'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

export function useComputedManual() {
  const store = useManualStore()
  const { list } = storeToRefs(store)

  // name list value to be core/Manual.js
  const getCameras = computed(() => list.value.cameras)
  const getNameErrors = computed(() => list.value.nameErrors)
  const getReports = computed(() => list.value.reports)
  const getRoles = computed(() => list.value.roles)
  const getZones = computed(() => list.value.zones)
  return {
    getCameras,
    getReports,
    getNameErrors,
    getRoles,
    getZones
  }
}
