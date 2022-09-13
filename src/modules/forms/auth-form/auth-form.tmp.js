import handlebars from "handlebars";
import {inputOptions} from "../../../utils/inputOptions";
import {inputTmp} from "../../../components/input/input.tmp";
import {buttonTmp} from "../../../components/button/button.tmp";
import {titleFormTmp} from "../../../components/title-form/title-form.tmp";
import '../forms.scss';

const data = {
    nameForm: {
        spanClass: 'title-form',
        content: 'Войти',
    },
    closeButton: {
        buttonClass: 'close-button',
        type: 'button',
        id: 'close-auth-button',
    },
    submitButton: {
        buttonClass: 'button',
        id: 'auth-submit-button',
        type: 'submit',
        content: 'Отправить',
    },
    inputArray: [
        inputOptions('auth-login', 'text', 'Логин'),
        inputOptions('auth-password', 'password', 'Пароль'),
    ],
}

const form = `<div id="auth-form" class="form">
                <form name="auth-form" class="form__container">
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
export const authForm = template(data);