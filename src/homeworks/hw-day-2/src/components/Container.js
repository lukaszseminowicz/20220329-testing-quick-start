import { Component } from '../framework/Component';
import { CartService } from '../services/CartService';
import { ProductService } from '../services/ProductService';
import { ProductList } from './ProductList';
import { ShoppingCart } from './ShoppingCart';

const productService = new ProductService();
const cartService = new CartService();

export class Container extends Component {
  constructor() {
    super();
    this.itemsCount = 0;
    this.itemsValue = 0;
    cartService.subscribe(() => {
      this.itemsCount = cartService.getCount();
      this.itemsValue = cartService.getValue();
      this.render();
    });
  }

  render() {
    this.innerHTML = `
      <main class="container p-4">
        <div class="columns">
          <div class="column" data-page>
            <h3 class="title is-3">Products and occastions</h3>
            <hr>
            <div class="box has-text-right p-3">
            You got a <code>${this.itemsCount}</code> items in cart. Worth ${this.itemsValue} zł
            </div>
            <!-- Here the ProductList will be placed -->
          </div>
          <div class="column is-one-fifth-tablet is-full-mobile mt-6" data-cart>
            <!-- Here the ShoppingCart will be placed -->
          </div>
        </div>
      </main>
    `;
    const $dataPage = this.querySelector('[data-page]');
    $dataPage.append(new ProductList(productService, cartService));
    const $cartPage = this.querySelector('[data-cart]');
    $cartPage.append(new ShoppingCart(cartService));
  }
}

customElements.define('app-container', Container);
