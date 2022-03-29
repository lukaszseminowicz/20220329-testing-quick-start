/**
 *
 * Testujemy komponent Clicker.
 *
 * Zadanie wydaje się proste.
 * Mamy metody, mamy instancję.
 *
 * To super, że logika jest tak pięknie przygotowana !!!
 *
 * Komponent działa !!!
 *
 * Tylko, czy aby na pewno testujemy to dobrze ?!
 *
 * Linia poniżej jest konieczna, aby symulować w Jest środowisko przeglądarki:
 * @jest-environment jsdom
 * */

import { Clicker } from './Clicker.js';

describe('[313] testing implementation of a Clicker ?!', () => {
  let clickerInstance;

  beforeEach(() => {
    clickerInstance = new Clicker();
  });

  it('should start with 0 floor ', () => {
    expect(clickerInstance.counter).toBe(0);
  });

  it('should go up by one when raised ', () => {
    clickerInstance.riseCounter();
    clickerInstance.riseCounter();
    clickerInstance.riseCounter();
    clickerInstance.riseCounter();

    expect(clickerInstance.counter).toBe(4);
  });

  it('should be 0 when restart ', () => {
    clickerInstance.riseCounter();
    clickerInstance.riseCounter();
    expect(clickerInstance.counter).toBe(2);

    clickerInstance.resetCounter();
    expect(clickerInstance.counter).toBe(0);
  });
});

/*
 *
 * Niestety każdy z tych przypadków testowych testuje szczegóły implementacji komponentu,
 * a nie jak powinien: jego zachowanie.
 *
 * Przez to mamy 2 zasadnicze problemy:
 *  - 1. W ogóle nie wiemy, czy komponent działa (wyświetla cokolwiek i odbiera eventy)
 *  - 2. Za (prawie) każdym razem, jeśli zmienimy detal implementacji - testy trzeba poprawiać...
 * */
