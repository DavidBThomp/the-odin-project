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

// function getPlayerChoice() {
//   let playerChoice = prompt("Rock, Paper, or Scissors?").toLowerCase().trim();
//   if (playerChoice === "rock" || playerChoice === "r") {
//     return "Rock";
//   } else if (playerChoice === "paper" || playerChoice === "p") {
//     return "Paper";
//   } else if (
//     playerChoice === "scissor" ||
//     playerChoice === "s" ||
//     playerChoice === "scissors"
//   ) {
//     return "Scissor";
//   } else {
//     return "Input not recognized.";
//   }
// }

function playSingleGame(playerPick, computerChoice = getComputerChoice()) {
  const h1 = document.createElement("h1");
  const body = document.querySelector("body");

  let h1Check = document.querySelector("h1");
  if (!h1Check) {
    body.appendChild(h1);
  }
  h1Check = document.querySelector("h1");

  if (playerPick === "Input not recognized.") {
    playSingleGame();
  } else if (
    (playerPick === "Rock" && computerChoice === "Scissor") ||
    (playerPick === "Paper" && computerChoice === "Rock") ||
    (playerPick === "Scissor" && computerChoice === "Paper")
  ) {
    h1Check.textContent = `Player Wins! Your ${playerPick} beats ${computerChoice}.`;
    return "playerWin";
  } else if (playerPick === computerChoice) {
    h1Check.textContent = `Both picked ${playerPick}, It's a tie!`;
    return "tie";
  } else {
    h1Check.textContent = `Computer Wins, as always. Computers ${computerChoice} beats ${playerPick}.`;
    return "computerWin";
  }
}

// Global Declare so they keep values
let playerWins = 0;
let computerWins = 0;
let tie = 0;

function playGame(playerPick) {
  let game = playSingleGame(playerPick);

  if (game === "playerWin") {
    playerWins++;
  } else if (game === "computerWin") {
    computerWins++;
  } else if (game === "tie") {
    tie++;
  }

  const divCheck = document.querySelector(".result");
  const body = document.querySelector("body");

  if (!divCheck) {
    const div = document.createElement("div");
    div.classList.add("result");
    body.appendChild(div);
    const divCheck = document.querySelector(".result");
    divCheck.textContent = `Score: W:${playerWins} L:${computerWins} T:${tie}`;
  } else {
    divCheck.textContent = `Score: W:${playerWins} L:${computerWins} T:${tie}`;
  }

  if (playerWins > 4 || computerWins > 4) {
    divCheck.textContent = `Game Over! Score: W:${playerWins} L:${computerWins} T:${tie}`;
    rock.disabled = true;
    paper.disabled = true;
    scissor.disabled = true;

    const restartButton = document.createElement("button");
    restartButton.textContent = `Restart`;
    restartButton.classList.add("restart");
    restartButton.setAttribute("onClick", "restartGame()");
    body.appendChild(restartButton);
  }
}

function restartGame() {
  const restartButton = document.querySelector(".restart");
  restartButton.remove();
  rock.disabled = false;
  paper.disabled = false;
  scissor.disabled = false;

  const divCheck = document.querySelector(".result");
  divCheck.textContent = ``;

  playerWins = 0;
  computerWins = 0;
  tie = 0;

  let h1Check = document.querySelector("h1");
  h1Check.textContent = ``;
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");

rock.addEventListener("click", () => playGame((userPick = "Rock")));
paper.addEventListener("click", () => playGame((userPick = "Paper")));
scissor.addEventListener("click", () => playGame((userPick = "Scissor")));
