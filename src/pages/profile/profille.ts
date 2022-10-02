import { Block } from 'utils'
import './profile.scss'

export class ProfilePage extends Block {
  static componentName = 'Profile'

  protected getStateFromProps () {
    this.state = {
      formPutProfileOpen: () => {
        document.querySelector('#put-form')!.classList.add('form_is_opened')
        setTimeout(() => {
          document.querySelector('#put-form')!.classList.add('form_theme_opacity')
        }, 1)
      },

      formPutPasswordOpen: () => {
        document.querySelector('#pass-form')!.classList.add('form_is_opened')
        setTimeout(() => {
          document.querySelector('#pass-form')!.classList.add('form_theme_opacity')
        }, 1)
      }
    }
  }

  // language=hbs
  render (): string {
    return `
        {{#Layout name="ProfilePage" }}
            <div class="profile">
                <div class="profile__block">
                    {{{AvatarInput}}}
                    <ul class="profile__box">
                       <div class="profile__container">
                           <span class="profile__span">Почта</span>
                           <span class="profile__name">Почта</span>
                       </div>
                        <div class="profile__container">
                            <span class="profile__span">Логин</span>
                            <span class="profile__name">Логин</span>
                        </div>
                        <div class="profile__container">
                            <span class="profile__span">Имя</span>
                            <span class="profile__name">Имя</span>
                        </div>
                        <div class="profile__container">
                            <span class="profile__span">Фамилия</span>
                            <span class="profile__name">Фамилия</span>
                        </div>
                        <div class="profile__container">
                            <span class="profile__span">Телефон</span>
                            <span class="profile__name">8-800-800-00-00</span>
                        </div>
                    </ul>
                    {{{Button
                        buttonClass="button"
                        id="put-button"
                        type="button"
                        content="Изменить профиль"
                        onClick=formPutProfileOpen
                    }}}
                </div>
                {{{Button
                   buttonClass="button"
                   id="password-button"
                   type="button" 
                   content="Изменить пароль"
                   onClick=formPutPasswordOpen
                }}}
            </div>
        {{/Layout}}
    `
  }
}
