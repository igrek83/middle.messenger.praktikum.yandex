import Block from './Block';

export default function renderDOM(block: Block) {
  const root = document.querySelector('body');
  
  root!.innerHTML = '';
  root!.appendChild(block.getContent());
}
