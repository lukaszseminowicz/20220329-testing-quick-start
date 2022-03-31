export class CartService {
  subscribers = [];
  cartItems = [];

  subscribe(callback = () => {}) {
    this.subscribers.push(callback);
  }

  broadcast() {
    console.log('Cart update broadcast !');
    for (const callback of this.subscribers) {
      callback();
    }
  }

  getAll() {
    return this.cartItems;
  }

  getCount() {
    return this.cartItems.length;
  }

  getValue() {
    let value = 0;
    for (const item of this.cartItems) {
      value += item.value;
    }
    return value;
  }

  addToCart(product) {
    console.log(product);
    this.cartItems.push({
      id: product.id,
      product: { name:product.name },
      amount: 1, // TODO
      value: product.value
    });
    // This must be here (after cart state update)
    this.broadcast();
  }
}
