function carFactory({ name, year, info }, getManufacturer, hasOwner) {
  const { country } = getManufacturer();

  return {
    name,
    year,
    info,
    country,
    hasOwner,
  };
}

/**
 * To, czy nazywamy coś Mockiem, Stubem czy Dummy.
 * Nie zależy od tego "czym to jest" - np. obiektem czy funkcją, ale od tego "w jakim charakterze to wykorzystujemy"
 *
 * Przykładowo tutaj poniżej, testujemy tzw. factory function
 *
 * W obydwu testach nie zależy nam na wartości `country` - nie chcemy jej testować.
 * W tym układzie potrzebujemy jedynie "zastubować" wywołania getManufacturer() tak, aby były poprawne.
 * Natomiast co dalej dzieje się z `country` - w ogóle nas nie obchodzi.
 *
 * */

describe('222 Stub and dummy | carFactory', () => {
  it('can be tested with a simple stub object', () => {
    const stub = () => ({ address: {} });

    const mercedesCar = carFactory({ name: 'Mercedes', year: 2003 }, stub);

    expect(mercedesCar).toHaveProperty('name', 'Mercedes');
  });

  it('can be tested with a stub returned form jest.fn', () => {
    // UWAGA: Nie musi być tutaj koniecznie jest.fn(...)
    // Jednak warto wiedzieć, że może ona również zachowywać się jak normalna funkcja (czyli - zwracać wartość).
    const stub = jest.fn(_ => ({ address: { country: 'Germany' } }));

    const mercedesCar = carFactory({ name: 'Mercedes', year: 2003 }, stub);

    expect(mercedesCar).toHaveProperty('name', 'Mercedes');
  });

  // Przykład poniżej z dummy jest tutaj trochę "Naciągany"

  // Ponieważ w JavaScript nie jest wymagane dostarczenie wszystkich argumentów funkcji.
  // Zauważ, że i bez tego dummy — wszystko działa ok powyżej.
  // Tutaj zamieszczam to jedynie dla porównania obrazu + może się to przydać w TypeScript
  // (tam już mamy określone wymogi co do ilości parametrów i argumentów)
  // Dummy jest tylko po to, żeby spełnić założenia funkcji (może być potrzebny po to, żeby się np. podporządkować Linterowi)
  // kompletnie nie potrzebujemy go z pkt. widzenia samego testowania i tego co testujemy.
  it('will be tested with dummy - used for nothing...', () => {
    const stub = () => ({ address: {} });
    const dummy = false;

    const mercedesCar = carFactory(
      { name: 'Mercedes', year: 2003 },
      stub,
      dummy
    );

    expect(mercedesCar).toHaveProperty('name', 'Mercedes');
  });
});
