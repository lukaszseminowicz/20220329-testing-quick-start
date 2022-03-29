/**
 * Rozważmy przykład, w którym zawsze otrzymujemy aktualny czas (gg:mm:ss)
 * i chcemy przetestować funkcję: `shoutBannerFor`.
 *
 * Jednak nie mamy wyodrębnionej zależności pobierania czasu dla `shoutBannerFor`.
 * Moduł `210-time-module.js` dostarcza nam czas w odpowiednim formacie.
 *
 * Dla potrzeb tego przykładu, zamiast przebudowywać implementację `shoutBannerFor`
 * Zrobimy wstęp do "test doubles" i będziemy mockować zachowanie funkcji `time()` zwracając
 * spreparowany przez nas (na potrzeby testu) czas.
 *
 * Żeby zrozumieć naturę problemu, musisz zobaczyć implementację `shoutBannerFor`.
 * Jest ona zależna od zaimportowanej wewnątrz modułu funkcji `time()` z modułu: `210-time-module.js`.
 *
 * W tym układzie powstaje problem. Ponieważ generowanie banneru jest zależne od działania `time()`.
 * Nie możemy dokładnie określić, jak będzie wyglądał "banner" - który chcemy testować?
 * */
/*
// Odkomentuj ten blok aby sprawdzić zachowanie mock'owania całego modułu:
jest.mock('./210-time-module', () => ({
  // mock the .time() implementation:
  time: jest.fn(() => '11:02:56'),
}));
*/
import { shoutBannerFor } from './210-to-test-module.js';

describe('210 - how to stub any module', () => {
  it('should present banner with proper text', () => {
    const product = 'tomatoes';
    const price = 0.99;

    const banner = shoutBannerFor(product, price);

    // W tym celu możemy użyć tylko toMatch, prawda?
    // Tylko czas się zmienia — więc taka asercja to działa
    expect(banner).toMatch(
      /Welcome, today's (.*) promotion is: tomatoes for 0.99/
    );

    // Jednak nie możemy sprawdzić dokładnie działania z .time() !
  });

  // A jeśli zamokujemy implementację .time() i sprawdzimy cały ciąg znaków?
  it('should present banner with proper text', () => {
    const product = 'bananas';
    const price = 2.65;

    const banner = shoutBannerFor(product, price);

    expect(banner).toBe(
      "Welcome, today's (11:02:56) promotion is: bananas for 2.65"
    );
  });

  // Możemy użyć .mockImplementation per test — co jest świetne.
  // Jednak musisz uważać na kolejność testów lub umieścić ją w beforeEach()
  // aby zapewnić implementację dla każdego testu.
  // Inna sprawa, że ten zapis nie zadziała — jeśli już gdzieś wyżej importujemy faktyczny moduł.

  it('should be able to mock some other value for other test', async () => {
    const { time } = await import('./210-time-module.js');
    time.mockImplementation(() => '08:23:11');

    const product = 'bananas';
    const price = 2.65;

    const banner = shoutBannerFor(product, price);

    expect(banner).toBe(
      "Welcome, today's (08:23:11) promotion is: bananas for 2.65"
    );
  });
});
