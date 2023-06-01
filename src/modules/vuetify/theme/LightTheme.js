import colors from '../src/colors'
import { ThemeComponent } from '@/modules/vuetify/ThemeComponent'

export class LightTheme extends ThemeComponent {
  constructor() {
    super({
      dark: false,
      colors: {
        primary: colors.DARK,
        secondary: colors.BLUE,
        mediumBlue: colors.MEDIUM_BLUE,
        error: colors.RED,
        warn: colors.ORANGE,
        white: colors.WHITE,
        light: colors.LIGHT,
        bg: colors.GRAY_1
      }
    })
  }
}
