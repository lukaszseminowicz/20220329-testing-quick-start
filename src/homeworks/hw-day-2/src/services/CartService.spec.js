import {CartService} from './CartService';

describe('Cart Service', () => {
    let cartService;
    beforeEach(() => {
        cartService = new CartService();
    });

    it('should should be ...', () => {
        const addFirstItem = cartService.addToCart({id: 2, name: 'Raspberries', value: 20.22, imgUrl: 'https://picsum.photos/id/102/800/600'});
        // const addSecondItem = cartService.addToCart({id: 4, name: 'Smartphone', value: 452.99, imgUrl: 'https://picsum.photos/id/3/800/600'});
        const allItems = cartService.getAll();
        expect(allItems).toEqual([{"amount": 1, "id": 2, "product": {"name": "Raspberries"}, "value": 20.22}]);
      });
});