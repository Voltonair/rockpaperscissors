let buttons = document.querySelectorAll('[data-selection]');
let userSelection = document.querySelector('.user-selection');
let computerSelection = document.querySelector('.computer-selection');
let displayUserScore = document.querySelector('.user-score');
let displayComputerScore = document.querySelector('.computer-score');
let displayResultMessage = document.querySelector('.result');

let storeUserMessage = 'Your score: ';
let storeComputerMessage = 'Computer score: ';
let storeDefaultWinnerMessage = 'And the winner is... ';

let userScore = '';
let computerScore = '';

const disableMessage = buttons.length;

function randomChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
}

function setGame(player, computer) {
    if (computer === 'rock') {
        if (player === 'paper') {
            userScore++;
            displayUserScore.innerHTML = storeUserMessage + userScore;
        } else if (player === 'scissors') {
            computerScore++;
            displayComputerScore.innerHTML = storeComputerMessage + computerScore;
        }
    }
    if (computer === 'paper') {
        if (player === 'scissors') {
            userScore++;
            displayUserScore.innerHTML = storeUserMessage + userScore;
        } else if (player === 'rock') {
            computerScore++;
            displayComputerScore.innerHTML = storeComputerMessage + computerScore;
        }
    }
    if (computer === 'scissors') {
        if (player === 'rock') {
            userScore++;
            displayUserScore.innerHTML = storeUserMessage + userScore;
        } else if (player === 'paper') {
            computerScore++;
            displayComputerScore.innerHTML = storeComputerMessage + computerScore;
        }
    }
    if (computer === player) return;
}

function winnerIs() {
    if (userScore >= 3) {
        if (userScore > computerScore) {
            displayResultMessage.textContent = storeDefaultWinnerMessage + 'You';
            disableGame();
            resetButton();
        }
    } else if (computerScore >= 3) {
        if (computerScore > userScore) {
            displayResultMessage.textContent = storeDefaultWinnerMessage + 'Computer';
            disableGame();
            resetButton();
        }
    }
}

function disableGame() {
    for (let i = 0; i < disableMessage; i++) {
        buttons[i].disabled = true;
    }
}

function resetButton() {
    let resetDiv = document.querySelector('.reset');
    let resetButton = document.createElement('button');
    resetButton.className = 'btn btn-success';
    resetButton.textContent = 'RESET GAME';
    resetDiv.appendChild(resetButton);
    resetButton.addEventListener('click', () => {
        for (let i = 0; i < disableMessage; i++) {
            buttons[i].disabled = false;
            resetDiv.innerHTML = '';
            userScore = '';
            computerScore = ''
            displayUserScore.innerHTML = storeUserMessage;
            displayComputerScore.innerHTML = storeComputerMessage;
            displayResultMessage.innerHTML = storeDefaultWinnerMessage;
        }
    })
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let userChoice = button.dataset.selection;
        let computerChoice = randomChoice();
        userSelection.innerHTML = "<img src=imgs/"+userChoice+".png>";
        computerSelection.innerHTML = "<img src=imgs/"+computerChoice+".png>";
        setGame(userChoice, computerChoice);
        winnerIs();
    })
})