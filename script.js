/* PSEUDO
CREATE A COMPUTER THAT GENERATES ONE OF THREE RANDOM CHOICES
CREATE A FUNCTION THAT PLAYS ONE ROUND VS COMPUTERPLAYS.
CREATE A FUNCTION TO STORE PLAYER NAME
CREATE A FUNCTION THAT PLAYS 5 ROUNDS AND STORES THE SCORE OF BOTH
*/

// GLobal variables
let playerScore = 0;
let computerScore = 0;

function computerPlay() { // Computer randomly chooses.
    let randomSelection = ["rock", "paper", "scissors"]
    let randomChoice = randomSelection[Math.floor(Math.random() * randomSelection.length)]
    return randomChoice;
}

function playRound (playerSelection, computerSelection) { // Play a single round of the game
    if (playerSelection === "rock") {
        if(computerSelection === "scissors") {
            return playerScore++,
            "You win! Rock beats scissors!";
        } else if (computerSelection === "paper") {
            return computerScore++,
            "You lose! Paper beats rock!";
        } else if (playerSelection === computerSelection) {
            return "It's a tie!";
        }
    }

    if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return playerScore++,
            "You win! Paper beats rock!";
        } else if (computerSelection === "scissors") {
            return computerScore++,
            "You lose! Scissors beats paper";
        } else if (playerSelection === computerSelection) {
            return "It's a tie!";
        }
    }
    
    if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            return playerScore++,
            "You win! Scissors beats paper!";
        } else if (computerSelection === "rock") {
            return computerScore++,
            "You lose! Rock beats scissors!";
        } else if (playerSelection === computerSelection) {
            return "It's a tie!";
        }
    }
}

function getScore() { // Get player and computer score.
    if (playerScore > computerScore) {
        return "Player Wins!";
    } else if (computerScore > playerScore) {
        return "Computer wins!";
    } else if (playerScore === computerScore) {
        return "Draw!";
    }
}

function getPlayerName() { // Ask the player for his/her name.
    let playerName = prompt("What is your name?");
    alert(`Welcome, ${playerName}, press OK to play!`);

}

function game() { // Call playround func. 5 times to play 5 rounds.
    getPlayerName();
    for (i = 0; i < 5; i++) {
        playerSelection = prompt("Rock, paper or scissors?").toLowerCase();
        console.log(playRound(playerSelection, computerPlay()));
    }
    console.log(getScore());
}


game(); // Execute the game.