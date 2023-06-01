import { useFilterField } from '@/composables/useFilterField'

jest.mock('@/store/events/useFilterStore', () => {
  return {
    useFilterStore: jest.fn(() => {
      return {
        updateFilterByKey: jest.fn(),
        clearFilter: jest.fn(),
        filter: {
          camera_id: 'camera_id',
          Type: 'Type',
          Approved: 'Approved',
          Processed: true,
          range: {
            start: 'start',
            end: 'end'
          }
        }
      }
    })
  }
})

describe('useFilterField', () => {
  test('computed properties should use filter store', () => {
    const {
      modelReportsTypes,
      modelCameras,
      modelTypeErrors,
      modelIsChecked,
      modelRangeDate
    } = useFilterField()
    expect(modelReportsTypes.value).toBe('Approved')
    expect(modelCameras.value).toBe('camera_id')
    expect(modelTypeErrors.value).toBe('Type')
    expect(modelIsChecked.value).toBe(true)
    expect(modelRangeDate.value).toEqual({
      start: 'start',
      end: 'end'
    })
  })
})
