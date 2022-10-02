import handlebars from "handlebars";
import {inputOptions} from "../../utils/inputOptions";
import {inputTmp} from "../../components/input/input.tmp";
import {buttonTmp} from "../../components/button/button.tmp";
import {avatarInputTmp} from "../../components/avatar-input/avatar-input.tmp";
import './profile.scss';

const data = {
    editButton: {
        buttonClass: 'profile__edit-button',
        id: 'edit-button',
        type: 'button',
    },
    passwordButton: {
        buttonClass: 'button',
        type: 'button',
        id: 'password-button',
        content: 'Изменить пароль',
    },
    submitButton: {
        buttonClass: 'button',
        id: 'put-button',
        type: 'submit',
        content: 'Сохранить',
    },
    inputArray: [
        inputOptions('profile-email', 'email', 'Почта'),
        inputOptions('profile-login', 'text', 'Логин'),
        inputOptions('profile-first_name', 'text', 'Имя'),
        inputOptions('profile-second_name', 'text', 'Фамилия'),
        inputOptions('display_name', 'text', 'Имя в чате'),
        inputOptions('profile-tel', 'tel', 'Телефон'),
    ],
}

const profile = `<div class="profile">
                <form name="put-form" class="profile__form">
                    <div class="profile__avatar-block">
                        {{> button editButton }}
                        {{> avatar-input }}
                    </div>                  
                    <ul class="profile__box">
                        {{#each inputArray }}
                            {{>input this}}
                        {{/each}}
                    </ul>
                    {{>button submitButton }}
                </form>
                {{>button passwordButton }}
              </div>`

const template = handlebars.compile(profile);
export const profileBlock = template(data);