import { ref } from 'vue'
import { useEventsStore } from '@/store/events/useEventsStore'
import { useRoute, useRouter } from 'vue-router'
import { routesNameList } from '@/router/routesNameList'
import { useTableEvent } from '@/composables/useTableEvent'

jest.mock('vue-router', () => ({
  useRoute: jest.fn(),
  useRouter: jest.fn()
}))

jest.mock('@/core/registry', () => ({
  myRegistry: {
    children: {
      myRoute: {
        table: {
          headers: [
            {
              title: 'Статус',
              key: 'approved',
              align: 'start',
              width: 100
            },
            {
              title: 'Статус',
              key: 'approved',
              align: 'start',
              width: 100
            }
          ],
          transform: jest.fn(() => [])
        }
      }
    },
    table: {
      headers: [
        {
          title: 'Статус',
          key: 'approved',
          align: 'start',
          width: 100
        },
        {
          title: 'Статус',
          key: 'approved',
          align: 'start',
          width: 100
        }
      ],
      transform: jest.fn(() => [])
    }
  }
}))

jest.mock('@/store/events/useEventsStore', () => ({
  useEventsStore: jest.fn()
}))

describe('useTableEvent', () => {
  let store
  let route
  let router

  beforeEach(() => {
    store = {
      events: [],
      totalEvents: 2
    }
    useEventsStore.mockReturnValue({
      events: ref([]),
      totalEvents: ref(2)
    })
    route = {
      params: { slug: 'myRegistry', id: 1 },
      name: 'myRoute'
    }
    useRoute.mockReturnValue(route)
    router = {
      push: jest.fn()
    }
    useRouter.mockReturnValue(router)
  })

  test('should return computed headers', () => {
    const { headers: computedHeaders } = useTableEvent()
    expect(computedHeaders.value).toEqual([
      {
        title: 'Статус',
        key: 'approved',
        align: 'start',
        width: 100
      },
      {
        title: 'Статус',
        key: 'approved',
        align: 'start',
        width: 100
      }
    ])
  })

  test('should return computed items', () => {
    const { items: computedItems } = useTableEvent()
    expect(computedItems.value).toEqual([])
  })

  test('should return computed totalEvents', () => {
    const { totalEvents: computedTotalEvents } = useTableEvent()
    expect(computedTotalEvents.value).toBe(2)
  })

  test('should return computed checkIsManual', () => {
    const { checkIsManual: isManual } = useTableEvent()
    expect(isManual.value).toBeFalsy()
  })

  test('should call push route', () => {
    const { pushRoute } = useTableEvent()
    pushRoute(1)
    expect(router.push).toHaveBeenCalledWith({
      name: routesNameList.DETAIL_EVENT,
      params: { id: 1 }
    })
  })

  test('should return getItem', () => {
    const { getItem } = useTableEvent()
    expect(getItem({ columns: { Header1: 'Value1' } }, 'Header1')).toBe(
      'Value1'
    )
  })
})
