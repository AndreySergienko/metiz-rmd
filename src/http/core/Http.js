import { isNotNullOrUndefined } from '@/utils/helper.function'

export class Http {
  constructor() {
    this.query = []
    this.unIterableKeys = ['page', 'per-page', 'sort', 'search']
  }

  addQueryItem(key, val) {
    this.query.push({ key, val })
  }

  formatObjectOptionsToQueryList(options) {
    this.query.length = 0
    Object.keys(options).forEach((key) => {
      if (isNotNullOrUndefined(options[key])) {
        this.addQueryItem(key, options[key])
      }
    })

    return this.query
  }

  queryToString(query = []) {
    if (!Array.isArray(query)) {
      throw new Error('Входящий параметр Query не является массивом')
    }
    let queriesURL = ''
    query.forEach((q) => {
      queriesURL ? (queriesURL += '&') : (queriesURL += '?')
      if (!this.unIterableKeys.includes(q.key)) {
        queriesURL += `search[${q.key}]=${q.val}`
      } else if (q.key !== 'search') {
        queriesURL += `${q.key}=${q.val}`
      } else {
        queriesURL += `${q.key}${q.val}`
      }
    })
    return queriesURL
  }
}
