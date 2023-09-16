import { WINER_COMBOS } from './constants.js'


export const checkEndGame = (newBoard) => {
    return newBoard.every((square) => square !== null);
  };
 
 //funcion para checkear el ganador
 export const checkWinner = (boardToCheck) => {
    for (const combo of WINER_COMBOS) {
      const [a, b, c] = combo;
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a];
      }
    }
    return null;
  };