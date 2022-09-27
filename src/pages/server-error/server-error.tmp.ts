import {regForm} from "../../modules/forms/reg-form/reg-form.tmp";
import {authForm} from "../../modules/forms/auth-form/auth-form.tmp";
import {headerTemplate} from "../../components/header/header.tmp";
import './server-error.scss';

export const serverErrors = `<div class="page" id="root">
    ${regForm}
    ${authForm}
    ${headerTemplate}
    <main class="content">
        <div class="server-errors">
            <h1 class="server-errors__title">502</h1>
            <span class="server-errors__span">Простите, произошла ошибка</span>
            <p class="server-errors__description">Попробуйте обновить страницу, вернуться на шаг назад или перейти на другую страницу</p>
        </div>
    </main>
</div>`