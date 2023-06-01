import { computed } from 'vue'

export function useRegistry(registry) {
  const isShowFilter = computed(() => registry.value.isFilter)
  const isShowChecked = computed(() => registry.value.isChecked)
  const isShowLayoutCamera = computed(() => registry.value.isShowCamera)
  const isShowReportsButton = computed(() => registry.value.isReports)
  const isShowSearch = computed(() => registry.value.isSearch)
  const isShowReportAllButton = computed(() => registry.value.isButtonReport)
  const isShowComponent = computed(() => registry.value.isComponent)
  return {
    isShowReportAllButton,
    isShowSearch,
    isShowComponent,
    isShowLayoutCamera,
    isShowFilter,
    isShowReportsButton,
    isShowChecked
  }
}
