/**
 *
 * "Kruchy test" - to taki, który będzie nam się bardzo często zapalał na czerwono.
 * Dlaczego ?
 *
 * Ponieważ zmieniliśmy cokolwiek w implementacji albo w dostarczanych danych.
 *
 * Przykład poniżej jest trochę "podkolorowany", jednak oddaje charakter sprawy.
 * Możemy za każdym razem "biegać" i poprawiać jeden zestaw lub kilka konkretnych
 * testów z różnych zestawów, tylko dlatego, że sposób, w jaki są napisane te testy,
 * nie do końca jest przemyślany...
 * */

import { UserService } from './31-data/UserService.js';

describe('[312](wrong) - Fragile tests', () => {
  let userService;

  beforeEach(() => {
    userService = new UserService();
  });

  it('should have all names loaded after loadUsers()', () => {
    userService.loadUsers();

    const result = userService.getAllNames().join(';');

    expect(result).toEqual(
      'Leanne Graham;Ervin Howell;Clementine Bauch;Patricia Lebsack;Chelsey Dietrich;Mrs. Dennis Schulist;Kurtis Weissnat;Nicholas Runolfsdottir V;Glenna Reichert;Clementina DuBuque'
    );
    /*
     * I teraz, być może, taki test w niektórych przypadkach jest dla nas zasadny.
     *
     * Jednak w większości przypadków, takie testowanie "integralności danych" będzie kończyło się tym,
     * że za każdym razem, jeśli .name dla któregokolwiek użytkownika się zmieni lub dojdzie nam nowy user...
     * ... ten test będzie się świecił na czerwono.
     *
     * */
  });
});
