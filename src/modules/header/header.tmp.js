import handlebars from "handlebars";
import {buttonTmp} from "../../components/button/button.tmp";
import {navLinkTmp} from "../../components/nav-link/nav-link.tmp";
import './header.scss';

const data = {
    navLinkArray: [
        {
            to: '/',
            id: 'home-link',
            content: 'Главная',
        },
        {
            to: '/chates',
            id: 'chates-link',
            content: 'Список чатов',
        },
        {
            to: '/profile',
            id: 'profile-link',
            content: 'Настройки пользователя',
        },
        {
            to: '/server-errors',
            id: 'server-errors',
            content: 'Ошибка сервера',
        },
    ],
    regButton: {
        buttonClass: 'button',
        type: 'button',
        id: 'reg-button',
        content: 'Зарегистрироваться',
    },
    authButton: {
        buttonClass: 'button',
        id: 'auth-button',
        type: 'submit',
        content: 'Войти',
    },
}

const header =  `<header class="header">
                    <nav class="header__nav">
                        {{#each navLinkArray }}
                            {{>nav-link this}}
                        {{/each}}
                    </nav>
                    <div class="header__block">
                        {{>button regButton }}
                        {{>button authButton }}
                    </div>           
                </header>`

const template = handlebars.compile(header);
export const headerTemplate = template(data);