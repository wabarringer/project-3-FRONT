import React, { useState } from 'react';

export default function ScoreBoard({currentScoreBoard, scoreBoardSetter})
{
    const [scoreBoard, setScoreBoard] = useState(currentScoreBoard);
    scoreBoardSetter(setScoreBoard)
    console.log("ScoreBoard",scoreBoard,scoreBoard.currentColorTurn)
    return (
        <div>
            <div>Player Turn: {scoreBoard.currentColorTurn}</div>
            <div>{scoreBoard.isMate ? "Mate" : (scoreBoard.isCheck ? "Check" : "")}</div>
            <div>{ scoreBoard.isMate ? (scoreBoard.isWhiteWin ? "White wins!" : "Black wins!") : ""}</div>
        </div>

    );
}
