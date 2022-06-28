// Global variables nevessary for tracking score
let playerNumberWins = 0;
let computerNumberWins = 0;
let numberOfTie = 0;

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
let playerChoice = () => {
  let playerSelection = prompt("Rock,Paper, or Scissors?");
  return playerSelection.toLowerCase();
};

// Funtion that plays a round, modifies global score variable of outcome
let playRound = () => {
  const playerSelection = playerChoice();
  const computerSelection = computerChoice();

  console.log(`Computer chooses ${computerSelection}`);
  console.log(`Player chooses ${playerSelection}`);

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
let displayOutcome = () => {
  return `
  Player Score : ${playerNumberWins}
  Computer Score : ${computerNumberWins}
  Tie Score : ${numberOfTie}`;
};

// Function used to reset the global score variables for a new game
let resetScore = () => {
  playerNumberWins = 0;
  computerNumberWins = 0;
  numberOfTie = 0;
};

// Function that plays an entire game
let game = () => {
  for (let i = 1; i <= 5; i++) {
    playRound();
  }
  console.log(displayOutcome());
  resetScore();
};
