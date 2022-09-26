import { Block } from "../utils";
import './layout.scss';

interface LayoutProps {}

export class Layout extends Block<LayoutProps> {
    static componentName = "Layout";
    constructor(props: LayoutProps) {
        super({
            ...props,
        })
    }

    protected render(): string {
        return `
        <div class="page">
            {{{Header}}}
            <main class="content" data-layout="1"></main>
        </div>
        `
    }
}