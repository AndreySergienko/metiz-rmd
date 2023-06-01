import { computed, reactive, watchEffect } from 'vue'
import { routesNameList } from '@/router/routesNameList'
import { useRoute, useRouter } from 'vue-router'
import { EventService } from '@/http/services/EventService'
import { useFetch } from '@/composables/useFetch'

export function useDetailEventFetch() {
  const route = useRoute()
  const router = useRouter()
  const eventService = new EventService()
  const event = reactive({})
  const { myFetch, isLoader } = useFetch()

  const getItem = async (id) => {
    const data = await eventService.getDetailItem(id)
    if (!data) {
      await router.push({ name: routesNameList.REGISTRY })
    }
    Object.assign(event, data)
  }

  const getRoute = computed(() => route.params.id)

  watchEffect(async () => {
    await myFetch(() => getItem(getRoute.value))
  })
  return {
    isLoader,
    getItem,
    event
  }
}
