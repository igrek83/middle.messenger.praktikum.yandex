import { Block } from "utils";
import './profile.scss';

export class ProfilePage extends Block {
    static componentName = "Profile";
    // language=hbs
    render() {
        return `
        {{#Layout name="ProfilePage" }}
            <div class="profile">
                <form name="put-form" class="profile__form" novalidate>
                    <div class="profile__avatar-block">
                        {{{Button
                           buttonClass="profile__edit-button"
                           id="edit-button"
                           type="button" 
                        }}}
                        {{{AvatarInput}}}
                    </div>                  
                    <ul class="profile__box">
                       {{{InputBlock
                          ref="email"
                          type="email"
                          name="profile-email"
                          id="profile-email"
                          placeholder="почта"
                          content="Почта"
                          onInput=onInput
                          onFocus=onFocus
                          onBlur=onBlur
                       }}} 
                       {{{InputBlock
                          ref="login"
                          type="text"
                          name="profile-login"
                          id="profile-login"
                          placeholder="Логин"
                          content="Логин"
                          onInput=onInput
                          onFocus=onFocus
                          onBlur=onBlur
                       }}}
                       {{{InputBlock
                          ref="first-name"
                          type="text"
                          name="profile-first_name"
                          id="profile-first_name"
                          placeholder="Имя"
                          content="Имя"
                          onInput=onInput
                          onFocus=onFocus
                          onBlur=onBlur
                       }}}
                       {{{InputBlock
                          ref="second-name"
                          type="text"
                          name="profile-second_name"
                          id="profile-second_name"
                          placeholder="Фамилия"
                          content="Фамилия"
                          onInput=onInput
                          onFocus=onFocus
                          onBlur=onBlur
                       }}}
                       {{{InputBlock
                          ref="display-name"
                          type="text"
                          name="profile-display_name"
                          id="profile-display_name"
                          placeholder="Имя в чате"
                          content="Имя в чате"
                          onInput=onInput
                          onFocus=onFocus
                          onBlur=onBlur
                       }}}  
                       {{{InputBlock
                         ref="tel"
                         type="tel"
                         name="profile-tel"
                         id="profile-tel"
                         placeholder="Телефон"
                         content="Телефон"
                         onInput=onInput
                         onFocus=onFocus
                         onBlur=onBlur
                       }}}                   
                    </ul>
                    {{{Button
                       buttonClass="button"
                       id="put-button"
                       type="submit"
                       content="Сохранить"
                    }}}
                </form>
                {{{Button
                   buttonClass="button"
                   id="password-button"
                   type="button" 
                   content="Изменить пароль"
                }}}
            </div>
        {{/Layout}}
    `;
    }
}