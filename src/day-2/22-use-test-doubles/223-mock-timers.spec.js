// nasz "System Under Test":
function makeMoneyRefund(cb) {
  setTimeout(() => {
    cb(300);
  }, 10000);
}

/**
 *
 * Umiejętność symulacji sztucznego upływu czasu przez Testing framework
 * to genialna opcja dla Unit Testów, w których tego czasu nie mamy :).
 *
 * Przykładowo — test nie może trwać 10 sekund. To stanowczo za długo.
 * Test ma się wykonać tak szybko, jak to tylko możliwe a max. to standardowo 5 sec.
 *
 * W testowanej logice, w której mamy do czynienia z użyciem setTimeout czy setInterval...
 * Podczas testowania używamy tzw. Fake Timers
 *
 * Pozwala to dosłownie — zakrzywiać czasoprzestrzeń.
 *
 * https://jestjs.io/docs/timer-mocks
 * */

describe('timers - for makeMoneyRefund', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('should make refund after 10 seconds', () => {
    const myCallback = jest.fn();

    makeMoneyRefund(myCallback);
    // Imitujemy upływ 10 sekund....
    jest.advanceTimersByTime(10000);

    expect(myCallback).toHaveBeenCalledWith(300);
  });

  it('should make refund after no matter how many seconds...', () => {
    const myCallback = jest.fn();

    makeMoneyRefund(myCallback);
    // Niech upłynie czas wszystkich timerów - natychmiast!....
    jest.runAllTimers();

    expect(myCallback).toHaveBeenCalledWith(300);
  });
});
