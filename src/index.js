import { home } from "./pages/home/home.tmp";
import {chates} from "./pages/chates/chates.tmp";
import { profile } from "./pages/profile/profile.tpm";
import {notFound} from "./pages/not-found/not-found.tmp";
import PopupComponent from "./utils/PopupComponent";
import './assets/styles/index.scss'

const root = document.body;
const path = window.location.pathname;

switch (path) {
    case '/':
        root.innerHTML = home;
        document.querySelector('title').textContent = "Главная";
        break;
    case '/chates':
        root.innerHTML = chates;
        document.querySelector('title').textContent = "Список чатов";
        break;
    case '/profile':
        root.innerHTML = profile;
        document.querySelector('title').textContent = "Настройки пользователя";
        break;
    default:
        root.innerHTML = notFound;
}

new PopupComponent(
    document.querySelector('#reg-button'), document.querySelector('#reg-form')
);
new PopupComponent(
    document.querySelector('#auth-button'), document.querySelector('#auth-form')
);

if (window.location.pathname === '/profile') {
    new PopupComponent(
        document.querySelector('#password-button'), document.querySelector('#pass-form')
    )
}