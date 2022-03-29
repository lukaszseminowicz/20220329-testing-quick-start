import { possibleChoices } from './game.js';

/**
 * TASK(121);
 *
 * Zostajesz przydzielony do projektu ROCK — PAPER — SCISSORS.
 *
 * Czas poznać jak on działa.
 * Napisz odpowiednie testy do modułu `game.js`.
 *
 * Sprawdź prawidłowości w makeAMove
 * czy faktycznie można grać z zasadami:
 *
 * ROCK pokojnuje SCISSORS
 * PAPER pokonuje ROCK
 * SCISSORS pokonują PAPER ?
 *
 *
 *
 * **BONUS:
 * Hint (do tego zadania warto wrócić dopiero po poznaniu składni it.each ([]) )
 *  https://jestjs.io/docs/api#testeachtablename-fn-timeout
 * jest to dobry przykład testowania założeń algorytmów.
 *
 *
 * Czy możliwe jest zagranie w ROCK - PAPER - SCISSORS - LIZARD - SPOCK
 * zgodnie z zasadami:
 * - podając dokładnie kolejność: ['paper', 'lizard', 'scissors', 'rock', 'spock']
 * - z czego wynika, że:
 *
 *   PAPER pokonuje SPOCK i ROCK
 *   LIZARD pokonuje PAPER i SPOCK
 *   SCISSORS pokonują PAPER i LIZARD
 *   ROCK pokonuje SCISSORS i LIZARD
 *   SPOCK pokonuje SCISSORS i ROCK
 * */

describe('The Rock-Paper-Scissors Game', () => {
  beforeEach(() => {
    possibleChoices(['rock', 'paper', 'scissors']);
  });

  it.todo('suppose to have a test');
});
