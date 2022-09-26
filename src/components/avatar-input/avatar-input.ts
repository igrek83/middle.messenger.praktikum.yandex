import { Block } from "utils";
import './avatar-input.scss';

interface AvatarProps {
    type?: 'button' | 'submit';
    id?: string;
    buttonClass?: string;
    content: String;
}

export class AvatarInput extends Block {
    static componentName = "AvatarInput";
    constructor(props: AvatarProps) {
        super({...props});
    }

    protected render(): string {
        return `
           <div class="avatar">
              <input type="file" id="avatar" name="avatar" class="avatar__input">
              <label for="avatar" class="avatar__input-label"></label>
           </div>
        `
    }
}