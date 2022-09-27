import { Block } from "utils";
import './server-error.scss';

export class ServerErrorPage extends Block {
    static componentName = "ServerError";
    // language=hbs
    render() {
        return `
           {{#Layout name="ServerError" }}
               <div class="server-error">
                   <h1 class="server-error__title">502</h1>
                   <span class="server-error__span">Простите, произошла ошибка</span>
                   <p class="server-error__description">Попробуйте обновить страницу, вернуться на шаг назад или перейти на другую страницу</p>
               </div>
           {{/Layout}}    
    `;
    }
}