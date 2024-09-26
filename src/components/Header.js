import React from "react";
import { 
    GAME_STATE_DRAW,
    GAME_STATE_PLAYING, 
    GAME_STATE_WIN
 } from "../constants";

const Header = ({gameState, currentPlayer, winPlayer}) => {
    return (
        <div className="panel header">
            <div className="header-text">
                {gameState === GAME_STATE_PLAYING && <div>Player {currentPlayer} Turn</div>}
                {gameState === GAME_STATE_WIN && <div>Player {winPlayer} Wins</div>}
                {gameState === GAME_STATE_DRAW && <div>Game is a Draw!</div>}
            </div>
        </div>
    );
};

export default Header;