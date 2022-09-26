import { Block } from 'utils';

import './input-label.scss';

interface InputLabelProps {
    for: String,
    content?: string,
}

export class InputLabel extends Block<InputLabelProps> {
    static componentName = "InputLabel";
    constructor(props: InputLabelProps) {
        super({...props})
    }

    protected render(): string {
        // language=hbs
        return `
      <span for="{{for}}" class="input-label">{{content}}</span>
    `
    }
}