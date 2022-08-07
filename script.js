// DOM variables
const displayName = document.querySelector("#display-name");
const displayUser = document.querySelector("#display-user");
const displayIA = document.querySelector("#display-computer");
const selectBtn = document.querySelectorAll(".btn");
const displayUserScore = document.querySelector("#user-score");
const displayComputerScore = document.querySelector("#computer-score");
const userForm = document.querySelector("#user-form");
const textBox = document.querySelector("#text-box");
const displayWinner = document.querySelector("#display-winner");

// Get audio variable
const audio = document.querySelectorAll("[data-option]");

// Get score and player names
let playerName = "";
let scorePlayer = 0;
let scoreIA = 0;


// IA gets a random choice
function getRandomNum() {
    const choices = ["rock", "paper", "scissors"];
    const randomNum = Math.floor(Math.random () * choices.length);
    return choices[randomNum];
}

// Get player's name value
function regInput (e) {
    const value = e.value;
    playerName = value;
}

// Get and store player's name
userForm.addEventListener("submit", (e) => {
    e.preventDefault();
    displayName.innerHTML = "Hi " + playerName + ", " + "let's play!";
    textBox.value = "";
})

// Play rounds
function playGame(userChoice, computerChoice) {
    if (userChoice === "rock") {
        if (computerChoice === "scissors") {
            scorePlayer++
            displayWinner.innerHTML = "You win, rock beats scissors";
        } else if (computerChoice === "paper") {
            scoreIA++
            displayWinner.innerHTML = "You lose, paper beats rock";
        } else if (userChoice === computerChoice) {
            displayWinner.innerHTML = "It's a tie!";
        }
    }

    if (userChoice === "paper") {
        if (computerChoice === "rock") {
            scorePlayer++
            displayWinner.innerHTML = "You win, paper beats rock";
        } else if (computerChoice === "scissors") {
            scoreIA++
            displayWinner.innerHTML = "You lose, scissors beats paper";
        } else if (userChoice === computerChoice) {
            displayWinner.innerHTML = "It's a tie!";
        }
    }

    if (userChoice === "scissors") {
        if (computerChoice === "paper") {
            scorePlayer++
            displayWinner.innerHTML = "You win, scissors beats paper";
        } else if (computerChoice === "rock") {
            scoreIA++
            displayWinner.innerHTML = "You lose, rock beats scissors";
        } else if (userChoice === computerChoice) {
            displayWinner.innerHTML = "It's a tie!"; 
        }
    }
}

// Get scores and make it sound.
function getScore () {

    // Get these 2 functions to set a time out
    function getWinningSound () {
        audio[0].play();
    }

    function getLosingSound () {
        audio[1].play();
    }
    //

    if (scorePlayer === 3) {
        if (playerName !== "") {
            displayWinner.innerHTML = playerName + " wins!!!";
        } else {
            displayWinner.innerHTML = "John Doe wins!!!";
        }
        setTimeout(getWinningSound, 700);
    }

    if (scoreIA === 3) {
        displayWinner.innerHTML = "Computer wins, you lose!";
        setTimeout(getLosingSound, 700);
    }
}

// Convert nodelist into array for the sake of cleaning.
const userSelection = Array.from(selectBtn);

// For each button you click...
userSelection.forEach(button => {
    button.addEventListener("click", () => {
        const computerChoice = getRandomNum();
        const userChoice = button.dataset.select;

        playGame(userChoice, computerChoice);
        getScore();

        displayUserScore.innerHTML = scorePlayer;
        displayComputerScore.innerHTML = scoreIA;
        displayUser.innerHTML = "<img src=imgs/"+userChoice+".png>";
        displayIA.innerHTML = "<img src=imgs/"+computerChoice+".png>";

        if (scorePlayer === 3 || scoreIA === 3) {
            const restartImg = document.createElement("img");
            restartImg.src = "imgs/repeat.png";
            restartImg.alt = "Restart button";

            const restartDiv = document.querySelector("#show-button");
            const restartBtn = document.createElement("button")
            restartBtn.classList = "restart-button";
            restartBtn.appendChild(restartImg);
            
            // Get a function with the restart button append and set time out
            function getRestartButton () {
                restartDiv.appendChild(restartBtn);
            }
            setTimeout(getRestartButton, 2500);

            // Creates a var with all 3 buttons length and a foor-loop to stop the count
            const length = selectBtn.length;
            for (let i = 0; i < length; i++) {
                selectBtn[i].disabled = true;
            }
            //

            // Get event foe the restart button
            restartBtn.addEventListener("click", () => {
                for (let i = 0; i < length; i++) {
                    scoreIA = 0;
                    scorePlayer = 0;
                    displayComputerScore.innerHTML = "0";
                    displayUserScore.innerHTML = "0";
                    displayUser.innerHTML = "<img src=imgs/placeholder.png>";
                    displayIA.innerHTML = "<img src=imgs/placeholder.png>";
                    restartDiv.innerHTML = "";
                    displayWinner.innerHTML = "Who will win this time?";
                }

                for (let i = 0; i < length; i++) {
                    selectBtn[i].disabled = false;
                }
            })
        }
    })
})