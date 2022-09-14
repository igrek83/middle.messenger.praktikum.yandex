import {regForm} from "../../modules/forms/reg-form/reg-form.tmp";
import {authForm} from "../../modules/forms/auth-form/auth-form.tmp";
import {headerTemplate} from "../../modules/header/header.tmp";
import './home.scss'

export const home = `<div class="page" id="root">
    ${regForm}
    ${authForm}
    ${headerTemplate}
    <main class="content">
        <div class="home">
            <h1 class="home__title">Мессенжер</h1>
            <p class="home__description">Какое то описание в будущем</p>
        </div>
    </main>
</div>`