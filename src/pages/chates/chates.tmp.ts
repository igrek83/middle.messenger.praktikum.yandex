import {regForm} from "../../modules/forms/reg-form/reg-form.tmp";
import {authForm} from "../../modules/forms/auth-form/auth-form.tmp";
import {headerTemplate} from "../../components/header/header.tmp";
import {listUsers} from "../../modules/list-users/list-users.tmp";
import {listMessages} from "../../modules/list-messages/list-messages";
import './chates.scss';

export const chates = `
   <div class="page" id="root">
        ${regForm}
        ${authForm}
        ${headerTemplate}
        <main class="content">
           <div class="chates">
                ${listUsers}
                <div class="chates__right-block">
                    <div class="chates__top-right-block">
                        <div class="chates__user-block">
                            <span class="chates__user-block-avatar"></span>
                            <span class="chates__user-name">Вадим</span>
                        </div>                 
                    </div>
                    ${listMessages}
                    <div class="chates__bottom-right-block">
                        <input type="file" id="file-message-input" name="file-message-input" class="chates__file-input">
                        <label for="file-message-input" class="chates__file-input-label"></label>
                        <input type="text" id="message" name="message" class="chates__input">
                        <button type="button" id="message-button" class="chates__button">
                            <span class="chates__arrow"></span>
                        </button>
                    </div>
                </div>
            </div>
        </main>
   </div>
`

