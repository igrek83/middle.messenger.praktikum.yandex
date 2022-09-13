import handlebars from 'handlebars';
import './button.scss';

export const buttonTmp = `<button type={{ type }} id={{ id }} class={{ buttonClass }}>{{ content }}</button>`

handlebars.registerPartial('button', buttonTmp);