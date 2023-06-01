import { computed, ref, watch } from 'vue'
import TextCorrecter from '@/extension/TextCorrecter'
import { useRoute } from 'vue-router'
import LayoutStorage from '@/modules/layouts/layoutStorage'

export function useLayout() {
  const route = useRoute()
  const currentLayout = ref(LayoutStorage.DEFAULT)

  const currentRoute = computed(() => {
    return route.path
  })

  watch(currentRoute, () => {
    currentLayout.value =
      TextCorrecter.capitalize(route.meta.layout) || LayoutStorage.DEFAULT
  })

  return {
    currentLayout
  }
}
