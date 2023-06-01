import { useAlertStore } from '@/store/alert/useAlertStore'

function alertService() {
  function setError(e) {
    const alert = useAlertStore()
    let text = e
    if (e.response) {
      text = e.response.data.message
    }
    alert.setAlert({ type: 'error', text })
  }

  function setSuccess(text) {
    const alert = useAlertStore()
    alert.setAlert({ type: 'success', text })
  }

  return {
    setError,
    setSuccess
  }
}

export { alertService as Alert }
