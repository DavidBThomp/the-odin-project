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
  } else if (playerChoice === "Rock" && computerChoice === "Scissor") {
    console.log("Player Wins! Your Rock beats Scissor.");
  } else if (playerChoice === "Paper" && computerChoice === "Rock") {
    console.log("Player Wins! Your Paper beats Rock.");
  } else if (playerChoice === "Scissor" && computerChoice === "Paper") {
    console.log("Player Wins! Your Scissor beats Paper.");
  } else if (playerChoice === computerChoice) {
    console.log("It's a tie!");
  } else {
    console.log(
      `Computer Wins, as always. Computers ${computerChoice} beats ${playerChoice}.`
    );
  }
}

function playGame() {
  let rounds = Number(prompt("How many rounds do you want to play?"));
  let i = 0;
  while (i != rounds) {
    playSingleGame();
  }
}

playSingleGame();
