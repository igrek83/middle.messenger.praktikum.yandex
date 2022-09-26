import { home } from "./pages/home/home.tmp";
import {chates} from "./pages/chates/chates.tmp";
import { profile } from "./pages/profile/profile.tpm";
import {notFound} from "./pages/not-found/not-found.tmp";
import {serverErrors} from "./pages/server-errors/server-errors.tmp";
import PopupComponent from "./utils/PopupComponent";
import './assets/styles/index.scss'



import Layout from "./layout";
import NavLink from "components/nav-link";
import Header from "components/header";
import Button from "./components/button";
import AvatarInput from "./components/avatar-input";
import InputBlock from "./components/input-block";
import InputLabel from "./components/input-label";
import Input from "./components/input";
import InputError from "./components/input-error";
import HomePage from "./pages/home";
import ProfilePage from "./pages/profile";

import {renderDOM, registerComponent } from "./utils";

registerComponent(Layout);
registerComponent(Header);
registerComponent(NavLink);
registerComponent(Button);
registerComponent(AvatarInput);
registerComponent(InputBlock);
registerComponent(InputLabel);
registerComponent(Input);
registerComponent(InputError);

document.addEventListener("DOMContentLoaded", () => {
    const path = window.location.pathname;
    const title: HTMLElement = document.querySelector('title');
    const Home = new HomePage();
    const Profile = new ProfilePage();
    switch (path) {
        case '/':
            renderDOM(Home);
            title.textContent = "Главная";
            break
        case '/profile':
            renderDOM(Profile);
            title.textContent = "Настройки пользователя";
            break
    }
});




/*
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

 */
