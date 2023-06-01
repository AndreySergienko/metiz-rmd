import { computed, reactive, watch } from 'vue'
import { useRoute } from 'vue-router'

export function useCardInfoUser(info) {
  const route = useRoute()
  const cardInfo = reactive({})
  const cardInfoThisChecked = reactive([])

  const setCardInfo = () => {
    Object.assign(cardInfo, info)
    cardInfo.item = [
      {
        title: 'Начало нарушения:',
        description: info.start_time || 'не указано'
      },
      {
        title: 'Окончание нарушения:',
        description: info.end_time || 'не указано'
      }
    ]
    if (info.processed_time) {
      cardInfoThisChecked.push({
        title: 'Время обработки:',
        description: info.processed_time
      })
    }
  }

  const changeRoute = computed(() => route.params)
  watch(changeRoute, () => setCardInfo(), {
    immediate: true
  })

  return {
    cardInfo,
    cardInfoThisChecked
  }
}
