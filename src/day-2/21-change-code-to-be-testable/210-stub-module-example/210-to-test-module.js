import { time } from './210-time-module.js';

export function shoutBannerFor(product, price) {
  return `Welcome, today's (${time()}) promotion is: ${product} for ${price}`;
}
