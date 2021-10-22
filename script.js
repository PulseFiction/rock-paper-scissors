// Randomises 3 integers, 0, 1 and 2.
function getRandomInt(max) {
  return Math.floor(Math.random() * max)
}

// Computer chooses Rock, Paper or Scissors randomly
function computerPlay() {
  let computerChoice = getRandomInt(3);
  if (computerChoice === 0) {
    return 'Rock';
  } else if (computerChoice === 1) {
    return 'Paper';
  } else {
    return 'Scissors';
  }
}

// console.log(computerPlay());


let points = 0;
let cpuPoints = 0;
// Plays a round of Rock, Paper Scissors
function playRound() {
  let choice = prompt('Choose Rock, paper or scissors.').toLowerCase();
  let computerSelection = computerPlay();
  let cpuChoice = computerSelection.toLowerCase();

  console.log(choice);
  console.log(cpuChoice);
  if (choice === 'rock' && cpuChoice === 'scissors') {
    points += 1;
    return 'You chose Rock, CPU chose Scissors, you win!';

  } else if (choice === 'scissors' && cpuChoice === 'paper') {
    points += 1;
    return 'You chose Scissors, CPU chose Paper, you win!';

  } else if (choice === 'paper' && cpuChoice === 'rock') {
    points += 1;
    return 'You chose Paper, CPU chose Rock, you win!';

  } else if (cpuChoice === 'rock' && choice === 'scissors') {
    cpuPoints += 1;
    return 'You chose Scissors, CPU chose Rock, you lose!';
  } else if (cpuChoice === 'scissors' && choice === 'paper') {
    cpuPoints += 1;
    return 'You chose Paper, CPU chose Scissors, you lose!';
  } else if (cpuChoice === 'paper' && choice === 'rock') {
    cpuPoints += 1;
    return 'You chose Rock, CPU chose Paper, you lose!';
  } else if (choice == cpuChoice) {
    return 'You chose the same as the CPU, go again!';
  } else {
    return 'Please enter a valid choice.';
  }
}



function game() {
  for (let i = 0; i < 5; i++) {
    console.log(playRound());
  }
  if (points < cpuPoints) {
    console.log(`You have ${points} points! The computer has ${cpuPoints}, you lose the game!`)
  } else {
    console.log(`You have ${points} points! The computer has ${cpuPoints}, you win the game!`)
  }
	return 'Thanks for playing!';



}

console.log(game());
