import { reactive, computed, watchEffect } from 'vue'

describe('useDetailEventFetch', () => {
  let mockRoute
  let event
  let getItem
  let getRoute

  beforeEach(() => {
    mockRoute = {
      params: {
        id: 1
      }
    }

    event = reactive({})
    getItem = jest.fn(() => {
      Object.assign(event, { id: 1, name: 'Test Event' })
    })
    getRoute = computed(() => mockRoute.params.id)

    watchEffect(() => {
      getItem(getRoute.value)
    })
  })

  test('should call getItem on watchEffect', () => {
    expect(getItem).toHaveBeenCalledWith(getRoute.value)
  })

  test('should update event on getItem success', () => {
    expect(event).toEqual({ id: 1, name: 'Test Event' })
  })
})
