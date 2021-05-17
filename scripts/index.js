// Select HTML elements

const playerStatus = document.querySelector(".status");
const resetButton = document.querySelector(".reset");
const gridCell = document.querySelectorAll(".cell");

// Constant variables

const xSymb = "Χ";
const oSymb = "◯";
let gameIsLive = true;
let xIsNext = true;

// Function letter2Symb

const letter2Symb = (letter) => (letter === "x" ? xSymb : oSymb);

// Function playerWin

const playerWin = (letter) => {
  gameIsLive = false;
  if (letter === "x")
    playerStatus.innerHTML = `Player ${letter2Symb(letter)} is the WINNER!`;
  else
    playerStatus.innerHTML = `<span>Player ${letter2Symb(
      letter
    )} is the WINNER!</span>`;
};

// Function statusCheck

const statusCheck = () => {
  const topLeft = gridCell[0].classList[1];
  const topMiddle = gridCell[1].classList[1];
  const topRight = gridCell[2].classList[1];
  const middleLeft = gridCell[3].classList[1];
  const middleMiddle = gridCell[4].classList[1];
  const middleRight = gridCell[5].classList[1];
  const bottomLeft = gridCell[6].classList[1];
  const bottomMiddle = gridCell[7].classList[1];
  const bottomRight = gridCell[8].classList[1];

  if (topLeft && topLeft === topMiddle && topLeft === topRight) {
    playerWin(topLeft);
    gridCell[0].classList.add("win");
    gridCell[1].classList.add("win");
    gridCell[2].classList.add("win");
  } else if (
    middleLeft &&
    middleLeft === middleMiddle &&
    middleLeft === middleRight
  ) {
    playerWin(middleLeft);
    gridCell[3].classList.add("win");
    gridCell[4].classList.add("win");
    gridCell[5].classList.add("win");
  } else if (
    bottomLeft &&
    bottomLeft === bottomMiddle &&
    bottomLeft === bottomRight
  ) {
    playerWin(bottomLeft);
    gridCell[6].classList.add("win");
    gridCell[7].classList.add("win");
    gridCell[8].classList.add("win");
  } else if (topLeft && topLeft === middleLeft && topLeft === bottomLeft) {
    playerWin(topLeft);
    gridCell[0].classList.add("win");
    gridCell[3].classList.add("win");
    gridCell[6].classList.add("win");
  } else if (
    topMiddle &&
    topMiddle === middleMiddle &&
    topMiddle === bottomMiddle
  ) {
    playerWin(topMiddle);
    gridCell[1].classList.add("win");
    gridCell[4].classList.add("win");
    gridCell[7].classList.add("win");
  } else if (topRight && topRight === middleRight && topRight === bottomRight) {
    playerWin(topRight);
    gridCell[2].classList.add("win");
    gridCell[5].classList.add("win");
    gridCell[8].classList.add("win");
  } else if (topLeft && topLeft === middleMiddle && topLeft === bottomRight) {
    playerWin(topLeft);
    gridCell[0].classList.add("win");
    gridCell[4].classList.add("win");
    gridCell[8].classList.add("win");
  } else if (topRight && topRight === middleMiddle && topRight === bottomLeft) {
    playerWin(topRight);
    gridCell[2].classList.add("win");
    gridCell[4].classList.add("win");
    gridCell[6].classList.add("win");
  } else if (
    topLeft &&
    topMiddle &&
    topRight &&
    middleLeft &&
    middleMiddle &&
    middleRight &&
    bottomLeft &&
    bottomMiddle &&
    bottomRight
  ) {
    gameIsLive = false;
    playerStatus.innerHTML = "Game is tied!";
  } else {
    xIsNext = !xIsNext;
    if (xIsNext) {
      playerStatus.innerHTML = `Player ${xSymb} is next`;
    } else {
      playerStatus.innerHTML = `<span>Player ${oSymb} is next</span>`;
    }
  }
};

// Function gameReset

const gameReset = () => {
  xIsNext = true;
  playerStatus.innerHTML = `Player ${xSymb} is next`;
  for (let cell of gridCell) {
    cell.classList.remove("x");
    cell.classList.remove("o");
    cell.classList.remove("win");
  }
  gameIsLive = true;
};

// Function cellClick

function cellClick(e) {
  const classList = e.target.classList;
  if (!gameIsLive || classList[1] === "x" || classList[1] === "o") {
    return;
  }
  if (xIsNext) {
    classList.add("x");
    statusCheck();
  } else {
    classList.add("o");
    statusCheck();
  }
}

// Add event listener for each cell clicked once

resetButton.addEventListener("click", gameReset);

for (let cell of gridCell) {
  cell.addEventListener("click", cellClick);
}
