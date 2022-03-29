export class Component extends HTMLElement {
  props = {};

  connectedCallback() {
    this.render();
  }

  render($domTree = []) {
    const computedDomTree = Array.isArray($domTree) ? $domTree : [$domTree];
    this.innerHTML = '';
    this.append(...computedDomTree);
  }
}
