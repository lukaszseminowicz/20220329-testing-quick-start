/**
 * OK. Skupmy się na tym, JAK powinniśmy pisać nasze testy.
 * lepsze podejście niż 102-sample-logic. 😊.
 *
 * Co jest ważne?
 *
 * Cóż, NAZWA testu — musi wyrażać to, co chciałeś przetestować.
 * Spróbuj odpowiedzieć, co testujesz, a czasem nawet – dlaczego to robisz.
 *
 * STRUKTURA testu powinna wyglądać następująco: 3x A = Arrange, Act, Assert
 * Nie musisz dawać komentarzy jak poniżej (która część jest którą) - tutaj służy to tylko pokazaniu, jak to ma wyglądać.
 * Powinniśmy jednak trzymać się tego stylu struktury (Given/When/Then) wszędzie tam, gdzie to możliwe.
 *
 * Daje to czytelność i skupienie na poszczególnych częściach testu.
 *
 * ASSERT – staraj się tworzyć jak najmniej asercji na test.
 * Czasami lepiej jest podzielić to, co testujesz, na 2 przypadki testowe, zamiast robić to w jednym, z wieloma asercjami.
 * Omówimy to szerzej w następnych przykładach, ale miej to na uwadze.
 * Lepiej jest również używać asercji .toEqual() / .toBe() [not.toEqual() / not.toBe()]
 * tak długo, jak to możliwe — aby po prostu zachować prostotę!
 *
 *
 * Zauważ, że nie stosujemy tutaj funkcji "test()" tylko "it()"
 * Jest to celowy zabieg.
 * https://jestjs.io/docs/api#testname-fn-timeout (zobacz: "Also under the alias: it(name, fn, timeout)")
 *
 * it jest aliasem dla "test".
 * Dzięki temu mamy ułatwienie opisywania przypadków testowych jako:
 * it should...
 *
 * I dostajemy możliwość składnego opisywania przypadków testowych w formie:
 *
 * it should do this and that...
 * it should behave like that
 * it should .... etc.
 * */

it('should result 30 when 10 added to 20', () => {
  // Arrange / Given
  const numberA = 10;
  const numberB = 20;

  // Act / When
  const result = numberA + numberB;

  // Assert / Then
  expect(result).toBe(30);
});
