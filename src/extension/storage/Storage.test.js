import { LocalStorage } from './LocalStorage'

describe('LocalStorage', () => {
  test('should set and get item', () => {
    const key = 'foo'
    const value = 'bar'

    LocalStorage.setItem(key, value)

    expect(LocalStorage.getItem(key)).toEqual(value)
  })

  test('should clear item', () => {
    const key = 'foo'
    const value = 'bar'

    LocalStorage.setItem(key, value)
    LocalStorage.clearItem(key)

    expect(LocalStorage.getItem(key)).toBeNull()
  })
})
