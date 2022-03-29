/**
 * TASK(224);
 *
 * Przetestuj w osobnym pliku — teście, logikę działania `connectToCentralBank`.
 *
 * Wraz z poprawnymi wartościami zwracanymi dla odpowiednich zapytań o transfer oraz ping.
 *
 * Skorzystaj z zewnętrznych zależności `users`.
 * - sprawdź, czy zwracane są poprawne błędy.
 * - sprawdź poprawność komunikatu po transferze
 *
 * **BONUS:
 * - sprawdź, czy logika poprawnie odjęła / dodała wartości w .balance
 *
 * */

const defaultUsers = [
  { name: 'John', balance: 2000 },
  { name: 'Margaret', balance: 5000 },
  { name: 'Benjamin', balance: 2 },
];

function connectToCentralBank(users = defaultUsers) {
  const findUser = name => {
    const user = users.find(u => u.name === name);
    if (!user) {
      throw new Error(`User ${name} not found`);
    }
    return user;
  };

  return {
    ping(cb) {
      cb('Bank is online');
    },
    transfer({ from, to, amount }, response) {
      const fromUser = findUser(from);
      const toUser = findUser(to);
      if (fromUser.balance < amount) {
        throw new Error('Insufficient money');
      }
      setTimeout(() => {
        fromUser.balance -= amount;
        toUser.balance += amount;
        response(
          `Amount of ${amount} transferred from ${fromUser.name} to ${toUser.name}.`
        );
      }, 3000);
    },
  };
}
