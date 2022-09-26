import { Block } from "utils";
import './button.scss';

interface ButtonProps {
    type?: 'button' | 'submit';
    id?: string;
    buttonClass?: string;
    content: String;
}

export class Button extends Block {
    static componentName = "Button";
    constructor(props: ButtonProps) {
        super({...props});
    }

    protected render(): string {
        return `
          <button type={{ type }} id={{ id }} class={{ buttonClass }}>{{ content }}</button>
        `
    }
}