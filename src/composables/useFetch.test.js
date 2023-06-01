import { useFetch } from '@/composables/useFetch'

describe('useFetch', () => {
  test('myFetch changes isLoader', async () => {
    const { isLoader, myFetch } = useFetch()

    expect(isLoader.value).toBe(true)

    const mockCallback = jest.fn()
    await myFetch(mockCallback)

    expect(isLoader.value).toBe(false)
  })
})
