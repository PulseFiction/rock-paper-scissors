// User inputs their choice, Rock paper or scissors
// The computer randomly chooses their choice of the same
// both are returned and compared together to see who wins
// Rock beats scissors
// Paper beats rock
// Scissors beats paper


// Random function lets me add 3 choices (0, 1 and 2) instead of just 0 an 1
function getRandom(max) {
    return Math.floor(Math.random() * max);
}

function computerPlay(){
    let cpuRock = 'Rock';
    let cpuScissors = 'Scissors';
    let cpuPaper = 'Paper';
    
    if (getRandom(3) === 0) {
        return cpuRock;
    } else if (getRandom(3) === 1) {
        return cpuScissors;
    } else {
        return cpuPaper;
    }
};

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const display = document.querySelector('.result')




rock.addEventListener('click', () => {
    let cpuChoice = computerPlay();
    if (cpuChoice === 'Scissors') {
        answer = 'CPU picked Scissors! Rock beats Scissors, you win!';
        display.style.backgroundColor = '#93ffa5'
    } else if (cpuChoice === 'Paper') {
         answer = 'CPU picked Paper! Paper covers Rock, you lose!';
         display.style.backgroundColor = '#ff5c5c'
    } else {
         answer = 'CPU picked Rock! It\'s a draw!'
    }
    display.textContent = answer;
});

paper.addEventListener('click', () => {
    
    let cpuChoice = computerPlay();
    if (cpuChoice === 'Rock') {
        answer = 'CPU picked Rock! Paper covers Rock, you win!';
        display.style.backgroundColor = '#93ffa5'
    } else if (cpuChoice === 'Scissors') {
        answer = 'CPU picked Scissors! Scissors cuts Paper, you lose!';
        display.style.backgroundColor = '#ff5c5c'
    } else {
        answer = 'CPU picked Paper! It\'s a draw!';
    }
    display.textContent = answer;
});


scissors.addEventListener('click', () => {
    
    let cpuChoice = computerPlay();
    if (cpuChoice === 'Paper') {
        answer = 'CPU picked Paper! Scissors cuts Paper, you win!';
        display.style.backgroundColor = '#93ffa5'
    } else if (cpuChoice === 'Scissors') {
        answer = 'CPU picked Rock! Rock crushes Scissors, you lose!';
        display.style.backgroundColor = '#ff5c5c'
    } else {
        answer = 'CPU picked Scissors! It\'s a draw!';
    }
    display.textContent = answer;
    
});




















/* function playRound(rock, paper, scissors) {
    let cpuChoice = computerPlay();
    let choice = 
    
    if (choice === rock && cpuChoice === 'Scissors') {
        answer = 'Rock beats Scissors, you won!'
         
    } else if (choice == scissors && cpuChoice === 'Rock'){
        answer ='Rock beats Scissors, you lose!'
        
    } else if (choice == scissors && cpuChoice === 'Paper'){
        answer = 'Scissors beats Paper, you won!'
        
    } else if (choice == paper && cpuChoice === 'Scissors'){
        answer = 'Scissors beats Paper, you lose!'
        
    } else if (choice == paper && cpuChoice === 'Rock'){
        answer = 'Paper covers Rock, you win!'
        
    } else if (choice == rock && cpuChoice === 'Paper'){
        answer = 'Paper covers Rock, you lose!'

    } else if (choice === cpuChoice) {
        answer = 'Same choice! Go again!'
    }
    else {
        answer = 'Please enter a valid choice.'
    }
    console.log(answer);
}; */






