import { useState } from "react";
import Header from "./Header";
import Board from "./Board";
import Status from "./Status";
import Restart from "./Restart";

const Game = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);

  const handleClick = (i) => {
    if (squares[i] || winner) return; // Ignore if square is filled or game is won

    const newSquares = squares.slice();
    newSquares[i] = xIsNext ? "X" : "O";
    setSquares(newSquares);
    setXIsNext(!xIsNext);

    const winningPlayer = calculateWinner(newSquares);
    if (winningPlayer) {
      setWinner(winningPlayer);
    }
  };

  const handleRestart = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
    setWinner(null);
  };

  return (
    <div className="game">
      <Header />
      <Status winner={winner} xIsNext={xIsNext} />
      <Board squares={squares} onClick={handleClick} />
      <Restart onClick={handleRestart} />
    </div>
  );
};

const calculateWinner = (squares) => {
  const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]  // Diagonals
  ];

  for (let combo of winningCombos) {
    const [a, b, c] = combo;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]; // "X" or "O"
    }
  }
  return null;
};

export default Game;
