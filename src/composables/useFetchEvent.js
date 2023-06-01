import { EventService } from '@/http/services/EventService'
import { watch } from 'vue'
import { usePaginationStore } from '@/store/events/usePaginationStore'
import { useFilterStore } from '@/store/events/useFilterStore'
import { useEventsStore } from '@/store/events/useEventsStore'
import { useSortStore } from '@/store/events/useSortStore'
import { storeToRefs } from 'pinia'
import { useFetch } from '@/composables/useFetch'
import { useSearchStore } from '@/store/events/useSearchStore'
import { debounce } from '@/utils/helper.function'
import { useRoute } from 'vue-router'
import { useUpdatePageStore } from '@/store/events/useUpdatePageStore'
import { useHandlerUpdateTableStore } from '@/store/useHandlerUpdateTableStore'
import { PRIMARY_DELAY } from '@/utils/storage/consts'

export function useFetchEvent(currentRegistry) {
  const store = usePaginationStore()
  const storeFilter = useFilterStore()
  const storeSort = useSortStore()
  const storeEvents = useEventsStore()
  const storeUpdateHandler = useHandlerUpdateTableStore()
  const storeSearch = useSearchStore()
  const storeUpdate = useUpdatePageStore()
  const { isUpdatePage } = storeToRefs(storeUpdate)
  const { isState: handlerIsState } = storeToRefs(storeUpdateHandler)
  const { search } = storeToRefs(storeSearch)
  const { sort } = storeToRefs(storeSort)
  const { page, perPage } = storeToRefs(store)
  const { filterForRequest } = storeToRefs(storeFilter)
  const { events, totalEvents } = storeToRefs(storeEvents)
  const eventService = new EventService()
  const { myFetch, isLoader } = useFetch()
  
  const fetchService = async () => {
    events.value = []
    const { data, totalItems } = await eventService.getAllItems({
      page: page.value,
      perPage: perPage.value,
      sort: sort.value,
      filter: filterForRequest.value,
      url: currentRegistry.value.url,
      search: search.value
    })
    events.value = data
    totalEvents.value = totalItems
  }

  const debounceSearch = debounce(fetchService, PRIMARY_DELAY)

  watch(search, debounceSearch)

  const route = useRoute()

  watch(
    route,
    async () => {
      storeUpdate.toggleUpdate()
      await myFetch(fetchService)
    },
    { immediate: true }
  )

  watch([filterForRequest, page, perPage, sort, handlerIsState], () => {
    if (!isUpdatePage.value) {
      myFetch(fetchService)
    }
  })

  return {
    search,
    page,
    perPage,
    isLoader,
    updatePage: store.updatePage,
    updatePerPage: store.updatePerPage,
    updateSort: storeSort.updateSortByTable
  }
}
