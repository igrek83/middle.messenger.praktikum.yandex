import { Block } from 'utils'
import './input-block.scss'

interface InputBlockProps {
  onInput?: () => void
  onFocus?: () => void
  onBlur?: () => void
  type?: 'text' | 'password' | 'email | tel'
  placeholder?: string
  name?: string
  id?: string
  error?: string
  content?: string
  pattern?: RegExp
}

export class InputBlock extends Block {
  static componentName = 'InputBlock'
  constructor (props: InputBlockProps) {
    super({
      ...props
      /**
            onBlur: (event: { target: { value: any; }; }) => {
                if (props.type === 'text') {
                    if (event.target.value.length < 3) {
                        this.refs.inputError.setProps({ error: 'Должно быть больше 3 символов' })
                    } else {
                        this.refs.inputError.setProps({ error: '' })
                    }
                }
                if (props.type === 'password') {
                    if (event.target.value.length < 8) {
                        this.refs.inputError.setProps({ error: 'Должно быть не меньше 8 символов' })
                    } else {
                        this.refs.inputError.setProps({ error: '' })
                    }
                }
                if (props.type === 'email') {
                    const reg: RegExp = /[aA-zZ0-9]{2,}(-?\.?[aA-zZ0-9]+)*@[a-z]{2,20}(\.[a-z]{2,10})+/g;
                    if (reg.test(event.target.value) === false) {
                        this.refs.inputError.setProps({ error: 'Неверный формат email' })
                    } else {
                        this.refs.inputError.setProps({ error: '' })
                    }
                }
            } */
    })
  }

  protected render (): string {
    // language=hbs
    return `
          <li class="input-block">
            {{{ InputLabel 
               content="{{content}}"
               for=id
            }}}
            <div class="input-block__box">
                {{{Input
                   ref="input"
                   type="{{type}}"
                   name="{{name}}"
                   id="{{id}}"
                   placeholder="{{placeholder}}"
                   pattern="{{pattern}}"
                   onFocus=onFocus
                   onBlur=onBlur
                   onInput=onInput
                }}}
                {{{InputError 
                   ref="inputError" 
                   error=error 
                }}}
            </div>
          </li>
        `
  }
}
