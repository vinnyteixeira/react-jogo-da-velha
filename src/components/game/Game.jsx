import { useState } from "react";
import styles from "./Game.module.css";
import Icon from "../icon/Icon";

import GameOption from "../gameOption/Gameoption";

function Game() {
  const [gameState, setGameState] = useState(Array(9).fill(0));
  const [currentPlayer, setCurrentPlayer] = useState(1);

  const handleClick = (pos) => {
    if (gameState[pos] === 0) {
      let newGameState = [...gameState];
      newGameState[pos] = currentPlayer;
      setCurrentPlayer(currentPlayer * -1);
      setGameState(newGameState);
    }
  };

  return (
    <div className={styles.gameContent}>
      <div className={styles.game}>
        {gameState.map((value, pos) => (
          <GameOption
            key={`game-position-pos-${pos}`}
            status={value}
            onClick={() => handleClick(pos)}
          />
        ))}
      </div>
      <div className={styles.gameInfo}>
        <h4>Proximo a jogar:</h4>
        {
            currentPlayer === 1 && <Icon iconName="circle"/>
        }
        {
            currentPlayer === -1 && <Icon iconName="x"/>
        }
      </div>
    </div>
  );
}

export default Game;
