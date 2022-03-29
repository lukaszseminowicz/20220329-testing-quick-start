let choices = ['rock', 'paper', 'scissors'];

function possibleChoices(newChoices) {
  choices = newChoices;
}

function makeAMove(choice1, choice2) {
  const hasChoice = choices.includes(choice1);
  const hasSecondChoice = choices.includes(choice2);
  if (!hasChoice) {
    throw new Error(`There is no "${choice1}" option in game choices!`);
  }
  if (!hasSecondChoice) {
    throw new Error(`There is no "${choice2}" option in game choices!`);
  }
  if (choice1 === choice2) {
    return 'game-draw';
  }
  const choiceIdx = choices.indexOf(choice1);
  const half = Math.floor(choices.length / 2);
  const strongerChoices = [];
  for (let stronger = choiceIdx + 1; stronger <= choiceIdx + half; stronger++) {
    strongerChoices.push(choices[stronger % choices.length]);
  }
  return strongerChoices.includes(choice2) ? 'game-loose' : 'game-win';
}

function randomChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function playWithComputer(yourChoice) {
  const playerPick = randomChoice();
  const result = makeAMove(yourChoice, playerPick);
  return {
    playerPick,
    result,
  };
}

export { possibleChoices, makeAMove, randomChoice, playWithComputer };
