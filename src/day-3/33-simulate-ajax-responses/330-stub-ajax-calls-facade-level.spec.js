/**
 * Problemem jest ta wewnętrzna zależność wewnątrz takeTodo();
 *
 * Istnieje wywołanie używające `myFetch` z modułu zewnętrznego.
 * Nie mamy dostępu do tego połączenia w linii 28.
 * Nie możemy tego szpiegować ani go blokować.
 *
 * Zamiast tego robimy mocka całego modułu: ./230-ajax-caller.js
 * i zwracamy podmienioną implementację myFetch
 *
 * ZAUWAŻ:
 * - nie chcemy, aby to żądanie AJAX lub HTTPS przechodziło on-line, nie o to chodzi!
 * - to ma być test jednostkowy, a nie integracyjny lub e2e!
 *
 *
 * Tutaj naszą przewagą jest cała "fasada" w dostępie do API.
 * To znaczy, posiadamy pomocniczy moduł: 'ajax-caller' i to on determinuje finalnie,
 * z jakiej usługi AJAX korzystamy. Dzięki temu mając tego typu "Fasadę" możemy na niej stub'ować metody.
 *
 * Jednak nie zawsze będzie to takie łatwe lub może być zupełnie inaczej zaprojektowane...
 * co wtedy ? Odpowiedź poznamy w 331-really-mock-ajax-calls.spec.js
 */

jest.mock('./330-ajax-caller', () => ({
  myFetch: jest.fn(() =>
    Promise.resolve({ id: 1, title: 'This is fake', completed: true })
  ),
}));

// Unit Under Test:
import { myFetch } from './330-ajax-caller.js';
function takeTodo() {
  return myFetch('https://jsonplaceholder.typicode.com/todos/1').then(todo => {
    const { id, title, completed } = todo;
    return `[${completed ? '✔' : ' '}] (${id}) ${title}`;
  });
}

describe('330 - how to stub ajax/http/https calls before they will be called via our API?', () => {
  it('should fetch data from https://jsonplaceholder.typicode.com/todos/1', async () => {
    await takeTodo();

    expect(myFetch).toHaveBeenCalledWith(
      'https://jsonplaceholder.typicode.com/todos/1'
    );
  });

  it('should call return task in format [done?] (id) title', async () => {
    const myTask = await takeTodo();

    expect(myTask).toBe('[✔] (1) This is fake');
  });
});
