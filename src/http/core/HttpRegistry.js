import { Http } from '@/http/core/Http'

export class HttpRegistry extends Http {
  createOptionsQuery(tableStore, registry) {
    const query = {
      ...registry.queryOptions,
      sort: tableStore.sort,
      'per-page': tableStore.perPage,
      page: tableStore.page,
      search: tableStore.search ? tableStore.search : undefined
    }

    Object.keys(tableStore.filter).forEach((key) => {
      if (registry.queryKey.includes(key)) {
        if (key === 'Processed') {
          query[key] = tableStore.filter[key] ? 1 : 0
        } else {
          query[key] = tableStore.filter[key]
        }
      }
    })

    return query
  }
}
