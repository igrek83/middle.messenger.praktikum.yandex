import { home } from "./pages/home/home.tmp";
import {chates} from "./pages/chates/chates.tmp";
import { profile } from "./pages/profile/profile.tpm";
import {notFound} from "./pages/not-found/not-found.tmp";
import {serverErrors} from "./pages/server-errors/server-errors.tmp";
import PopupComponent from "./utils/PopupComponent";
import './assets/styles/index.scss'

const root = document.body;
const path = window.location.pathname;

switch (path) {
    case '/':
        root.innerHTML = home;
        document.querySelector('title').textContent = "Главная";
        document.querySelector('#home-link').classList.add('nav-link_theme_active');
        break;
    case '/chates':
        root.innerHTML = chates;
        document.querySelector('title').textContent = "Список чатов";
        document.querySelector('#chates-link').classList.add('nav-link_theme_active');
        break;
    case '/profile':
        root.innerHTML = profile;
        document.querySelector('title').textContent = "Настройки пользователя";
        document.querySelector('#profile-link').classList.add('nav-link_theme_active');
        break;
    case '/server-errors':
        root.innerHTML = serverErrors;
        document.querySelector('#server-errors').classList.add('nav-link_theme_active');
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