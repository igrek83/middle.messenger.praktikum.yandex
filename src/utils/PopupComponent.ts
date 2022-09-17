import BaseComponent from './BaseComponent';

export default class PopupComponent extends BaseComponent {
    constructor(button, container) {
        super();
        this.button = button;
        this.container = container;
        this._setHandlers([
            {
                element: this.button,
                event: 'click',
                callback: this.#openPopup,
            },
            {
                element: this.container.querySelector('.close-button'),
                event: 'click',
                callback: this.#closePopup,
            },
        ]);
    }
    #closePopup() {
        this.container.classList.remove('form_theme_opacity');
        setTimeout(() => {
            this.container.classList.remove('form_is_opened');
        }, 500)
    }
    #openPopup() {
        this.container.classList.add('form_is_opened');
        setTimeout(() => {
            this.container.classList.add('form_theme_opacity');
        }, 1)
    }
}