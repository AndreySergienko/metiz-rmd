import { useUserStore } from '@/store/user/useUserStore'

async function fetchToken(setScopes) {
  const token = window.localStorage.getItem('token')
  if (!token) return
  const response = await fetch(`${process.env.VUE_APP_SERVER_URL}/users/get`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  const { data } = await response.json()
  const store = useUserStore()
  store.setPersonal(data)
  setScopes(data)
}

export { fetchToken }
