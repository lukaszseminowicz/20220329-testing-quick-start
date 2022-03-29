/**
 * Z punktu widzenia testowania, ważne jest grupowanie przypadków testowych.
 *
 * Służą do tego podobnie napisane pod względem części składni, funkcje:
 * describe
 * https://jestjs.io/docs/api#describename-fn
 *
 * Tworzymy wtedy pewne bloki testów, grupy/zestawy testów — tzw. Test Suite.
 *
 * Ma to znaczenie w przypadku posiadania znacznej ilości testów.
 * O ile uruchomienie komendy:
 * ```
 * npm run test:watch
 * ```
 * da nam tylko obiegowe info odnośnie do plików np.:
 *  PASS  src/day-1/11-unit-testing-intro/113-task-write-a-unit-test-of-your-own.spec.js
 *  PASS  src/day-2/22-use-test-doubles/220-callbacks-spies.spec.js
 *  PASS  src/day-1/11-unit-testing-intro/112-jest-api.spec.js
 *  PASS  src/day-1/11-unit-testing-intro/111-glue-it-all-together.spec.js
 *  ....
 *
 *  i ewentualnych niepowodzeń w testach (jeśli takowe będą)
 *
 *  Tak użycie komendy `--verbose` pokazuje nam w TEST REPORT,
 *  strukturę, w której widzimy opisy testów i opisy funkcji `describe` jako nadrzędnych
 *  "opakowujących" daną grupę testów.
 *
 *  Możesz zagnieżdżać w sobie funkcje `describe()` i korzystać z zależności JavaScript,
 *  jaką są zakresy (scopes).
 *  Będzie to miało wpływ na wygląd końcowego raportu oraz na hermetyczność przygotowania
 *  setupu dla danej grupy testów.
 * ```
 * npm run test:verbose
 * ```
 *  PASS  src/day-1/11-unit-testing-intro/111-glue-it-all-together.spec.js
 *   sumManyNumbers
 *     √ should result 30 when 10 added to 20 (5 ms)
 *
 * */

function sumModule() {
  const sum = (a, b) => a + b;

  return {
    sumManyNumbers(...manyThings) {
      return manyThings.reduce(sum);
    },
  };
}

describe('sumManyNumbers', () => {
  it('should result 30 when 10 added to 20', () => {
    // Arrange / Given
    const { sumManyNumbers } = sumModule();
    const numberA = 10;
    const numberB = 20;
    const numberC = 30;

    // Act / When
    const result = sumManyNumbers(numberA, numberB, numberC);

    // Assert / Then
    expect(result).toBe(60);
  });
});
