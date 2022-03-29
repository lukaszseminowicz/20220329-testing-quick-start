class RPSGame extends HTMLElement {
  constructor(onPlayerMove) {
    super();
    this.onPlayerMove = onPlayerMove;
    this.innerHTML = `
			<div>
					<h3 id="result"></h3>
			</div>
			<div>
				 <button id="rock">Rock</button>
				 <button id="paper">Paper</button>
				 <button id="scissors">Scissors</button>
			</div>
		`;
    this.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', () => {
        this.handleUserChoice(btn.id);
      });
    });
  }

  handleUserChoice(userChoice) {
    const round = this.onPlayerMove(userChoice);
    const $result = this.querySelector('#result');
    const computerChoice = 'computer choice is: ' + round.playerPick;
    const result = {
      'game-win': 'You Won, ',
      'game-draw': 'Game Draw, ',
      'game-loose': 'You Loose, ',
    };
    $result.textContent = result[round.result] + computerChoice;
  }
}

customElements.define('rps-game', RPSGame);

export default RPSGame;
