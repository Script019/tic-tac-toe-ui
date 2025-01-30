import Header from "./Header";
import Board from "./Board";
import Status from "./Status";
import Restart from "./Restart";

const Game = () => {
  return (
    <div className="game">
      <Header />
      <Status />
      <Board />
      <Restart />
    </div>
  );
};

export default Game;
