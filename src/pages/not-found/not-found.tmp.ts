import {regForm} from "../../modules/forms/reg-form/reg-form.tmp";
import {authForm} from "../../modules/forms/auth-form/auth-form.tmp";
import {headerTemplate} from "../../modules/header/header.tmp";
import './not-found.scss';

export const notFound = `<div class="page" id="root">
    ${regForm}
    ${authForm}
    ${headerTemplate}
    <main class="content">
        <div class="not-found">
            <h1 class="not-found__title">404</h1>
            <span class="not-found__span">Простите, произошла ошибка</span>
            <p class="not-found__description">Попробуйте обновить страницу, вернуться на шаг назад или перейти на другую страницу</p>
        </div>
    </main>
</div>`