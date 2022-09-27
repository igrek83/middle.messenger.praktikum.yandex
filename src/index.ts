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
import MessageItem from "./components/message-item";
import UserItem from "./components/user-item";
import HomePage from "./pages/home";
import ChatesPage from "./pages/chates";
import ProfilePage from "./pages/profile";
import UserErrorPage from "./pages/user-error";
import ServerErrorPage from "./pages/server-error";

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
registerComponent(MessageItem);
registerComponent(UserItem);

const listUsers = [
    {
        name: 'dfgdfg',
        time: '22:15',
        content: 'xnj nj j xtv nj xnj nj j xtv nj xnj nj j xtv nj xnj nj j xtv nj xnj nj j xtv nj xnj nj j xtv nj',
        counter: 3,
    },
    {
        name: 'dfgdfg',
        time: '22:15',
        content: 'xnj nj j xtv nj xnj nj j xtv nj xnj nj j xtv nj xnj nj j xtv nj xnj nj j xtv nj xnj nj j xtv nj',
        counter: 3,
    },
    {
        name: 'dfgdfg',
        time: '22:15',
        content: 'xnj nj j xtv nj xnj nj j xtv nj xnj nj j xtv nj xnj nj j xtv nj xnj nj j xtv nj xnj nj j xtv nj',
        counter: 3,
    },
    {
        name: 'dfgdfg',
        time: '22:15',
        content: 'xnj nj j xtv nj xnj nj j xtv nj xnj nj j xtv nj xnj nj j xtv nj xnj nj j xtv nj xnj nj j xtv nj',
        counter: 3,
    },
]

const listMessages = [
    {
        time: '22:15',
        content: 'xnj nj j xtv nj xnj nj j xtv nj xnj nj j xtv nj xnj nj j xtv nj xnj nj j xtv nj xnj nj j xtv nj',
    },
    {
        time: '22:15',
        content: 'xnj nj j xtv nj xnj nj j xtv nj xnj nj j xtv nj xnj nj j xtv nj xnj nj j xtv nj xnj nj j xtv nj',
    },
    {
        time: '22:15',
        content: 'xnj nj j xtv nj xnj nj j xtv nj xnj nj j xtv nj xnj nj j xtv nj xnj nj j xtv nj xnj nj j xtv nj',
    },
    {
        time: '22:15',
        content: 'xnj nj j xtv nj xnj nj j xtv nj xnj nj j xtv nj xnj nj j xtv nj xnj nj j xtv nj xnj nj j xtv nj',
    },
]

document.addEventListener("DOMContentLoaded", () => {
    const path = window.location.pathname;
    const title: HTMLElement = document.querySelector('title')!;
    const Home = new HomePage();
    const Chates = new ChatesPage({listUsers, listMessages});
    const Profile = new ProfilePage();
    const UserError = new UserErrorPage();
    const ServerError = new ServerErrorPage();
    switch (path) {
        case '/':
            renderDOM(Home);
            title.textContent = "Главная";
            break
        case '/chates':
            renderDOM(Chates);
            title.textContent = "Список чатов";
            break
        case '/profile':
            renderDOM(Profile);
            title.textContent = "Настройки пользователя";
            break
        case '/server-error':
            renderDOM(ServerError);
            title.textContent = "Ошибка 502";
            break;
        default:
            renderDOM(UserError);
            title.textContent = "Ошибка 404";
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
    case '/server-error':
        root.innerHTML = serverErrors;
        document.querySelector('#server-error').classList.add('nav-link_theme_active');
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
