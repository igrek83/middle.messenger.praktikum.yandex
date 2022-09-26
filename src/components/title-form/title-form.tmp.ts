import * as handlebars from 'handlebars';
import './title-form.scss';

export const titleFormTmp = `<h3 class={{ spanClass }}>{{ content }}</h3>`

handlebars.registerPartial('title-form', titleFormTmp);