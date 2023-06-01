import { acceptHMRUpdate, defineStore } from 'pinia'
import { ref } from 'vue'

export const useEventsStore = defineStore('event', () => {
  const events = ref([])
  const totalEvents = ref(0)
  return {
    events,
    totalEvents
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useEventsStore, import.meta.hot))
}
