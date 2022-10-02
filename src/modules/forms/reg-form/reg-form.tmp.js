import handlebars from "handlebars";
import {inputOptions} from "../../../utils/inputOptions";
import {inputTmp} from "../../../components/input/input.tmp";
import {buttonTmp} from "../../../components/button/button.tmp";
import {titleFormTmp} from "../../../components/title-form/title-form.tmp";
import '../forms.scss';

const data = {
    nameForm: {
        spanClass: 'title-form',
        content: 'Зарегистрироваться',
    },
    closeButton: {
        buttonClass: 'close-button',
        type: 'button',
        id: 'close-reg-button',
    },
    submitButton: {
        buttonClass: 'button',
        id: 'reg-submit-button',
        type: 'submit',
        content: 'Отправить',
    },
    inputArray: [
        inputOptions('email', 'email', 'Почта'),
        inputOptions('login', 'text', 'Логин'),
        inputOptions('first_name', 'text', 'Имя'),
        inputOptions('second_name', 'text', 'Фамилия'),
        inputOptions('tel', 'tel', 'Телефон'),
        inputOptions('password', 'password', 'Пароль'),
    ],
}

const form = `<div id="reg-form" class="form">
                <form name="reg-form" class="form__container">
                    {{>button closeButton }}
                    {{>title-form nameForm }}
                    <div class="form__box">
                        {{#each inputArray }}
                            {{>input this}}
                        {{/each}}
                    </div>
                    {{>button submitButton }}
                </form>
              </div>`

const template = handlebars.compile(form);
export const regForm = template(data);