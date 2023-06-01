import { ref } from 'vue'

export function useIsState(defaultState = false) {
  const isState = ref(defaultState)

  const close = () => {
    isState.value = false
  }

  const open = () => {
    isState.value = true
  }

  const toggle = () => {
    isState.value = !isState.value
  }
  return {
    toggle,
    isState,
    close,
    open
  }
}
