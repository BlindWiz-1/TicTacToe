import { handleCellClick, handleRestartGame} from "./gameLogic";

window.addEventListener("DomContentLoaded", (e) => {

  document
    .querySelectorAll(".cell")
    .forEach((cell) => cell.addEventListener("click", handleCellClick));  
    
  document.getElementById('gameRestartBtn').addEventListener('click', handleRestartGame);

});
