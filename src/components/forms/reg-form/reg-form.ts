import { Block } from 'utils'
import { inputValidity } from 'utils/inputValidity'
import { submittingForm } from 'utils/submittingForm'
import { closeForm } from 'utils/closeForm'
import '../forms.scss'

export class RegForm extends Block {
  static componentName = 'RegForm'
  protected getStateFromProps () {
    this.state = {
      inputValidity,

      closeForm: () => closeForm(document.querySelector('#reg-form')!, document.forms.register),

      inputValidate: (event: { target: any }) => {
        const element = event.target
        this.state.inputValidity(element)
      },

      submittingForm: () => submittingForm(event, document.forms.register, this.state.inputValidity, this.state.closeForm)
    }
  }

  // language=hbs
  render (): string {
    return `
            <div id="reg-form" class="form">
                <form name="register" class="form__container" autocomplete="off" novalidate>
                    {{{Button
                        buttonClass="close-button"
                        id="reg-close-button"
                        type="button"
                        onClick=closeForm
                    }}}
                    <h3 class="form__title">Зарегистрироваться</h3>
                    <ul class="form__box">
                       {{{InputBlock
                          ref="email"
                          type="email"
                          name="email"
                          id="email"
                          placeholder="почта"
                          content="Почта"
                          pattern="^[aA-zZ0-9]{2,}(-?\.?[aA-zZ0-9]+)*@[a-z]{2,20}(\.[a-z]{2,10})"
                          onInput=inputValidate
                          onFocus=inputValidate
                          onBlur=inputValidate
                       }}} 
                       {{{InputBlock
                          ref="login"
                          type="text"
                          name="login"
                          id="reg-login"
                          placeholder="Логин"
                          content="Логин"
                          pattern="^(?=.*[a-zA-Z])([a-zA-Z0-9-_]){3,20}$"
                          onInput=inputValidate
                          onFocus=inputValidate
                          onBlur=inputValidate
                       }}}
                       {{{InputBlock
                          ref="first-name"
                          type="text"
                          name="first_name"
                          id="first-name"
                          placeholder="Имя"
                          content="Имя"
                          pattern="^[А-ЯЁA-Z][А-ЯЁA-Zа-яёa-z-]+$"
                          onInput=inputValidate
                          onFocus=inputValidate
                          onBlur=inputValidate
                       }}}
                       {{{InputBlock
                          ref="second-name"
                          type="text"
                          name="second_name"
                          id="second-name"
                          placeholder="Фамилия"
                          content="Фамилия"
                          pattern="^[А-ЯЁA-Z][А-ЯЁA-Zа-яёa-z-]+$"
                          onInput=inputValidate
                          onFocus=inputValidate
                          onBlur=inputValidate
                       }}}
                       {{{InputBlock
                          ref="tel"
                          type="tel"
                          name="phone"
                          id="phone"
                          placeholder="Телефон"
                          content="Телефон"
                          pattern="^[+-d]?[0-9]{10,15}$"
                          onInput=inputValidate
                          onFocus=inputValidate
                          onBlur=inputValidate
                       }}}  
                       {{{InputBlock
                         ref="password"
                         type="password"
                         name="password"
                         id="password"
                         placeholder="Пароль"
                         content="Пароль"
                         pattern="^(?=.*[A-Z])(?=.*[0-9])[A-Za-z0-9]{8,40}$"
                         onInput=inputValidate
                         onFocus=inputValidate
                         onBlur=inputValidate
                       }}}                   
                    </ul>
                    {{{Button
                       buttonClass="button"
                       id="reg-submit-button"
                       type="submit"
                       content="Сохранить"
                       onClick=submittingForm
                    }}}
                </form>
            </div>
    `
  }
}
