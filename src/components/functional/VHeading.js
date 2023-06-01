import { h } from 'vue'

const VHeading = (props, context) => {
  return h(
    `h${props.level}`,
    { ...context.attrs, class: `title text-${props.position}` },
    [props.text]
  )
}

VHeading.props = {
  level: {
    type: String
  },
  text: {
    type: String,
    required: true
  },
  position: {
    type: String,
    validator(value) {
      const isValid = ['left', 'center', 'right'].includes(value)
      if (!isValid) {
        console.warn('Undefined props position in VHeading component')
      }
    }
  }
}

export default VHeading
