import { Component } from '../framework/Component';

export class Header extends Component {
  constructor({ title, subTitle }) {
    super();
    this.props = { title, subTitle };
  }
  render() {
    this.className = 'hero is-info';
    this.innerHTML = `
      <div class="hero-body">
        <p class="title"> ${this.props.title} </p>
        <p class="subtitle"> ${this.props.subTitle} </p>
      </div>
    `;
  }
}

customElements.define('app-header', Header);
