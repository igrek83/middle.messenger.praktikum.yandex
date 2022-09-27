import { Block } from "utils";
import './user-error.scss';

export class UserErrorPage extends Block {
    static componentName = "UserError";
    // language=hbs
    render() {
        return `
           {{#Layout name="UserError" }}
               <div class="user-error">
                   <h1 class="user-error__title">404</h1>
                   <span class="user-error__span">Простите, произошла ошибка</span>
                   <p class="user-error__description">Попробуйте обновить страницу, вернуться на шаг назад или перейти на другую страницу</p>
               </div>
           {{/Layout}}    
    `;
    }
}