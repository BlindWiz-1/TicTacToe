let gameActive = true;
let currentPlayer = "X";
let gameState = ["", "", "", "", "", "", "", "", ""];

//Separate display 
const winnerMessage = () => `Player ${currentPlayer} has won!`;
const drawMessage = () => `Game ended in a draw!`;
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;
const statusDisplay = document.getElementById("gameStatus");
statusDisplay.innerHTML = currentPlayerTurn();

function handleCellClick() {}
function handleRestartGame() {}


export { handleCellClick, handleRestartGame, currentPlayerTurn };
