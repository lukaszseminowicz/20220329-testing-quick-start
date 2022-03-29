import { Component } from '../framework/Component';

export class ProductListItem extends Component {
  constructor({ product, onAddToCart }) {
    super();
    this.props = { product, onAddToCart };
    this.className = 'card';
  }
  render() {
    const { product, onAddToCart } = this.props;
    const { name, value, imgUrl } = product;
    this.innerHTML = `
		  <div class="card-image">
        <figure class="image is-4by3">
          <img src="${imgUrl}" alt="${name}" >
        </figure>
      </div>
      <div class="card-content">
        <p class="title">${name}</p>
        <div class="content">${value} zł</div>
        <button
          class="button is-info is-small"
        >
          Add to cart
        </button>
      </div>
		`;
    this.querySelector('button').addEventListener('click', () =>
      onAddToCart(product)
    );
  }
}

customElements.define('app-product-list-item', ProductListItem);
