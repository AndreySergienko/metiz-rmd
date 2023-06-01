import { LocalStorage } from '@/extension/storage/LocalStorage'
import { routesNameList } from '@/router/routesNameList'
import router from '@/router'

const ACCESS_TOKEN = 'token'

function getAccessToken() {
  return LocalStorage.getItem(ACCESS_TOKEN)
}

export class AxiosOptions {
  constructor(host, authHost) {
    this.$host = host
    this.$authHost = authHost
  }

  interceptorHostRequest = (config) => {
    if (getAccessToken()) {
      config.headers.Authorization = `Bearer ${getAccessToken()}`
    }
    return config
  }

  interceptorAuthHostResponseReject = async (error) => {
    const originalRequest = error.config
    if (error.response.status === 401 && !error.config._isRetry) {
      originalRequest._isRetry = true
      try {
        LocalStorage.clearItem('token')
        await router.push({ name: routesNameList.AUTH })
        await this.$authHost.request(originalRequest)
      } catch (e) {
        console.log('Пользователь не авторизован')
      }
    }
    throw error
  }

  interceptorAuthHostResponseSuccess(config) {
    return config
  }

  interceptorHostResponseSuccess(config) {
    return config
  }
}
