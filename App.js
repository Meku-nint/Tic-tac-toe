import React, { useState } from 'react';
import './app.css';

const App = () => {
    const winningCondition = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    const winnerStyle = {
        color: '#007bff',
    };

    const [player, setPlayer] = useState("Player (X)");
    const [playerValue, setPlayerValue] = useState(0);
    const [winner, setWinner] = useState("");
    const [value, setValue] = useState(["", "", "", "", "", "", "", "", ""]);
    const XorO = ['X', 'O'];

    const ticTacHandler = (index) => {
        if (value[index] === "" && winner === "") { 
            const newValue = [...value];
            newValue[index] = XorO[playerValue];
            setValue(newValue);
            checkWinner(newValue);
            setPlayerValue((playerValue + 1) % 2);
            setPlayer(playerValue === 0 ? "Player (O)" : "Player (X)");
        }
    };

    const checkWinner = (newValue) => {
        for (let i = 0; i < winningCondition.length; i++) {
            const [a, b, c] = winningCondition[i];
            if (newValue[a] && newValue[a] === newValue[b] && newValue[b] === newValue[c]) {
                setWinner(`Congratulations ${newValue[a]}`);
                return; 
            }
        }
    };

    const restartGame = () => {
        setValue(["", "", "", "", "", "", "", "", ""]); // Reset board
        setWinner(""); 
        setPlayer("Player (X)"); 
    };

    return (
        <div className='header'>
            <h2>Tic Tac Toe Game</h2>
            <h3 className='player'>
                <h3 className='restart'>{player}<p onClick={restartGame} className='re'>restart</p></h3>
                </h3>
            <div className='buttons'>
                <div className='first-row'>
                    <button onClick={() => ticTacHandler(0)} className='btn1'>{value[0]}</button>
                    <button onClick={() => ticTacHandler(1)} className='btn2'>{value[1]}</button>
                    <button onClick={() => ticTacHandler(2)} className='btn3'>{value[2]}</button>
                </div>
                <div className='second-row'>
                    <button onClick={() => ticTacHandler(3)} className='btn4'>{value[3]}</button>
                    <button onClick={() => ticTacHandler(4)} className='btn5'>{value[4]}</button>
                    <button onClick={() => ticTacHandler(5)} className='btn6'>{value[5]}</button>
                </div>
                <div className='third-row'>
                    <button onClick={() => ticTacHandler(6)} className='btn7'>{value[6]}</button>
                    <button onClick={() => ticTacHandler(7)} className='btn8'>{value[7]}</button>
                    <button onClick={() => ticTacHandler(8)} className='btn9'>{value[8]}</button>
                </div>
            </div>
            <h2 style={winnerStyle}>{winner}</h2>
        </div>
    );
};

export default App;