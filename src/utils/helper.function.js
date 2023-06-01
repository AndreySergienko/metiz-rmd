export function pinRouteLayout(routes = [], layout = '') {
  return routes.map((route) => {
    if (!Reflect.has(route, 'meta')) route.meta = {}
    route.meta.layout = layout
    return route
  })
}

export function decomposeObject(toObj, fromObj) {
  Object.keys(fromObj).forEach((key) => (toObj[key] = fromObj[key]))
}

export function isNotNullOrUndefined(val) {
  return val !== null && val !== undefined
}

export function debounce(cb, wait) {
  let timeout

  return function (...args) {
    const later = async () => {
      clearTimeout(timeout)

      await cb.apply(this, args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}
