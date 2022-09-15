import handlebars from 'handlebars';
import './message-item.scss';

export const messageItemTmp = `<li class="message-item">
                                    <time class="message-item__time">14:44</time>
                                    <p class="message-item__text">{{ text }}</p>
                                </li>`

handlebars.registerPartial('message-item', messageItemTmp);

