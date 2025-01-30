import Square from "./Square";

const Board = () => {
  return (
    <div className="board">
      {Array(9).fill(null).map((_, i) => <Square key={i} />)}
    </div>
  );
};

export default Board;
