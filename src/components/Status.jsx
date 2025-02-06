const Status = ({ winner, xIsNext }) => {
  return (
    <p className="status">
      {winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? "X" : "O"}`}
    </p>
  );
};

export default Status;
