import {regForm} from "../../modules/forms/reg-form/reg-form.tmp";
import {authForm} from "../../modules/forms/auth-form/auth-form.tmp";
import {headerTemplate} from "../../modules/header/header.tmp";

export const home = `<div class="page" id="root">
    ${regForm}
    ${authForm}
    ${headerTemplate}
    <main class="content">
        <div class="content__home-block">
            <h1 class="content__home-title">Мессенжер</h1>
            <p class="content__home-description">Какое то описание</p>
        </div>
    </main>
</div>`