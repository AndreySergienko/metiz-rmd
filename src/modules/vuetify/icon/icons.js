import IconPin from '@/modules/customIcon/items/IconPin'
import IconBurger from '@/modules/customIcon/items/IconBurger'
import { h } from 'vue'

export const aliasesCustom = {
  pin: IconPin,
  burger: IconBurger
}

export const custom = {
  component: (props) => {
    return h(aliasesCustom[props.icon])
  }
}
