import { Block } from 'utils';
import './input-error.scss';


export class InputError extends Block {
    static componentName = "InputError";
    constructor(error: string) {
        super(error);
    }

    protected render(): string {
        return `
           <span class="input-error">{{#if error}}{{error}}{{/if}}</span>
        `
    }
}