import React, { useState } from 'react';

const Tic = () => {
    // State to track the current player ('X' or 'O') and the state of each square
    const [player, setPlayer] = useState('X');
    const [squares, setSquares] = useState(Array(9).fill(''));

    // Function to handle click events on each square
    const handleClick = (index) => {
        if (squares[index] === '' && !calculateWinner()) {
            const newSquares = [...squares];
            newSquares[index] = player;
            setSquares(newSquares);

            // Switch to the next player
            setPlayer(player === 'X' ? 'O' : 'X');
        }
    };

    // Function to determine if there's a winner
    const calculateWinner = () => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a]; 
            }
        }
        return null;
    };

    // Function to render each square
    const renderSquare = (index) => {
        const winner = calculateWinner();
        const isWinnerSquare = winner && squares[index] === winner;
        return (
            <button
                className={`w-16 h-16 border border-neutral-100 flex justify-center items-center text-3xl font-bold ${squares[index] === 'X' || squares[index] === 'O' ? 'text-white' : ''} ${isWinnerSquare ? 'bg-yellow-300 text-black' : ''}`}
                onClick={() => handleClick(index)}
            >
                {squares[index]}
            </button>
        );
    };

    // Function to reset the game
    const resetGame = () => {
        setPlayer('X'); 
        setSquares(Array(9).fill('')); 
    };

    // Function to display the status of the game
    const renderStatus = () => {
        const winner = calculateWinner();
        if (winner) {
            return `Winner: ${winner}`;
        } else if (!squares.includes('')) {
            return 'Draw!';
        } else {
            return `Next player: ${player}`;
        }
    };

    return (
        <div className="justify-center text-center">
            <h1 className="justify-center text-center mx-auto text-neutral-100 font-bold text-3xl">
                Tic-Tac-Toe GAME 🤩
            </h1>

            <div className="mb-4">
                <div className="grid grid-cols-1 gap-4 mt-8">
                    {[0, 1, 2].map(row => (
                        <div key={row} className="flex justify-center">
                            {[0, 1, 2].map(col => (
                                <div key={col} className="mx-2">
                                    {renderSquare(row * 3 + col)}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
                <div className="flex justify-center mt-20 text-3xl font-semibold text-white">{renderStatus()}</div>
            </div>

            <button
                className="bg-yellow-300 text-black hover:bg-yellow-500 text-lg font-semibold rounded-3xl px-6 py-3 mt-9"
                onClick={resetGame} 
            >
                Reset
            </button>
        </div>
    );
};

export default Tic;
