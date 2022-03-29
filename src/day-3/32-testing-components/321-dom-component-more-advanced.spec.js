/**
 * Użyjmy teraz @testing-library/dom
 *
 * @jest-environment jsdom
 * */

import { fireEvent } from '@testing-library/dom';

// Sample Component:
class TodoList extends HTMLElement {
  list = [];
  $uiList = null;
  $inputNewToDo = null;

  constructor() {
    super();
    this.innerHTML = `
	      <h5>My sample todo List</h5>
	      <ul></ul>
	      <hr>
				<div>
					<input name="new-todo">
				</div>
		 `;
    this.$uiList = this.querySelector('ul');
    this.$inputNewToDo = this.querySelector('input[name="new-todo"]');
    this.$inputNewToDo.addEventListener('keypress', ev => {
      const { value } = ev.target;
      if (ev.key === 'Enter') {
        this.list.push({ title: value, done: false });
        ev.target.value = '';
        this.renderList();
      }
    });
  }

  renderList() {
    this.$uiList.innerHTML = this.list.map(e => `<li>${e.title}</li>`).join('');
  }
}
customElements.define('todo-list', TodoList);

describe('How to test DOM component - with @testing-library/dom? (TodoList)', () => {
  beforeEach(() => {
    document.body.append(new TodoList());
  });

  afterEach(() => {
    // Usuń wszystko z body po każdym teście
    document.body.innerHTML = '';
  });

  it('should be able to mount to document DOM:', () => {
    const clicker = document.querySelector('todo-list');
    const h3title = clicker.querySelector('h5');

    expect(h3title.textContent).toBe('My sample todo List');
  });

  it('should clean the input when Enter clicked', () => {
    const theInput = document.querySelector('input[name="new-todo"]');

    fireEvent.input(theInput, { target: { value: 'Make a wish list' } });
    fireEvent.keyPress(theInput, { key: 'Enter', code: 'Enter' });

    expect(theInput.value).toBe('');
  });

  it('should be able to add new todos to list', () => {
    const theInput = document.querySelector('input[name="new-todo"]');
    const theList = document.querySelector('ul');

    fireEvent.input(theInput, { target: { value: 'Make a wish list' } });
    fireEvent.keyPress(theInput, { key: 'Enter', code: 'Enter' });
    fireEvent.input(theInput, { target: { value: 'Clean the carpet' } });
    fireEvent.keyPress(theInput, { key: 'Enter', code: 'Enter' });

    expect(theList.innerHTML).toBe(
      '<li>Make a wish list</li><li>Clean the carpet</li>'
    );
  });
});
