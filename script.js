let computerChoice = () => {
  let randomNumber = Math.random() * 3;
  if (randomNumber <= 1) {
    console.log(randomNumber);
    return "Rock".toLowerCase();
  } else if (randomNumber > 1 && randomNumber < 2) {
    console.log(randomNumber);
    return "Paper".toLowerCase();
  } else {
    console.log(randomNumber);
    return "Scissors".toLowerCase();
  }
};

let playerChoice = () => {
  let playerSelection = prompt("Rock,Paper, or Scissors?");
  return playerSelection.toLowerCase();
};

let playRound = () => {
  const playerSelection = playerChoice();
  const computerSelection = computerChoice();

  console.log(`Computer chooses ${computerSelection}`);
  console.log(`Player chooses ${playerSelection}`);

  if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      console.log("Computer Wins!");
    } else if (computerSelection === "scissors") {
      console.log("Player Wins!");
    } else {
      console.log("It's a Tie!");
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      console.log("Player Wins!");
    } else if (computerSelection === "scissors") {
      console.log("Computer Wins");
    } else {
      console.log("It's a Tie!");
    }
  } else {
    if (computerSelection === "rock") {
      console.log("Computer Wins!");
    } else if (computerSelection === "paper") {
      console.log("Player Wins");
    } else {
      console.log("It's a Tie!");
    }
  }
};
