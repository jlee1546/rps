// Global variables nevessary for tracking score
let playerNumberWins = 0;
let computerNumberWins = 0;
let numberOfTie = 0;
let roundNumber = 1;

const selections = document.querySelectorAll(".selections");
selections.forEach((selection) =>
  selection.addEventListener("click", function (e) {
    const player = e.target.getAttribute("id");
    const computer = computerChoice();
    const round = playRound(player, computer);
    changeMessage(player.toUpperCase(), computer.toUpperCase(), round);
    updateScoreBoard();
    incrementRoundNUmber();
    checkForWinner();
  })
);

// Function that allows computer to choose
const computerChoice = () => {
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
const changeMessage = (player, computer, round) => {
  const message = document.querySelector(".message");
  message.textContent = `Player chooses ${player} and Computer chooses ${computer}! 
  ${round}`;
};

// Funtion that plays a round, modifies global score variable of outcome
const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      computerNumberWins++;
      return "Computer Wins!";
    } else if (computerSelection === "scissors") {
      playerNumberWins++;
      return "Player Wins!";
    } else {
      numberOfTie++;
      return "It's a Tie!";
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      playerNumberWins++;
      return "Player Wins!";
    } else if (computerSelection === "scissors") {
      computerNumberWins++;
      return "Computer Wins";
    } else {
      numberOfTie++;
      return "It's a Tie!";
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      computerNumberWins++;
      return "Computer Wins!";
    } else if (computerSelection === "paper") {
      playerNumberWins++;
      return "Player Wins";
    } else {
      numberOfTie++;
      return "It's a Tie!";
    }
  } else {
    return "Cannot be determined!";
  }
};

// Funtion that displays the current score
const updateScoreBoard = () => {
  const playerScore = document.querySelector(".player .display1");
  const computerScore = document.querySelector(".computer .display1");
  const round = document.querySelector(".round .display2");
  const tie = document.querySelector(".tie .display2");

  playerScore.textContent = playerNumberWins;
  computerScore.textContent = computerNumberWins;
  round.textContent = roundNumber;
  tie.textContent = numberOfTie;
};

//Function to increment the round number
const incrementRoundNUmber = () => {
  roundNumber += 1;
};

//Function that changes display message after a winner is determined
const declareWinner = (winner) => {
  const message = document.querySelector(".message");
  if (winner === "player") {
    message.textContent = "Player Wins!";
  } else {
    message.textContent = "Computer Wins!";
  }
};

//Function to check for winner
const checkForWinner = () => {
  const playerScore = playerNumberWins;
  const computerScore = computerNumberWins;

  if (playerScore === 5) {
    declareWinner("player");
    resetScore();
    updateScoreBoard();
  } else if (computerScore === 5) {
    declareWinner("computer");
    updateScoreBoard();
    resetScore();
  } else {
    return;
  }
};

// Function used to reset the global score variables for a new game
const resetScore = () => {
  playerNumberWins = 0;
  computerNumberWins = 0;
  numberOfTie = 0;
  roundNumber = 1;
};

//Function that plays an entire game
// let game = () => {
//   playRound(playerChoice, computerChoice);
//   resetScore();
// };
