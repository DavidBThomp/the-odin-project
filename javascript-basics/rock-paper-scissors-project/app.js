console.log("Hello world");

function getComputerChoice() {
  let computerChoice = Math.random();
  if (computerChoice <= 0.33) {
    return (computerChoice = "Rock");
  } else if (computerChoice > 0.33 && computerChoice <= 0.66) {
    return (computerChoice = "Paper");
  } else if (computerChoice > 0.66) {
    return (computerChoice = "Scissor");
  }
}

function getPlayerChoice() {
  let playerChoice = prompt("Rock, Paper, or Scissors?").toLowerCase().trim();
  if (playerChoice === "rock" || playerChoice === "r") {
    return "Rock";
  } else if (playerChoice === "paper" || playerChoice === "p") {
    return "Paper";
  } else if (
    playerChoice === "scissor" ||
    playerChoice === "s" ||
    playerChoice === "scissors"
  ) {
    return "Scissor";
  } else {
    return "Input not recognized.";
  }
}

function playSingleGame(
  computerChoice = getComputerChoice(),
  playerChoice = getPlayerChoice()
) {
  if (playerChoice === "Input not recognized.") {
    console.log(playerChoice);
    playSingleGame();
  } else if (
    (playerChoice === "Rock" && computerChoice === "Scissor") ||
    (playerChoice === "Paper" && computerChoice === "Rock") ||
    (playerChoice === "Scissor" && computerChoice === "Paper")
  ) {
    console.log(`Player Wins! Your ${playerChoice} beats ${computerChoice}.`);
    return "playerWin";
  } else if (playerChoice === computerChoice) {
    console.log("It's a tie!");
    return "tie";
  } else {
    console.log(
      `Computer Wins, as always. Computers ${computerChoice} beats ${playerChoice}.`
    );
    return "computerWin";
  }
}

function playGame() {
  let rounds = Number(prompt("How many rounds do you want to play?"));
  let playerWins = 0;
  let computerWins = 0;
  let tie = 0;
  let i = 0;

  while (i < rounds) {
    i++;
    let game = playSingleGame();

    if (game === "playerWin") {
      playerWins++;
    } else if (game === "computerWin") {
      computerWins++;
    } else if (game === "tie") {
      tie++;
    }
    console.log(`Score: W:${playerWins} L:${computerWins} T:${tie}`);
  }
}

playGame();
