// Global variables nevessary for tracking score
let playerNumberWins = 0;
let computerNumberWins = 0;
let numberOfTie = 0;

let selections = document.querySelectorAll(".selections");
selections.forEach((selection) =>
  selection.addEventListener("click", function (e) {
    const player = e.target.getAttribute("id");
    const computer = computerChoice();
    playRound(player, computer);
    changeMessage(player.toUpperCase(), computer.toUpperCase());
  })
);

// Function that allows computer to choose
let computerChoice = () => {
  let randomNumber = Math.random() * 3;
  if (randomNumber <= 1) {
    return "Rock".toLowerCase();
  } else if (randomNumber > 1 && randomNumber < 2) {
    return "Paper".toLowerCase();
  } else {
    return "Scissors".toLowerCase();
  }
};

// Function that allows the player to choose
// let playerChoice = () => {

// };

// Funtions that changes the message displayed
let changeMessage = (player, computer) => {
  const message = document.querySelector(".message");
  message.textContent = `Player chooses ${player} and Computer chooses ${computer}`;
};

// Funtion that plays a round, modifies global score variable of outcome
let playRound = (playerSelection, computerSelection) => {
  if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      console.log("Computer Wins!");
      computerNumberWins++;
    } else if (computerSelection === "scissors") {
      console.log("Player Wins!");
      playerNumberWins++;
    } else {
      console.log("It's a Tie!");
      numberOfTie++;
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      console.log("Player Wins!");
      playerNumberWins++;
    } else if (computerSelection === "scissors") {
      console.log("Computer Wins");
      computerNumberWins++;
    } else {
      console.log("It's a Tie!");
      numberOfTie++;
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      console.log("Computer Wins!");
      computerNumberWins++;
    } else if (computerSelection === "paper") {
      console.log("Player Wins");
      playerNumberWins++;
    } else {
      console.log("It's a Tie!");
      numberOfTie++;
    }
  } else {
    console.log("Cannot be determined!");
  }
};

// Funtion that displays the current score
let displayOutcome = () => {};

// Function used to reset the global score variables for a new game
let resetScore = () => {
  playerNumberWins = 0;
  computerNumberWins = 0;
  numberOfTie = 0;
};

//Function that plays an entire game
// let game = () => {
//   playRound(playerChoice, computerChoice);
//   resetScore();
// };
