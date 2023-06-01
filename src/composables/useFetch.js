import { ref } from 'vue'

export function useFetch() {
  const isLoader = ref(true)

  const myFetch = async (cb, props) => {
    isLoader.value = true
    await cb(props)
    isLoader.value = false
  }

  return {
    isLoader,
    myFetch
  }
}
