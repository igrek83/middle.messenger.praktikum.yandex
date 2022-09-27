import { Block } from 'utils';
import './chates.scss';

interface ChatesProps {
    listUsers: Array<{name: string, time: string, content: string, counter: number}>
    listMessages: Array<{time: string; content: string;}>
}

export class ChatesPage extends Block {
    static componentName = "ChatesPage";

    constructor(props: ChatesProps) {
        super({...props})
    }

    protected render(): string {
        // language=hbs
        return `
            {{#Layout name="ChatesPage" }}
                <div class="chates">
                    <div class="chates__list-users">
                        <ul class="chates__list-users-block">
                            {{#each listUsers}}
                                {{#with this}}
                                    {{{UserItem 
                                       name="{{name}}" 
                                       time="{{time}}" 
                                       content="{{content}}" 
                                       counter=counter
                                    }}}
                                {{/with}}
                            {{/each}}
                        </ul>
                    </div>
                    <div class="chates__right-block">
                        <div class="chates__top-right-block">
                            <div class="chates__user-block">
                                <span class="chates__user-block-avatar"></span>
                                <span class="chates__user-name">Вадим</span>
                            </div>
                        </div>
                        <div class="chates__list-messages">
                            <ul class="chates__list-messages-box">
                                {{#each listMessages}}
                                    {{#with this}}
                                        {{{MessageItem time="{{time}}" content="{{content}}"}}}
                                    {{/with}}
                                {{/each}}
                            </ul>
                        </div>
                        <div class="chates__bottom-right-block">
                            <input type="file" id="file-message-input" name="file-message-input" class="chates__file-input">
                            <label for="file-message-input" class="chates__file-input-label"></label>
                            <input type="text" id="message" name="message" class="chates__input">
                            <button type="button" id="message-button" class="chates__button">
                                <span class="chates__arrow"></span>
                            </button>
                        </div>
                    </div>
                </div>
            {{/Layout}}
        `
    }
}