import Cell from "./components/Cell";
import { useState, useEffect } from "react";

const App = () => {
    const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
    const [go, setGo] = useState("circle");
    const [winningMessage, setWinningMessage] = useState(null);
    const message = `It is now ${go}'s turn.`;

    const winningCombinations = [
        // Horizontal Winning Combinations
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],

        // Vertical Winning Combinations
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],

        // Diagonal Winning Combinations
        [0, 4, 8],
        [2, 4, 6],
    ];

    useEffect(() => {
        checkScore();
    }, [cells]);

    const checkScore = () => {
        winningCombinations.forEach((combination) => {
            const [a, b, c] = combination;
            if (cells[a] === "circle" && cells[b] === "circle" && cells[c] === "circle") {
                setWinningMessage("Circle Wins!");
                return;
            } else if (cells[a] === "cross" && cells[b] === "cross" && cells[c] === "cross") {
                setWinningMessage("Cross Wins!");
                return;
            }
        });
    };

    return (
        <div className="app">
            <div className="gameboards">
                {cells.map((cell, index) => (
                    <Cell
                        key={index}
                        id={index}
                        cell={cell}
                        go={go}
                        setGo={setGo}
                        cells={cells}
                        setCells={setCells}
                    />
                ))}
            </div>
            <p>{winningMessage || message}</p>
        </div>
    );
};

export default App;
