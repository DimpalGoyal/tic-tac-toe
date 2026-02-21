import { useState } from 'react';
import './App.css';

/**
 * Render the Tic Tac Toe application with an interactive 3x3 board, turn management, win/draw detection, and a reset control.
 *
 * Manages local state for the board, current player, and game status; handles cell clicks to place marks, detects a winner or draw, switches turns, and shows a "Play Again" button when the game ends.
 *
 * @returns {JSX.Element} The rendered Tic Tac Toe application.
 */
function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [gameStatus, setGameStatus] = useState(null); // null, 'X', 'O', or 'draw'

  // All possible winning combinations (rows, columns, diagonals)
  const winningCombinations = [
    [0, 1, 2], // top row
    [3, 4, 5], // middle row
    [6, 7, 8], // bottom row
    [0, 3, 6], // left column
    [1, 4, 7], // middle column
    [2, 5, 8], // right column
    [0, 4, 8], // diagonal top-left to bottom-right
    [2, 4, 6]  // diagonal top-right to bottom-left
  ];

  const checkWinner = (boardState) => {
    // Check each winning combination
    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      if (boardState[a] !== null && 
          boardState[a] === boardState[b] && 
          boardState[b] === boardState[c]) {
        return boardState[a]; // Return the winner ('X' or 'O')
      }
    }
    return null; // No winner yet
  };

  const checkDraw = (boardState) => {
    return !boardState.some((cell) => cell === null);
  };

  const handleCellClick = (index) => {
    // Don't allow moves if game is over or cell is already filled
    if (gameStatus || board[index] !== null) {
      return;
    }

    // Create new board state with the move
    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    // Check for winner
    const winner = checkWinner(newBoard);
    if (winner) {
      setGameStatus(winner);
      return;
    }

    // Check for draw
    if (checkDraw(newBoard)) {
      setGameStatus('draw');
      return;
    }

    // Switch player
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer('X');
    setGameStatus(null);
  };

  const renderStatus = () => {
    if (gameStatus === 'draw') {
      return <div className="status">It's a draw!</div>;
    }
    if (gameStatus) {
      return <div className="status">Winner is {gameStatus}!</div>;
    }
    return <div className="status">Current Player: {currentPlayer}</div>;
  };

  return (
    <div className="app">
      <h1>Tic Tac Toe</h1>
      {renderStatus()}
      <div className="board">
        {board.map((cell, index) => (
          <div
            key={index}
            className="cell"
            onClick={() => handleCellClick(index)}
          >
            {cell}
          </div>
        ))}
      </div>
      {gameStatus && (
        <button className="reset-button" onClick={resetGame}>
          Play Again
        </button>
      )}
    </div>
  );
}

export default App;