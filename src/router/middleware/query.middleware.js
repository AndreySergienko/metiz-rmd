import { useFilterStore } from '@/store/events/useFilterStore'
import { routesNameList } from '@/router/routesNameList'
import registry from '@/core/registry'
import { useSortStore } from '@/store/events/useSortStore'
import { useUpdatePageStore } from '@/store/events/useUpdatePageStore'
import { useSearchStore } from '@/store/events/useSearchStore'

export function queryMiddleware(to) {
  const store = useFilterStore()
  const storeSort = useSortStore()
  const storeUpdate = useUpdatePageStore()
  const storeSearch = useSearchStore()
  storeUpdate.toggleUpdate()
  // clear only change registry
  if (to.name === routesNameList.DETAIL_EVENT) return
  store.clearFilter()
  storeSort.clearSort()
  storeSearch.clearSearch()

  if (!to.params.slug) return
  registry[to.params.slug].beforeEnter &&
    registry[to.params.slug].beforeEnter(store, storeSort)
}
