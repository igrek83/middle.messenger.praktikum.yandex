import { Block } from "utils";
import './home.scss';

export class HomePage extends Block {
    static componentName = "Home";
    // language=hbs
    render() {
        return `
           {{#Layout name="HomePage" }}
               <div class="home"> 
                  <h1 class="home__title">Мессенжер</h1>
                  <p class="home__description">Какое то описание в будущем</p>
               </div>
           {{/Layout}}    
    `;
    }
}