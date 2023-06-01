import { accessScopes } from '@/modules/auth/access.scopes'

export default class Manuals {
  constructor() {
    this.manuals = {
      1: {
        storage: 'cameras',
        url: '/cameras',
        permissions: [accessScopes.CAMERA_INDEX]
      },
      2: {
        storage: 'nameErrors',
        url: '',
        permissions: [],
        default: [
          { title: 'Опасная зона', value: 0 },
          { title: 'Распознование СИЗ', value: 1 }
        ]
      },
      3: {
        storage: 'users',
        url: '/users',
        permissions: [accessScopes.USER_INDEX]
      },
      4: {
        storage: 'zones',
        url: '/zones',
        permissions: [accessScopes.ZONE_INDEX]
      },
      5: {
        storage: 'roles',
        url: '/roles',
        permissions: [accessScopes.USER_INDEX]
      },
      6: {
        storage: 'reports',
        url: '/reports/types',
        permissions: [accessScopes.REPORT]
      }
    }
  }

  getStorage(key) {
    return this.manuals[key].storage
  }

  getUrl(key) {
    return this.manuals[key].url
  }

  getPermissions(key) {
    return this.manuals[key].permissions
  }

  getDefault(key) {
    return this.manuals[key].default
  }
}
