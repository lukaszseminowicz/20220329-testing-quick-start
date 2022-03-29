/**
 * Testy muszą spełniać określone warunki, aby można było na nich polegać.
 *
 * 1. Test A nie może być zależy od wyniku testu B.
 * 2. Test A nie może modyfikować danych wejściowych testu B
 * 3. Po zakończeniu testowania nie powinny istnieć żadne "efekty uboczne" naszych testów.
 *
 * Niestety — to my sami musimy dbać o spełnienie powyższych warunków.
 * Jednak API do testowania (zarówno w Jest, jak i w innych frameworkach to testów)
 * oferuje nam dodatkowe pomocnicze funkcje / akcje przy testowaniu:
 *
 * beforeAll, afterAll, beforeEach, afterEach
 *
 * Można ich działanie ograniczać per blok describe.
 * Poniżej przedstawione są w akcji.
 *
 * setup:
 *  https://jestjs.io/docs/api#beforeallfn-timeout
 *  https://jestjs.io/docs/api#beforeeachfn-timeout
 *
 * teardown:
 *  https://jestjs.io/docs/api#afterallfn-timeout
 *  https://jestjs.io/docs/api#aftereachfn-timeout
 *
 * */

describe('Jest API', () => {
  let x, y;

  beforeAll(() => {
    // ta funkcja uruchomi się raz, przed wszystkimi testami w tym bloku describe
    x = 10;
  });

  beforeEach(() => {
    // ta funkcja uruchomi się za każdym razem, dla każdego testu w tym bloku
    y = 450;
  });

  afterAll(() => {
    // Ten callback będzie wykonany po wszystkich testach.
    // Nie mamy na tym prostym przykładzie co "czyścić" po przetestowaniu,
    // jednak czasem przydaje się jego wykonanie.
  });

  it.todo('should be written'); // Ten test oczekuje na napisanie

  it.skip('should be skipped', () => {
    // Ten test zostanie pominięty w tym pliku
    throw new Error('This is not written yet !');
  });

  describe('the x', () => {
    /*
     * Ten przykład obrazuje na zachowanie `x`
     * Jednak z pkt. widzenia testowania nie jest to poprawne podejście.
     *
     * Nie chodzi nawet o "anemiczność" tych testów. I brak większego sensu :)
     * Na uwagę zasługuje tutaj fakt uzależnienia testów od siebie
     * - co nigdy nie jest dobrym pomysłem
     * */

    it('should be 10 at start', () => {
      expect(x).toBe(10);
    });
    it('should be 11 when increased', () => {
      x++;
      expect(x).toBe(11);
      x = 800;
    });
    it('should be 801 later on', () => {
      x++;
      expect(x).toBe(801);
    });
  });

  describe('the y', () => {
    /*
     * Obraz testowania y wygląda tutaj dużo bardziej "przytomnie"
     * Ponieważ wartość `y` za każdym razem, kiedy rozpoczynamy testowanie to = 450.
     * */
    it('should be 450 at start', () => {
      expect(y).toBe(450);
      y++;
    });

    it('should be 450 later', () => {
      expect(y).toBe(450);
      y = 800;
    });

    it('should be 450 always at start because beforeEach', () => {
      expect(y).toBe(450);
    });
  });
});
