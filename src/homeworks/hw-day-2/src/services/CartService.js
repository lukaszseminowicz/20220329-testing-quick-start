export class CartService {
  subscribers = [];

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
    return [];
  }

  getCount() {
    return 0;
  }

  getValue() {
    return 0;
  }

  addToCart(product) {
    console.log(product);
    // add some logic here

    // This must be here (after cart state update)
    this.broadcast();
  }
}
