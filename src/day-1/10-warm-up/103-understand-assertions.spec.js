/**
 * W każdym teście wyróżniamy kilka elementów.
 * Jednak tak naprawdę, kluczowym elementem: "powodzenia" / "niepowodzenia" testu
 *
 * Są, tzw. asercje.
 * Czyli umieszczane zazwyczaj na samym końcu założenia, które mają określać warunek powodzenia testu.
 * Jeśli warunek nie jest spełniony — dostaniemy o tym informację.
 *
 * Standardowo jest to moment, w którym faktycznie pisalibyśmy "console.log", nie mając testu.
 * Tutaj nie jest to potrzebne, ponieważ zadaniem asercji jest właśnie sprawdzanie wyniku testu.
 *
 * Trzeba być bardzo ostrożnym — ponieważ nieumieszczenie ŻADNEJ asercji w teście,
 * powoduje, że będzie on świecił cały czas NA ZIELONO, więc z pkt. widzenia samego testowania
 * nie jest poprawny test.
 *
 * Asercje zaczynają się w `Jest` od wywołania funkcji expect(), która zwraca obiekt.
 * Odnosimy się więc do metod tego obiektu takich jak np. .toBe() czy .toEqual().
 *
 * metody te nazwane są ogólnie jako: MATCHERS.
 *
 * Ilość dostępnych asercji ma nam za zadanie ułatwić sprawdzanie danego elementu.
 *
 * Poniżej przedstawione są przykłady testów, z różnymi asercjami.
 * Przykłady te to nie są "zasadne testy" - mają za zadanie jedynie pokazać Ci różne rodzaje assertions naszego testu.
 *
 * https://jestjs.io/docs/expect
 *
 * uruchom przykład jako:
 * ```
 * npm run test:warm-up-103
 * ```
 *
 * zobacz co się stanie jeśli celowo zmienisz założenia na takie, które są nielogiczne
 * (nie do spełnienia) np.
 * ```
 * expect(3).toBe(33)
 * ```
 *
 * */

test('assert that something is equal via ===, works with primitives or same refs of complex types', () => {
  expect(2).toBe(2);
  expect('B').toBe('B');
  expect(10n).toBe(10n);
  expect(true).toBe(true);
  expect(undefined).toBe(undefined);
  expect(null).toBe(null);

  const mySymbol = Symbol();
  const otherSymbol = mySymbol;
  expect(mySymbol).toBe(otherSymbol);

  // To nie zadziała z typami złożonymi:
  // Czy wiesz dlaczego? [Sprawdź — odkomentuj linię poniżej]
  // expect({}).toBe({})
});

test('assert that something is equal via comparison, works with primitives and complex types', () => {
  expect(2).toEqual(2);
  expect({}).toEqual({});

  expect([12, 18, 22]).toEqual([12, 18, 22]);

  expect({ name: 'Mike' }).toEqual({ name: 'Mike' });
  expect({ name: 'Mike', age: 20 }).toEqual({ age: 20, name: 'Mike' });

  class User {
    login = 'XyZ8273';
  }

  expect(new User()).toEqual(new User());

  // UWAGA! kolejność elementów w tablicy ma znaczenie! Wartości poniżej to nie to samo:
  // expect([1,2,3,4]).toEqual([4,3,2,1])

  // toEqual pomija sprawdzanie "undefined" w obiektach — traktuje to jako wartości nieistniejące
  expect({ name: 'John', lastName: undefined }).toEqual({ name: 'John' });
});

test('assert that something is EXACTLY same', () => {
  // Teraz linia poniżej wygeneruje błąd !
  //
  // expect({ name: 'John', lastName: undefined }).toStrictEqual({ name: 'John' });

  // W strict Equal nie chodzi o kolejność pól w obiekcie !
  expect({ name: 'Mike', age: 20 }).toStrictEqual({ age: 20, name: 'Mike' });

  // Tablice zachowują się tak samo:
  // expect([1, 2, 3, 4]).toStrictEqual([4, 3, 2, 1]);
});

test('assertion mechanism is relatively simple... just throw an Error', () => {
  // Sprawdź:
  // throw new Error('Hardcoded -> something went wrong !');
});

test('You can revert the assertion using .not. notation:', () => {
  expect(1).not.toBe(2);
  expect({ random: Math.random() }).not.toEqual({});
  expect({ my: undefined }).not.toStrictEqual({});

  class User {
    login = 'XyZ8273';
  }

  expect(new User()).toEqual({ login: 'XyZ8273' });
  expect(new User()).not.toStrictEqual({ login: 'XyZ8273' });
});

test('More of the assertion types:', () => {
  // https://jestjs.io/docs/expect#tohavelengthnumber
  expect([1, 2, 3, 5, 6, 7, 8]).toHaveLength(7);
  expect('Hello World').toHaveLength(11);

  // https://jestjs.io/docs/expect#tocontainitem
  expect(['apple', 'mango', 'banana', 'cherry']).toContain('cherry');
  expect('Pack my box with five dozen liquor jugs.').toContain('box');
  expect('Pack my box with five dozen liquor jugs.').toContain('five dozen');
  expect(new Set([120, 330, 22, 1, 0])).toContain(0);

  // https://jestjs.io/docs/expect#tohavepropertykeypath-value
  expect({ my: { complex: 'object' } }).toHaveProperty('my');
  expect({ my: { complex: 'object' } }).toHaveProperty('my.complex');
  // Check property and value:
  expect({ my: { complex: 'object' } }).toHaveProperty(
    ['my', 'complex'],
    'object'
  );

  // https://jestjs.io/docs/expect#tobeclosetonumber-numdigits
  expect(0.2 + 0.1).toBeCloseTo(0.3, 5);

  // https://jestjs.io/docs/expect#tobedefined
  expect({}).toBeDefined();
  expect(undefined).not.toBeDefined();
  expect(undefined).toBeUndefined();

  // https://developer.mozilla.org/en-US/docs/Glossary/Falsy
  // https://jestjs.io/docs/expect#tobefalsy
  expect(false).toBeFalsy();
  expect('').toBeFalsy();
  expect(0n).toBeFalsy();
  expect(0).toBeFalsy();
  expect(-0).toBeFalsy();
  expect(undefined).toBeFalsy();
  expect(null).toBeFalsy();
  expect(NaN).toBeFalsy();

  expect(NaN || 0 || '' || false).toBeFalsy();

  // https://jestjs.io/docs/expect#tobegreaterthannumber--bigint
  // https://jestjs.io/docs/expect#tobelessthannumber--bigint
  expect(100).toBeGreaterThan(10);
  expect(10).toBeLessThan(100);

  // https://jestjs.io/docs/expect#tobeinstanceofclass
  const myDate = new Date();
  expect(myDate).toBeInstanceOf(Date);
  expect(myDate).toBeInstanceOf(Object);

  // https://jestjs.io/docs/expect#tobenull
  expect(null).toBeNull();

  // https://jestjs.io/docs/expect#tobetruthy
  expect(true).toBeTruthy();
  expect([]).toBeTruthy();
  expect(' ').toBeTruthy();
  expect(-1).toBeTruthy();

  // Bardzo pomocne:
  // https://jestjs.io/docs/expect#tobenan
  expect(NaN).toBeNaN();
});

test('more usable matchers....', () => {
  // https://jestjs.io/docs/expect#expecthasassertions
  expect.hasAssertions(); // upewnienie się, że "Test będzie testował"

  // https://jestjs.io/docs/expect#expectassertionsnumber
  expect.assertions(6); // zakładamy, że ma być 6 asercji (wywoła to błąd, jeśli będzie inaczej)

  function never(luckyNumber) {
    throw new Error(`BOOM ! ${luckyNumber}`);
  }
  // nie możemy tego przetestować tak:
  // never()
  // Bo wiemy, że rzucenie wyjątku spowoduje zapalenie testu na czerwono

  // Możemy jednak przekazać funkcję do expect, nie wywołując jej:
  expect(never).toThrow();
  // Albo, jeśli musimy ją sami wywołać np. z argumentami:
  expect(() => never(23)).toThrow();
  expect(() => never(789)).toThrow(new Error('BOOM ! 789'));
  expect(() => never(789)).toThrowError('BOOM !'); // zauważ, że nie trzeba podawać całości Errora to działa jak contain
  expect(() => never(789)).toThrowError('BOOM ! 789');

  return expect(Promise.resolve('chewing gum')).resolves.toBe('chewing gum');
});
