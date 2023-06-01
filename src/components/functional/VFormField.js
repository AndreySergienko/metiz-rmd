import { h } from 'vue'

const vCol = (props, context) => {
  return h('div', { class: 'v-col v-col-8 px-3 py-4' }, context.slots)
}

const VFormFiled = (props, context) => {
  return h('div', { class: 'v-row d-flex justify-center' }, [
    vCol(props, context)
  ])
}

export default VFormFiled
