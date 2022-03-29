/**
 * Do testowania używamy biblioteki "jest".
 *  https://jestjs.io/
 *  https://jestjs.io/docs/api
 *
 * Zróbmy przykład naszego pierwszego testu.
 *
 * Użyjemy do tego maksymalnie uproszczonej logiki dodawania N liczb.
 * Co możemy tutaj sprawdzić.
 *
 * - od podstawowego przypadku dodawania 2 liczb,
 * - co się stanie, gdy podamy tylko jedną liczbę,
 * - czy funkcja dobrze liczy, jeśli podamy więcej liczb,
 * - co jeśli liczby będą ujemne,
 *
 * Zwróć uwagę na to, jak jest zbudowany test.
 * To tak naprawdę wywołanie funkcji przyjmującej 2 argumenty
 *
 * test('string', () => {});
 *
 * https://jestjs.io/docs/api#testname-fn-timeout
 *
 * Mamy tam nazwę testu + callback, który wykona się za każdym razem,
 * jeśli uruchomiony zostanie ten test.
 *
 * To tzw. TEST RUNNER — zdecyduje, kiedy to nastąpi.
 *
 * Zauważ, że sama funkcja "test" pochodzi niejako "z kosmosu".
 * Nie ma jej zdefiniowanej nigdzie w tym pliku, a ni nie jest importowana.
 *
 * Testowanie ma to do siebie, że trzeba będzie się zaznajomić z API
 * do naszego TEST FRAMEWORK'a - i poznać kilka funkcji i obiektów,
 * żyjących w przestrzeni globalnej.
 *
 *
 * Hmmm a czy możesz dodać jeszcze jeden przypadek:
 * - co jeśli nie podamy żadnej liczby?
 *   fajnie, gdyby wtedy funkcja zwróciła 0.
 *
 * Do uruchomienia tego zadania użyj komendy:
 * ```
 * npm run test:warm-up-102
 * ```
 *
 * */

const sum = (a, b) => a + b;

function sumManyNumbers(...manyThings) {
  return manyThings.reduce(sum);
}

test('sum of one number is that number', () => {
  const result = sumManyNumbers(1);

  expect(result).toBe(1);
});

test('sum of 1 + 2 should be 3', () => {
  const result = sumManyNumbers(1, 2);

  expect(result).toBe(3);
});

test('sum of 1 + 2 + 90 + 100 should be 193', () => {
  const result = sumManyNumbers(1, 2, 90, 100);

  expect(result).toBe(193);
});

test('sum of -100 and -10 and -1 should be -111', () => {
  const result = sumManyNumbers(-100, -10, -1);

  expect(result).toBe(-111);
});
