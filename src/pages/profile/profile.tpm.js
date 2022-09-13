import {regForm} from "../../modules/forms/reg-form/reg-form.tmp";
import {authForm} from "../../modules/forms/auth-form/auth-form.tmp";
import {headerTemplate} from "../../modules/header/header.tmp";
import {profileBlock} from "../../modules/profile/profile.tmp";
import {passForm} from "../../modules/forms/pass-form/pass-form.tmp";

export const profile = `
   <div class="page" id="root">
        ${regForm}
        ${authForm}
        ${passForm}
        ${headerTemplate}
        ${profileBlock}
   </div>
`
