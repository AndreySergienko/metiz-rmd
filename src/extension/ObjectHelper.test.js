import { ObjectHelper } from './ObjectHelper'

describe('ObjectHelper.js', () => {
  test('getValueByKeys', () => {
    const person = {
      link: {
        vk: 'my vk link'
      }
    }
    const keysValid = ['link', 'vk']
    const keysInValid = ['link', 'insta']
    expect(ObjectHelper.getValueByKeys(person, keysValid)).toBe('my vk link')
    expect(ObjectHelper.getValueByKeys(person, keysInValid)).toBeUndefined()
  })
})
