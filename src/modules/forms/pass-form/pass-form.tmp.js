import handlebars from "handlebars";
import {inputOptions} from "../../../utils/inputOptions";
import {inputTmp} from "../../../components/input/input.tmp";
import {buttonTmp} from "../../../components/button/button.tmp";
import {titleFormTmp} from "../../../components/title-form/title-form.tmp";
import '../forms.scss';

const data = {
    nameForm: {
        spanClass: 'title-form',
        content: 'Изменить пароль',
    },
    closeButton: {
        buttonClass: 'close-button',
        type: 'button',
        id: 'close-pass-button',
    },
    submitButton: {
        buttonClass: 'button',
        id: 'pass-submit-button',
        type: 'submit',
        content: 'Отправить',
    },
    inputArray: [
        inputOptions('old-password', 'password', 'Старый пароль'),
        inputOptions('new-password', 'password', 'новый пароль'),
        inputOptions('second-new-password', 'password', 'новый пароль'),
    ],
}

const form = `<div id="pass-form" class="form">
                <form name="pass-form" class="form__container">
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
export const passForm = template(data);