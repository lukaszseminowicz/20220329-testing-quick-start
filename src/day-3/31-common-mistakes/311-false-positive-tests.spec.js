/**
 *
 * Fałszywie pozytywny wynik testu, może wynikać z kilku rzeczy.
 *
 * 1. Testujemy nie to, co chcieliśmy (tytuł testu kłamie)
 * 2. Zrobiliśmy błędne założenia testu
 * 3. Nie zrobiliśmy żadnych asercji a test świeci na zielono
 *
 *
 * W każdym z tych przypadków główny sposób, aby nie wpaść w tę pułapkę, jest jeden:
 *  - zawsze na początku staraj się zapalić test na czerwono!
 *    żeby upewnić się na 100%, że dobrze myślisz...
 *
 * */

import { UserService } from './31-data/UserService.js';

describe('[311](wrong) - False positive test', () => {
  let userService;

  beforeEach(() => {
    userService = new UserService();
  });

  it('should have 10 users after load', () => {
    // To jest prawda, jednak nie załadowaliśmy jeszcze userów ?! - jakim cudem !?
    expect(userService.userLength).toBe(10);
  });

  // inny przykład:
  it('should be undefined after 300 ms', () => {
    // źle napisany test ?! ale czemu...
    userService = undefined;

    setTimeout(() => {
      expect(userService).toBeDefined();
    }, 300);
  });
});
