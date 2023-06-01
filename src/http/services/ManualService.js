import { ManualRequest } from '@/http/ManualRequest'
import { useManualStore } from '@/store/manual/useManualStore'
import { Alert } from '@/extension/Alert'
import { useAuthService } from 'auth-analytic-vue'
import Manuals from '@/core/manuals-store/Manuals'
import router from '@/router'

export class ManualService {
  #manualRequest

  constructor() {
    this.alert = Alert()
    this.manuals = new Manuals()
    this.#manualRequest = new ManualRequest()
    this.manualList = this.manuals.manuals
  }

  getUrl(key, query = null) {
    return this.manuals.getUrl(key) + (query ? query : '')
  }

  getUrlForManual() {
    let url
    for (const idx in this.manualList) {
      if (this.manualList[idx].storage === router.currentRoute.value.name) {
        url = this.getUrl(idx)
        break
      }
    }
    return url
  }

  async getManual(key) {
    try {
      const query = ''
      const url = this.getUrl(key, query)
      const store = useManualStore()
      let data = null
      if (!url) {
        data = this.manuals.getDefault(key)
      } else {
        const response = await this.#manualRequest.getManual(url)
        data = response.data
      }

      store.setList(this.manualList[key].storage, data.data || data)
    } catch (e) {
      this.alert.setError(e)
    }
  }

  checkPermissions(key) {
    const { checkHasScope } = useAuthService()
    const isPermissions = !!this.manuals.getPermissions(key).length
    return isPermissions && !checkHasScope([this.manuals.getPermissions(key)])
  }

  async allManualInitial() {
    try {
      const store = useManualStore()
      const keysManual = Object.keys(this.manualList)
      for (let i = 0; i < keysManual.length; i++) {
        const key = keysManual[i]
        if (this.checkPermissions(key)) return
        await this.getManual(key)
      }
      store.finishIsReady()
    } catch (e) {
      this.alert.setError(e)
    }
  }


  async deleteById(id) {
    try {
      await this.#manualRequest.deleteById(this.getUrlForManual(), id)
      this.alert.setSuccess('Успешно')
    } catch (e) {
      this.alert.setError(e)
    }
  }

  async updateById(id, form) {
    try {
      await this.#manualRequest.updateById(this.getUrlForManual(), id, form)
    } catch (e) {
      this.alert.setError(e)
    }
  }
}
