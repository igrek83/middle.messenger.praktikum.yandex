import { Block } from '../utils'
import './layout.scss'

export class Layout extends Block {
  static componentName = 'Layout'

  // language=hbs
  protected render (): string {
    return `
        <div class="page">
            {{{RegForm}}}
            {{{AuthForm}}}
            {{{PassForm}}}
            {{{PutForm}}}
            {{{Header}}}
            <main class="content" data-layout="1"></main>
        </div>
        `
  }
}
