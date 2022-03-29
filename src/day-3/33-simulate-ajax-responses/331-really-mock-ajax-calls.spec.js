/**
 * W tym przykładzie używamy MSW (Mock Service Worker):
 * To biblioteka pozwalająca na przechwytywanie zapytań AJAX.
 *
 * W tym układzie nie musimy się przejmować żadnym endpointem API,
 * w który uderzamy.
 *
 * MSW zwróci nam informację, jeśli zapomnieliśmy zastubować jakiś ajax request.
 *
 * Nasze zapytania fizycznie nie będą wychodziły poza aplikację frontendową,
 * My z kolei możemy zobaczyć nawet bezpośrednio na komponentach czy dane z API są poprawnie wyświetlane.
 *
 * https://mswjs.io/
 *
 * */
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { myFetch } from './330-ajax-caller.js';

// Unit Under Test:
function takeTodo(id) {
  return myFetch('https://jsonplaceholder.typicode.com/todos/' + id)
    .then(todo => {
      const { id, title, completed } = todo;
      return `[${completed ? '✔' : ' '}] (${id}) ${title}`;
    })
    .catch(err => {
      return `Cannot load task id: ${id}, [error: ${err.message}]`;
    });
}

describe('331 how to stub ajax/http/https calls?', () => {
  // Ten serwer przejmie wszystkie zapytania AJAX, które zostaną wykonane przez kod w trakcie działania testów.
  const server = setupServer(
    rest.get(
      'https://jsonplaceholder.typicode.com/todos/1',
      (req, res, ctx) => {
        return res(ctx.json({ id: 1, title: 'This is fake', completed: true }));
      }
    )
  );

  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  describe('takeTodo - with fake server MSW', () => {
    it('should render completed task in format [✔] (id) title', async () => {
      const myTask = await takeTodo(1);

      expect(myTask).toBe('[✔] (1) This is fake');
    });

    it('should render uncompleted task in format [ ] (id) title', async () => {
      server.use(
        rest.get(
          'https://jsonplaceholder.typicode.com/todos/:id',
          (req, res, ctx) => {
            // we return dynamic id:
            const { id } = req.params;
            return res(
              ctx.json({ id, title: 'This is other task', completed: false })
            );
          }
        )
      );

      const myTask = await takeTodo(2);

      expect(myTask).toBe('[ ] (2) This is other task');
    });

    it('should render errors', async () => {
      server.use(
        rest.get(
          'https://jsonplaceholder.typicode.com/todos/:id',
          (req, res, ctx) => {
            return res(
              ctx.status(403),
              ctx.json({
                message: 'Not authorized',
              })
            );
          }
        )
      );

      const myTask = await takeTodo(1232);

      expect(myTask).toBe('Cannot load task id: 1232, [error: Not authorized]');
    });
  });
});
