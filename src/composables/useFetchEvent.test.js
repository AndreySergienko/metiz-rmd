import { reactive, nextTick, watch, ref } from 'vue'

describe('fetchEvent', () => {
  const mockRoute = reactive({
    fullPath: 'test-path'
  })
  let search
  let filterForRequest
  let page
  let perPage
  let sort
  let handlerIsState
  let fetchService = jest.fn()

  beforeEach(() => {
    search = ref('')
    filterForRequest = ref({})
    page = ref(1)
    perPage = ref(10)
    sort = ref('')
    handlerIsState = ref(false)
    fetchService = jest.fn()

    watch(search, fetchService)
    watch(mockRoute, fetchService)
    watch([filterForRequest, page, perPage, sort, handlerIsState], fetchService)
  })

  test('fetchService should be called when search value changes', async () => {
    search.value = 'test'
    await nextTick()
    expect(fetchService).toHaveBeenCalledTimes(1)
  })

  test('fetchService should be called when route changes', async () => {
    mockRoute.fullPath = 'new-test-path'
    await nextTick()
    expect(mockRoute.fullPath).toEqual('new-test-path')
    expect(fetchService).toHaveBeenCalledTimes(1)
  })

  test('fetchService should be called when filterForRequest, page, perPage, sort or handlerIsState changes', async () => {
    filterForRequest.value = { test: 'test' }
    await nextTick()
    expect(fetchService).toHaveBeenCalledTimes(1)

    page.value = 2
    await nextTick()
    expect(fetchService).toHaveBeenCalledTimes(2)

    perPage.value = 20
    await nextTick()
    expect(fetchService).toHaveBeenCalledTimes(3)

    sort.value = 'name'
    await nextTick()
    expect(fetchService).toHaveBeenCalledTimes(4)

    handlerIsState.value = true
    await nextTick()
    expect(fetchService).toHaveBeenCalledTimes(5)
  })
})
