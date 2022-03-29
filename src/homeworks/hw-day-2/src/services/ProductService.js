const products = [
  {
    id: 1,
    name: 'Banana',
    value: 3,
    imgUrl: 'https://picsum.photos/id/1/800/600',
  },
  {
    id: 2,
    name: 'Raspberries',
    value: 20.22,
    imgUrl: 'https://picsum.photos/id/102/800/600',
  },
  {
    id: 3,
    name: 'White Table',
    value: 356.22,
    imgUrl: 'https://picsum.photos/id/1068/800/600',
  },
  {
    id: 4,
    name: 'Smartphone',
    value: 452.99,
    imgUrl: 'https://picsum.photos/id/3/800/600',
  },
  {
    id: 5,
    name: 'Old Truck',
    value: 6000,
    imgUrl: 'https://picsum.photos/id/1072/800/600',
  },
];

export class ProductService {
  getAll() {
    return products;
  }
}
