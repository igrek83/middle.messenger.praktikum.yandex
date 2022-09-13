import {regForm} from "../../modules/forms/reg-form/reg-form.tmp";
import {authForm} from "../../modules/forms/auth-form/auth-form.tmp";
import {headerTemplate} from "../../modules/header/header.tmp";

export const chates = `
   <div class="page" id="root">
        ${regForm}
        ${authForm}
        ${headerTemplate}
   </div>
`