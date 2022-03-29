import { Component } from '../framework/Component';
import { ProductListItem } from './ProductListItem';

export class ProductList extends Component {
  constructor(productsService, cartService) {
    super();
    this.productsService = productsService;
    this.cartService = cartService;
    this.className = 'columns is-flex-wrap-wrap';
  }
  render() {
    const divs = [];
    const onAddToCart = product => {
      this.cartService.addToCart(product);
    };
    for (const product of this.productsService.getAll()) {
      const $div = document.createElement('div');

      $div.className =
        'column is-full-mobile is-half-tablet is-one-third-widescreen';
      $div.appendChild(new ProductListItem({ product, onAddToCart }));
      divs.push($div);
    }
    super.render(divs);
  }
}

customElements.define('app-product-list', ProductList);
