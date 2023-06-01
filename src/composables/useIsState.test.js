import { useIsState } from '@/composables/useIsState'

describe('useIsState', () => {
  test('should set and change state', () => {
    const { toggle, isState } = useIsState(false)
    expect(isState.value).toBe(false)
    toggle()
    expect(isState.value).toBe(true)
    toggle()
    expect(isState.value).toBe(false)
  })

  test('should close state', () => {
    const { close, isState } = useIsState(true)
    expect(isState.value).toBe(true)
    close()
    expect(isState.value).toBe(false)
  })

  test('should open state', () => {
    const { open, isState } = useIsState(false)
    expect(isState.value).toBe(false)
    open()
    expect(isState.value).toBe(true)
  })
})
