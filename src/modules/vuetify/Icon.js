import { aliasesCustom, custom } from './icon/icons'

class Icon {
  constructor({ defaultSet, aliases, sets }) {
    this.defaultSet = defaultSet
    this.aliases = aliases
    this.sets = sets
  }
}

const icon = new Icon({
  defaultSet: 'custom',
  aliases: aliasesCustom,
  sets: {
    custom
  }
})

export { icon }
