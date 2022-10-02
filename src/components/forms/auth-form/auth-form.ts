import { Block } from 'utils'
import { inputValidity } from 'utils/inputValidity'
import { submittingForm } from 'utils/submittingForm'
import { closeForm } from 'utils/closeForm'
import '../forms.scss'

export class AuthForm extends Block {
  static componentName = 'AuthForm'

  protected getStateFromProps (): void {
    this.state = {
      inputValidity,

      closeForm: () => closeForm(document.querySelector('#auth-form')!, document.forms.auth),

      inputValidate: (event: { target: any }) => {
        const element = event.target
        this.state.inputValidity(element)
      },

      submittingForm: () => submittingForm(event, document.forms.auth, this.state.inputValidity, this.state.closeForm)
    }
  }

  // language=hbs
  render (): string {
    return `
            <div id="auth-form" class="form">
                <form name="auth" class="form__container" autocomplete="off" novalidate>
                    {{{Button
                        buttonClass="close-button"
                        id="auth-close-button"
                        type="button"
                        onClick=closeForm
                    }}}
                    <h3 class="form__title">Зарегистрироваться</h3>
                    <ul class="form__box">
                       {{{InputBlock
                          ref="login"
                          type="text"
                          name="login"
                          id="auth-login"
                          placeholder="Логин"
                          content="Логин"
                          pattern="^(?=.*[a-zA-Z])([a-zA-Z0-9-_]){3,20}$"
                          onInput=inputValidate
                          onFocus=inputValidate
                          onBlur=inputValidate
                       }}}
                       {{{InputBlock
                         ref="password"
                         type="password"
                         name="password"
                         id="auth-password"
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
                       id="reg-auth-button"
                       type="submit"
                       content="Сохранить"
                       onClick=submittingForm
                    }}}
                </form>
            </div>
    `
  }
}
