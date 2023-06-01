import { useRegistry } from './useRegistry'

describe('useRegistry', () => {
  test('should compute isShowFilter', () => {
    const registry = {
      value: { isFilter: true }
    }

    const { isShowFilter } = useRegistry(registry)
    expect(isShowFilter.value).toBe(true)
  })

  test('should compute isShowChecked', () => {
    const registry = {
      value: { isChecked: true }
    }

    const { isShowChecked } = useRegistry(registry)
    expect(isShowChecked.value).toBe(true)
  })

  test('should compute isShowComponent', () => {
    const registry = {
      value: { isComponent: true }
    }

    const { isShowComponent } = useRegistry(registry)
    expect(isShowComponent.value).toBe(true)
  })

  test('should compute isShowLayoutCamera', () => {
    const registry = {
      value: { isShowCamera: true }
    }

    const { isShowLayoutCamera } = useRegistry(registry)
    expect(isShowLayoutCamera.value).toBe(true)
  })

  test('should compute isShowReportsButton', () => {
    const registry = {
      value: { isReports: true }
    }

    const { isShowReportsButton } = useRegistry(registry)
    expect(isShowReportsButton.value).toBe(true)
  })

  test('should compute isShowSearch', () => {
    const registry = {
      value: { isSearch: true }
    }

    const { isShowSearch } = useRegistry(registry)
    expect(isShowSearch.value).toBe(true)
  })

  test('should compute isShowReportAllButton', () => {
    const registry = {
      value: { isButtonReport: true }
    }

    const { isShowReportAllButton } = useRegistry(registry)
    expect(isShowReportAllButton.value).toBe(true)
  })
})
