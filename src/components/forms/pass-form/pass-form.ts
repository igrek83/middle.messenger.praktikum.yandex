import { Block } from 'utils'
import { inputValidity } from 'utils/inputValidity'
import { submittingForm } from 'utils/submittingForm'
import { closeForm } from 'utils/closeForm'
import '../forms.scss'

export class PassForm extends Block {
  static componentName = 'PassForm'

  protected getStateFromProps () {
    this.state = {
      inputValidity,

      closeForm: () => closeForm(document.querySelector('#pass-form')!, document.forms.passForm),

      inputValidate: (event: { target: any }) => {
        const element = event.target
        this.state.inputValidity(element)
      },

      submittingForm: () => submittingForm(event, document.forms.passForm, this.state.inputValidity, this.state.closeForm)
    }
  }

  // language=hbs
  render (): string {
    return `
            <div id="pass-form" class="form">
                <form name="passForm" class="form__container" autocomplete="off" novalidate>
                    {{{Button
                        buttonClass="close-button"
                        id="put-password-close-button"
                        type="button"
                        onClick=closeForm
                    }}}
                    <h3 class="form__title">Изменить пароль</h3>
                    <ul class="form__box">
                       {{{InputBlock
                         ref="password"
                         type="password"
                         name="password"
                         id="put-password"
                         placeholder="Пароль"
                         content="Новый пароль"
                         pattern="^(?=.*[A-Z])(?=.*[0-9])[A-Za-z0-9]{8,40}$"
                         onInput=inputValidate
                         onFocus=inputValidate
                         onBlur=inputValidate
                       }}}
                    </ul>
                    {{{Button
                       buttonClass="button"
                       id="put-password-button"
                       type="submit"
                       content="Сохранить"
                       onClick=submittingForm
                    }}}
                </form>
            </div>
    `
  }
}
