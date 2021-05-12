// Select HTML elements

const playerStatus = document.querySelector(".status");
const resetButton = document.querySelector(".reset");
const gridCell = document.querySelector(".grid");

// Constant variables

const xSymb = "Χ";
const oSymb = "◯";

// Function letter2Symb

const letter2Symb = (letter) => (letter === "x" ? xSymb : oSymb);

// Function playerWin

const playerWin = (letter) => {
  gameIsLive = false;
  winner = letter;
  if (winner === "x")
    playerStatus.innerHTML = `Player ${letter2Symb(winner)} is the WINNER!`;
  else playerStatus.innerHTML = `Player ${letter2Symb(winner)} is the WINNER!`;
};
