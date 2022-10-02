import { Block } from 'utils'
import './input.scss'

interface InputProps {
  onInput?: () => void
  onFocus?: () => void
  onBlur?: () => void
  type?: 'text' | 'password' | 'email' | 'tel'
  placeholder?: string
  name?: string
  id?: string
  pattern?: RegExp
}

export class Input extends Block {
  static componentName = 'Input'
  constructor ({ onInput, onFocus, onBlur, ...props }: InputProps) {
    super({ ...props, events: { input: onInput, focus: onFocus, blur: onBlur } })
  }

  protected render (): string {
    return `
      <input class="input" type="{{type}}" name="{{name}}" id="{{id}}" placeholder="{{placeholder}}" pattern="{{pattern}}" required>
    `
  }
}
