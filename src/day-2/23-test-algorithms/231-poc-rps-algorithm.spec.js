/**
 * Rozważmy jeszcze raz przykład z Rock _ Paper _ Scissors.
 *
 * Jednak teraz... wyobrażając sobie, że nie mamy nic.
 * Po prostu robimy sobie taki POC (Proof Of Concept) test
 * i sprawdzamy poprawność naszego myślenia.
 *
 * Robimy to w oparciu, o naszą znajomość zasad gry.
 *
 * Tutaj testowanie pomaga nam w usprawnieniu działania algorytmu,
 * refaktoryzacji podejścia, oraz przetestowaniu wszystkich (jeśli to możliwe) warunków
 * wejściowych.
 *
 * Zwróć uwagę na składnię it.each(...)
 * Pozwala ona rozwiązać kilka różnych przypadków w przy tych samych założeniach testu.
 *
 * Sprawdza się tam, gdzie chcemy przetestować jakąś serię danych.
 * Ważne jest, żebyśmy jednak napisali to w formie:
 * [
 *    [...given, expectation],
 *    [...given2, expectation2],
 * ]
 *
 * */

describe('game logic concept - how to play - Prof of Concept', () => {
  function play(choice1, choice2) {
    const choices = ['rock', 'paper', 'scissors'];
    if (!choices.includes(choice1) || !choices.includes(choice2)) {
      throw new Error('Wrong choice');
    }
    const isLost =
      (choice1 === 'scissors' && choice2 === 'rock') ||
      (choice1 === 'paper' && choice2 === 'scissors') ||
      (choice1 === 'rock' && choice2 === 'paper');

    if (choice1 === choice2) {
      return 'DRAW';
    }
    return isLost ? 'LOOSE' : 'WIN';
  }

  it('should be draw by the same option taken', () => {
    const player1option = 'rock';
    const player2option = 'rock';

    expect(play(player1option, player2option)).toEqual('DRAW');
  });

  it.each([
    ['rock', 'rock', 'DRAW'],
    ['paper', 'paper', 'DRAW'],
    ['scissors', 'scissors', 'DRAW'],
  ])(
    'should be DRAW if the same option taken [%s - %s] by each players',
    (player1option, player2option, expected) => {
      expect(play(player1option, player2option)).toEqual(expected);
    }
  );

  it('should WIN when stronger option taken by player 1', () => {
    const player1option = 'paper';
    const player2option = 'rock';

    expect(play(player1option, player2option)).toEqual('WIN');
  });

  it.each([
    ['rock', 'scissors', 'WIN'],
    ['paper', 'rock', 'WIN'],
    ['scissors', 'paper', 'WIN'],
  ])(
    'should WIN when stronger option taken by player 1 [%s - %s]',
    (player1option, player2option, expected) => {
      expect(play(player1option, player2option)).toEqual(expected);
    }
  );

  it.each([
    ['scissors', 'rock', 'LOOSE'],
    ['rock', 'paper', 'LOOSE'],
    ['paper', 'scissors', 'LOOSE'],
  ])(
    'should LOOSE when stronger option taken by player 2 [%s - %s]',
    (player1option, player2option, expected) => {
      expect(play(player1option, player2option)).toEqual(expected);
    }
  );
});
