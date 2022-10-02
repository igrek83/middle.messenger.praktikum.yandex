import handlebars from "handlebars";
import './list-users.scss'
import {userItemTmp} from "../../components/user-item/user-item.tmp";

const data = {
    listUsers: [
        {
            user: 'Пользователь 1'
        },
        {
            user: 'Пользователь 2'
        },
        {
            user: 'Пользователь 3'
        },
        {
            user: 'Пользователь 4'
        },
        {
            user: 'Пользователь 5'
        },
        {
            user: 'Пользователь 6'
        },
        {
            user: 'Пользователь 7'
        },
        {
            user: 'Пользователь 8'
        },
        {
            user: 'Пользователь 9'
        },
        {
            user: 'Пользователь 10'
        },
        {
            user: 'Пользователь 11'
        },
        {
            user: 'Пользователь 12'
        },
    ],
}

const list = `<div class="list-users">
                    <ul class="list-users__block">
                        {{#each listUsers }}
                            {{>user-item this}}
                        {{/each}}
                    </ul>
                </div>`

const template = handlebars.compile(list);
export const listUsers = template(data);