/**
 *
 * Znasz to powiedzenie, że "sometimes less is more".
 *
 * ...sprawdza się ono, jeśli chodzi o użycie asercji w teście.
 * Chodzi o to, aby nie sprawdzać za dużo w jednym teście.
 *
 * W tym układzie poniżej każda zmiana danych np. email usera o indeksie 5,
 * wywoła załamanie testu, którego zadaniem było "sprawdzenie poprawnej ilości użytkowników".
 *
 * Owszem można czasem użyć więcej asercji w teście — jednak powinny one trzymać się
 * wokoło tego samego celu — co pozostała część testu.
 *
 * Jeśli faktycznie chcemy sprawdzić jeszcze email, czy website dla użytkownika,
 * powinniśmy dopisać nowe przypadki testowe.
 * */
import { UserService } from './31-data/UserService.js';

describe('[310](wrong) - To many assertions', () => {
  let userService;

  beforeEach(() => {
    userService = new UserService();
    userService.loadUsers();
  });

  it('should have 10 users', () => {
    const users = userService.getAllUsers();

    expect(users).toHaveLength(10);
    expect(users[0].email).toEqual('Sincere@april.biz');
    expect(users[0].website).toEqual('hildegard.org');
    expect(users[5].email).toEqual('Karley_Dach@jasper.info');
    expect(users[9].email).toEqual('Rey.Padberg@karina.biz');
  });
});
