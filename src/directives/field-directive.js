function fieldDirective(el, binding) {
  switch (binding.arg) {
    case 'checkbox':
      // If add compact format field default. Warning! Vuetify can be updated
      // el.querySelector('.v-selection-control').classList.add(
      //   'v-selection.destiny-compact'
      // )
      el.classList.add('field--checkbox')
      break
    case 'btn':
      el.classList.add('btn')
      // el.classList.remove('v-btn--variant-elevated')
      break
    default:
      // If add compact format field default. Warning! Vuetify can be updated
      // el.classList.remove('v-input--density-default')
      // el.classList.add('field', 'v-input--density-compact')
      el.classList.add('field')
      break
  }
}

const directive = {
  mounted(el, binding) {
    fieldDirective(el, binding)
  },

  updated(el, binding) {
    fieldDirective(el, binding)
  }
}

export { directive as fieldDirective }
