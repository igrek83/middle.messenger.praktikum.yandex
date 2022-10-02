import { Block } from 'utils'
import './header.scss'

export class Header extends Block {
  static componentName = 'Header'

  protected getStateFromProps () {
    this.state = {
      formRegisterOpen: () => {
        document.querySelector('#reg-form')!.classList.add('form_is_opened')
        setTimeout(() => {
          document.querySelector('#reg-form')!.classList.add('form_theme_opacity')
        }, 1)
      },
      formAuthOpen: () => {
        document.querySelector('#auth-form')!.classList.add('form_is_opened')
        setTimeout(() => {
          document.querySelector('#auth-form')!.classList.add('form_theme_opacity')
        }, 1)
      }
    }
  }

  // language=hbs
  protected render (): string {
    return `
            <header class="header">
                <nav class="header__nav">   
                   {{{NavLink
                     to="/"
                     id="home-link"
                     content="Главная"   
                   }}}
                   {{{NavLink
                     to="/chates"
                     id="chates-link"
                     content="Список чатов"   
                   }}}
                   {{{NavLink
                     to="/profile"
                     id="profile-link"
                     content="Настройки пользователя"   
                   }}}
                </nav>
                <div class="header__block">
                   {{{Button
                     type="button"
                     id="reg-button"
                     buttonClass="button"
                     content="Зарегистрироваться"
                     onClick=formRegisterOpen
                   }}}
                   {{{Button
                     type="button"
                     id="auth-button"
                     buttonClass="button"
                     content="Войти"
                     onClick=formAuthOpen
                   }}}
                </div>           
            </header>
        `
  }
}
