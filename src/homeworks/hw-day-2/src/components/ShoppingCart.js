import { Component } from '../framework/Component';
import { ShoppingCartItem } from './ShoppingCartItem';

export class ShoppingCart extends Component {
  constructor(cartService) {
    super();
    this.cartService = cartService;
    this.cartService.subscribe(() => {
      this.render();
    });
  }
  render() {
    this.innerHTML = `
       <aside class="menu">
        <p class="menu-label">Shopping cart</p>
        <ul class="menu-list" data-list>
        <!-- Here the ShoppingCartItem (depend on getAll() items) will be placed -->
        </ul>
      </aside>
    `;
    const $list = this.querySelector('[data-list]');
    this.cartService.getAll().forEach(cartItem => {
      $list.append(new ShoppingCartItem(cartItem));
    });
  }
}

customElements.define('app-shopping-cart', ShoppingCart);
