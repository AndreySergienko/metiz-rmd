import { computed } from 'vue'
import { useEventsStore } from '@/store/events/useEventsStore'
import { storeToRefs } from 'pinia'
import { useRoute, useRouter } from 'vue-router'
import registry from '@/core/registry'
import { routesNameList } from '@/router/routesNameList'

export function useTableEvent() {
  const store = useEventsStore()
  const route = useRoute()
  const router = useRouter()
  const currentRegistry = computed(() => {
    return registry[route.params.slug].children
      ? registry[route.params.slug].children[route.name]
      : registry[route.params.slug]
  })
  const { events, totalEvents } = storeToRefs(store)
  const headers = computed(() => currentRegistry.value?.table?.headers || [])

  const items = computed(() =>
    currentRegistry.value?.table?.transform(events.value)
  )

  const checkIsManual = computed(() => route.params.slug === 'manual')

  const getItem = (item, key) => item.columns[key]

  const pushRoute = (id) => {
    router.push({
      name: routesNameList.DETAIL_EVENT,
      params: { id }
    })
  }
  return {
    headers,
    items,
    totalEvents,
    checkIsManual,
    pushRoute,
    getItem
  }
}
