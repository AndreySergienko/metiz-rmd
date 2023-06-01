import { LightTheme } from '@/modules/vuetify/theme/LightTheme'
import nameList from '@/modules/vuetify/src/nameList'

class Themes {
  constructor() {
    this.themes = {}
  }

  createTheme(key, Theme) {
    this.themes[key] = new Theme()
  }
}

const themes = new Themes()
themes.defaultTheme = nameList.DEFAULT
themes.createTheme(nameList.DEFAULT, LightTheme)
export { themes }
