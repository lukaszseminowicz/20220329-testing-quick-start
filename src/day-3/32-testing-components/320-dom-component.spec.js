/**
 * Testowanie komponentów polega na testowaniu ich zachowania.
 * Wtedy naprawdę nie obchodzi mnie, czy używasz Angular / React / Svelte / Vue / Ember
 *
 * serio... w ogóle nie obchodzi mnie Twoja implementacja!
 *
 * Wszystko, co chcę wiedzieć — jak ma się zachowywać.
 * Kierujemy się koncepcją, że w końcu to Użytkownik wchodzi w interakcję z komponentami
 * ... a użytkownik korzysta z przeglądarki + myszki + klawiatury
 *
 * I tak powinno być testowane! - Tak jak zrobiłby to End User...
 *
 * Najlepsza biblioteka pomocnicza dla Jest (i innych framework'ów testowych) w tej materii to:
 * https://testing-library.com/docs/
 *
 * Jednak tutaj zaczniemy bez niej — aby pokazać podstawową koncepcję testowania komponentów.
 *
 * Line below is crucial to have JSDOM within this test module!
 * @jest-environment jsdom
 * */

// Sample Component:
class Clicker extends HTMLElement {
  clickerBtn = null;
  noSpan = null;
  clicked = 0;

  constructor() {
    super();
    this.innerHTML = `
		    <h3>This is my Clicker</h3>
		    <div>you clicked <span class="no">0</span> times</div>
		    <button class="clickerBtn">Click!</button>
		 `;
    this.noSpan = this.querySelector('.no');
    this.clickerBtn = this.querySelector('.clickerBtn');
    this.clickerBtn.addEventListener('click', () => {
      this.clicked++;
      this.noSpan.textContent = String(this.clicked);
    });
  }
}
customElements.define('my-clicker', Clicker);

describe('how to test DOM component? (Clicker)', () => {
  let component;

  beforeEach(() => {
    component = new Clicker();
  });

  it('should be able to mount to document DOM:', () => {
    document.body.append(new Clicker());

    const clicker = document.querySelector('my-clicker');
    const h3title = clicker.querySelector('h3');

    expect(h3title.textContent).toEqual('This is my Clicker');
  });

  it('should start with counter === 0', () => {
    const counterNo = component.querySelector('.no');

    expect(counterNo.textContent).toEqual('0');
  });

  it('should increase counter by one on each button click', () => {
    const counterNo = component.querySelector('.no');
    const button = component.querySelector('.clickerBtn');

    button.click();
    button.click();
    button.click();

    expect(counterNo.textContent).toEqual('3');
  });
});
