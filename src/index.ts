import './assets/styles/index.scss'
import { listUsers } from './assets/stubs/list-users'
import { listMessages } from './assets/stubs/list-messages'

import Layout from './layout'
import NavLink from 'components/nav-link'
import Header from 'components/header'
import Button from './components/button'
import AvatarInput from './components/avatar-input'
import InputBlock from './components/input-block'
import InputLabel from './components/input-label'
import Input from './components/input'
import InputError from './components/input-error'
import MessageItem from './components/message-item'
import UserItem from './components/user-item'
import RegForm from './components/forms/reg-form'
import AuthForm from './components/forms/auth-form'
import PassForm from './components/forms/pass-form'
import PutForm from './components/forms/put-form'
import HomePage from './pages/home'
import ChatesPage from './pages/chates'
import ProfilePage from './pages/profile'
import UserErrorPage from './pages/user-error'
import ServerErrorPage from './pages/server-error'

import { renderDOM, registerComponent } from './utils'

registerComponent(Layout)
registerComponent(Header)
registerComponent(NavLink)
registerComponent(Button)
registerComponent(AvatarInput)
registerComponent(InputBlock)
registerComponent(InputLabel)
registerComponent(Input)
registerComponent(InputError)
registerComponent(MessageItem)
registerComponent(UserItem)
registerComponent(RegForm)
registerComponent(AuthForm)
registerComponent(PassForm)
registerComponent(PutForm)

document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname
  const title: HTMLElement = document.querySelector('title')!
  const Home = new HomePage()
  const Chates = new ChatesPage({ listUsers, listMessages })
  const Profile = new ProfilePage()
  const UserError = new UserErrorPage()
  const ServerError = new ServerErrorPage()
  switch (path) {
    case '/':
      renderDOM(Home)
      title.textContent = 'Главная'
      // @ts-ignore
      document.querySelector('#home-link').classList.add('nav-link_theme_active');
      break
    case '/chates':
      renderDOM(Chates)
      title.textContent = 'Список чатов'
      // @ts-ignore
      document.querySelector('#chates-link').classList.add('nav-link_theme_active');
      break
    case '/profile':
      renderDOM(Profile)
      title.textContent = 'Настройки пользователя'
      // @ts-ignore
      document.querySelector('#profile-link').classList.add('nav-link_theme_active');
      break
    case '/server-error':
      renderDOM(ServerError)
      title.textContent = 'Ошибка 502'
      break
    default:
      renderDOM(UserError)
      title.textContent = 'Ошибка 404'
  }
})