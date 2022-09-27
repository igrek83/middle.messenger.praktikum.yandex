import { Block } from "utils";
import './user-item.scss';

interface UserItemProps {
    name: String;
    time: String;
    content: String;
    counter: Number;
}

export class UserItem extends Block {
    static componentName = "UserItem";
    constructor(props: UserItemProps) {
        super({...props});
    }

    protected render(): string {
        return `
           <li class="user-item">
              <span class="user-item__avatar"></span>
              <div class="user-item__block">
                 <div class="user-item__box">
                    <span class="user-item__user">{{ name }}</span>
                    <span class="user-item__message">{{ content }}</span>
                 </div>
                 <div class="user-item__box">
                     <time class="user-item__time">{{ time }}</time>
                     <span class="user-item__counter">{{ counter }}</span>
                 </div>
              </div>
           </li>
        `
    }
}