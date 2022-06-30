// Global variables nevessary for tracking score
let playerNumberWins = 0;
let computerNumberWins = 0;
let numberOfTie = 0;

let selections = document.querySelectorAll(".selections");
selections.forEach((selection) =>
  selection.addEventListener("click", function (e) {
    const player = e.target.getAttribute("id");
    const computer = computerChoice();
    const round = playRound(player, computer);
    changeMessage(player.toUpperCase(), computer.toUpperCase(), round);
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

// Funtions that changes the message displayed
let changeMessage = (player, computer, round) => {
  const message = document.querySelector(".message");
  message.textContent = `Player chooses ${player} and Computer chooses ${computer}`;
  setTimeout((message.textContent = round), 10000);
};

// Funtion that plays a round, modifies global score variable of outcome
let playRound = (playerSelection, computerSelection) => {
  if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      return "Computer Wins!";
      computerNumberWins++;
    } else if (computerSelection === "scissors") {
      return "Player Wins!";
      playerNumberWins++;
    } else {
      return "It's a Tie!";
      numberOfTie++;
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      return "Player Wins!";
      playerNumberWins++;
    } else if (computerSelection === "scissors") {
      return "Computer Wins";
      computerNumberWins++;
    } else {
      return "It's a Tie!";
      numberOfTie++;
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      return "Computer Wins!";
      computerNumberWins++;
    } else if (computerSelection === "paper") {
      return "Player Wins";
      playerNumberWins++;
    } else {
      return "It's a Tie!";
      numberOfTie++;
    }
  } else {
    return "Cannot be determined!";
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
