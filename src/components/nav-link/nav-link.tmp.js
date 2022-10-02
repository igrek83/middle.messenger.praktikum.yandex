import handlebars from 'handlebars';
import './nav-link.scss';

export const navLinkTmp = `<a href={{ to }} id={{id}} class="nav-link">{{ content }}</a>`

handlebars.registerPartial('nav-link', navLinkTmp);