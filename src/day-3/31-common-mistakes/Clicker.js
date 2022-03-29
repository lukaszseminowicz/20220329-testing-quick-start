export class Clicker extends HTMLElement {
  template = `
	  <p>
	  		You are on the <span data-no> 0 </span> floor!
		</p>
		<button data-btn-restart> Restart </button>
		<button data-btn-up> Go up </button>
	`;
  counter = 0;

  constructor() {
    super();
    this.innerHTML = this.template;
  }

  connectedCallback() {
    this.numberRef = this.querySelector('[data-no]');
    this.querySelector('[data-btn-up]').addEventListener('click', () => {
      this.riseCounter();
      this.updateView();
    });
    this.querySelector('[data-btn-restart]').addEventListener('click', () => {
      this.resetCounter();
      this.updateView();
    });
  }

  riseCounter() {
    this.counter++;
  }

  resetCounter() {
    this.counter = 0;
  }

  updateView() {
    this.numberRef.textContent = this.counter;
  }
}

customElements.define('my-clicker', Clicker);
