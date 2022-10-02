import { Block } from 'utils'
import './nav-link.scss'

interface NavLinkProps {
  to?: string
  id?: string
  content?: string
}

export class NavLink extends Block {
  static componentName = 'NavLink'
  constructor ({ to, id, content }: NavLinkProps) {
    super({ to, id, content })
  }

  protected render (): string {
    return `
          <a href={{ to }} id={{ id }} class="nav-link">{{ content }}</a>
        `
  }
}
