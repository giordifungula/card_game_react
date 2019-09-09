import React from 'react';

const GameOver = ({ restartGame }) => (
    <div className="justify-center">
        <h1>Game Completed !</h1>
        <button className="restart-button" onClick={restartGame}>    
        Restart Button
        </button>
    </div>
)
// will return a JSX component for game over
export default GameOver;