import { Block } from 'utils'
import './button.scss'

interface ButtonProps {
  type?: 'button' | 'submit'
  id?: string
  buttonClass?: string
  content: String
  onClick?: () => void
}

export class Button extends Block {
  static componentName = 'Button'
  constructor ({ onClick, ...props }: ButtonProps) {
    super({ ...props, events: { click: onClick } })
  }

  protected render (): string {
    return `
          <button type={{ type }} id={{ id }} class={{ buttonClass }}>{{ content }}</button>
        `
  }
}
