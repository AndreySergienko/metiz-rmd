import { Alert } from '@/extension/Alert'
import { EventRequest } from '@/http/EventRequest'
import { useRoute } from 'vue-router'
import registry from '@/core/registry'
import { useFilterStore } from '@/store/events/useFilterStore'
import { storeToRefs } from 'pinia'

function checkIsEmpty(filter) {
  return filter !== null && filter !== undefined && filter !== ''
}

export class EventService {
  #registry
  #alert
  #eventRequest

  constructor() {
    this.#alert = Alert()
    this.#eventRequest = new EventRequest()
    const route = useRoute()
    this.query = null
    this.#registry = registry[route.params.slug]
  }

  createQuery(perPage, page, filter, sort, search) {
    const query = new URL(process.env.VUE_APP_SERVER_URL)
    perPage && query.searchParams.append('per-page', perPage)
    page && query.searchParams.append('page', page)
    sort && query.searchParams.append('sort', sort)
    search && query.searchParams.append('[All]', search)
    for (const entries in filter) {
      if (checkIsEmpty(filter[entries])) {
        query.searchParams.append(`search[${entries}]`, filter[entries])
      }
    }
    this.query = query.search
    return query.search
  }

  async getAllItems({ perPage, page, filter, sort, url, search }) {
    try {
      const { data } = await this.#eventRequest.getAllItems(
        this.createQuery(perPage, page, filter, sort, search),
        url
      )
      return {
        totalItems: data.total,
        data: data.data || data
      }
    } catch (e) {
      this.#alert.setError(e)
    }
  }

  async getReport(isEvent) {
    try {
      const url = `${isEvent ? 'events' : 'reports'}/xls${this.query}`
      const { data } = await this.#eventRequest.getXlsXError(url)
      const a = document.createElement('a')
      // const downloadUrl = 'api' + data
      a.href = data
      a.download = ''
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
    } catch (e) {
      this.#alert.setError(e)
    }
  }

  async getDetailItem(id) {
    try {
      const store = useFilterStore()
      const { filter } = storeToRefs(store)
      const query = this.createQuery(null, null, filter)
      const { data } = await this.#eventRequest.getItem(id, query)
      return data
    } catch (e) {
      this.#alert.setError(e)
    }
  }

  async rejectItem(id, item) {
    try {
      await this.#eventRequest.rejectItem(id)
      item.processed = 1
      item.approved = 0
      this.#alert.setSuccess('Нарушение отклонено')
    } catch (e) {
      this.#alert.setError(e)
    }
  }

  async acceptItem(id, item) {
    try {
      await this.#eventRequest.acceptItem(id)
      item.processed = 1
      item.approved = 1
      this.#alert.setSuccess('Нарушение подтверждено')
    } catch (e) {
      this.#alert.setError(e)
    }
  }
}
