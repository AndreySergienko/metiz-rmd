import { EventService } from '@/http/services/EventService'
import { ref } from 'vue'

// Сомнительный хук, но пусть пока живёт
export function useChangeStateEvent(state) {
  const eventService = new EventService()
  const isDisabled = ref(false)

  async function send(cbName, id) {
    isDisabled.value = true
    await eventService[cbName](id, state)
    isDisabled.value = false
  }

  return {
    isDisabled,
    send
  }
}
