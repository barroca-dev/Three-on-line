import { useState } from "react";
import "./ThreeOnline.css";
import confetti from "canvas-confetti";
import { Square } from "./Square.jsx";
import { TURNS } from "./constants";
import { WinnerModal } from "./WinnerModal";
import  Board  from './Board.jsx'
import { checkWinner, checkEndGame} from './logic.js'

function TrheeOnline() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.x);
  const [winner, setWinner] = useState(null);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
   setTurn(TURNS.x);
   setWinner(null);
  };

  
  const updateBoard = (index) => {
    //si hay algo no hagas nada
    if (board[index] || winner) return;

    // actualiza el tablero
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    // ctualiza el turno
    const newTurn = turn === TURNS.x ? TURNS.o : TURNS.x;
    setTurn(newTurn);

    //revisar si hay un ganador cada vez que se actualiza el tablero
    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      confetti();
      setWinner(newWinner);
    } else if (checkEndGame(newBoard)) {
      setWinner(false); //empate
    }
  };

  return (
    <main className="board">
      <h1>Three on line</h1>
      <section className="game">
        <Board board={board} updateBoard={updateBoard}/>
      </section>
      <section className="turn">
        <Square isSelected={turn === TURNS.x}>{TURNS.x}</Square>
        <Square isSelected={turn === TURNS.o}>{TURNS.o}</Square>
      </section>
      {
        winner === null && 
        <button onClick={resetGame}>Reset Game</button>
      }
      <WinnerModal resetGame={resetGame} winner={winner} />
    </main>
  );
}

export default TrheeOnline;
