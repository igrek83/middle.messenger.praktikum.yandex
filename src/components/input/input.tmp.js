import handlebars from 'handlebars';
import './input.scss';

export const inputTmp = `<li class={{ blockClass }}>
     <label for={{ id }} class={{ labelClass }}>{{ content }}</label>
     <input type={{ type }} id={{ id }} name={{ id }} class={{ inputClass }}>
   </li>`

handlebars.registerPartial('input', inputTmp);

