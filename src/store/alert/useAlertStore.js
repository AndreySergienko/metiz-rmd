import { defineStore } from 'pinia'
import { ref } from 'vue'

function checkPropsAlert(candidate) {
  if (typeof candidate !== 'object') {
    throw new Error('Некорректный тип данных, ожидается объект')
  }

  if (!candidate.type) {
    throw new Error('Не указан тип сообщения')
  }
  if (!candidate.text) {
    throw new Error('Не указано сообщение')
  }

  return true
}

export const useAlertStore = defineStore('alert', () => {
  // data
  const isShow = ref(false)
  const valuesAlert = ref({
    type: 'error',
    text: 'test'
  })
  let timeout

  // actions
  const clearValues = () => (valuesAlert.value = {})
  const closeAlert = () => {
    if (timeout) {
      clearTimeout(timeout)
    }
    isShow.value = false
    clearValues()
  }

  const setAlert = (alert) => {
    if (checkPropsAlert(alert)) {
      valuesAlert.value = alert
      isShow.value = true
    }

    timeout = setTimeout(() => {
      closeAlert()
    }, process.env.VUE_APP_DELAY_ALERT)
  }

  return {
    isShow,
    valuesAlert,
    setAlert,
    closeAlert
  }
})
