import { Block } from "utils";
import './message-item.scss';

interface MessageItemProps {
    time: String;
    content: String;
}

export class MessageItem extends Block {
    static componentName = "MessageItem";
    constructor(props: MessageItemProps) {
        super({...props});
    }

    protected render(): string {
        return `
          <li class="message-item">
             <time class="message-item__time">{{ time }}</time>
             <p class="message-item__text">{{ content }}</p>
          </li>
        `
    }
}