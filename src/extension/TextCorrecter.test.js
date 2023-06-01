import TextCorrecter from './TextCorrecter'

describe('TextCorrecter.js', () => {
  test('capitalize', () => {
    const msg = 'start'
    expect(TextCorrecter.capitalize(msg)).toBe('Start')
    expect(TextCorrecter.capitalize('')).toBeUndefined()
  })

  test('getPartString', () => {
    const msg = 'my name'
    expect(TextCorrecter.getPartString(msg, 1)).toBe('name')
    expect(TextCorrecter.getPartString(msg, 5)).toBeUndefined()
  })

  test('deleteIndent', () => {
    const msg = '  more  indent   '
    expect(TextCorrecter.deleteIndent(msg)).toBe('moreindent')
  })
})
