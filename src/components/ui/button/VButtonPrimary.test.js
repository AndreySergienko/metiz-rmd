import { render } from '@testing-library/vue'
import VButtonPrimary from '@/components/ui/button/VButtonPrimary.vue'

describe('Button', () => {
  test.each([
    { slot: 'Click me!', expectedText: 'Click me!' },
    { slot: 'Submit', expectedText: 'Submit' },
    { slot: 'Go back', expectedText: 'Go back' }
  ])('should render %s as text', ({ slot, expectedText }) => {
    const { getByText } = render(VButtonPrimary, {
      slots: { default: slot }
    })

    const buttonText = getByText(expectedText)

    expect(buttonText).toBeInTheDocument()
  })
})
