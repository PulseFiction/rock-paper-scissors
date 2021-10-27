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


// console.log(getRandom(3));


function computerPlay(){
    let cpuRock = 'Rock'
    let cpuScissors = 'Scissors'
    let cpuPaper = 'Paper'
    
    // getRandom(3) - Don't have to call the function for it to work
    
    if (getRandom(3) === 0) {
        return cpuRock;
    } else if (getRandom(3) === 1) {
        return cpuScissors
    } else {
        return cpuPaper
    }

    
}

function playRound() {
    let choice = prompt('Choose Rock, Paper or Scissors!')
    let cpuChoice = computerPlay();
    choice = choice.toLowerCase()
    console.log(`You have chosen ${choice}! The computer has
    chosen ${cpuChoice}!`)

    if (choice == 'rock' && cpuChoice === 'Scissors') {
        let answer = 'Rock beats Scissors, you won!'
        return answer;
    } else if (choice == 'scissors' && cpuChoice === 'Rock'){
        let answer ='Rock beats Scissors, you lose!'
        return answer;
    } else if (choice == 'scissors' && cpuChoice === 'Paper'){
        let answer = 'Scissors beats Paper, you won!'
        return answer;
    } else if (choice == 'paper' && cpuChoice === 'Scissors'){
        let answer = 'Scissors beats Paper, you lose!'
        return answer;
    } else if (choice == 'paper' && cpuChoice === 'Rock'){
        let answer = 'Paper covers Rock, you win!'
        return answer;
    } else if (choice == 'rock' && cpuChoice === 'Paper'){
        let answer = 'Paper covers Rock, you lose!'
        return answer;
    } else if (choice === cpuChoice) {
        return 'Same choice! Go again!'
    }
    else {
        return 'Please enter a valid choice.'
    }

    
    
}

console.log(playRound())

function game() {
    let rounds = 5;
    let score = 0;
    let cpuScore = 0;
    for (let i = 0 ; i < rounds ; i++) {
        playRound()
        if (answer.includes('lose')){
            cpuScore += 1;
        } else if (answer.includes('win')){
            score += 1;
        } 

    }
    console.log(`The final score is: You - ${score} points! CPU - ${cpuScore} points!`)
}

game();