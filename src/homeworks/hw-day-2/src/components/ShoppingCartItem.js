import { Component } from '../framework/Component';

export class ShoppingCartItem extends Component {
  constructor({ id, product, amount }) {
    super();
    this.props = { id, product, amount };
  }
  render() {
    this.innerHTML = `<li class="p-2"> ${this.props.amount}x ${this.props.product.name} </li>`;
  }
}

customElements.define('app-shopping-cart-item', ShoppingCartItem);
