import { Storage } from '@/extension/storage/Storage'

export class LocalStorage extends Storage {
  static getItem(key) {
    return localStorage.getItem(key)
  }

  static setItem(key, val) {
    localStorage.setItem(key, val)
  }

  static clearItem(key) {
    localStorage.removeItem(key)
  }
}
