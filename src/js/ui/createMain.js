import { createElement } from "../helpers/createElement.js";
import { createGameBoard } from "./createGameBoard.js";

function createMain(handleGameOver) {
  const main = createElement("main", { className: "main" });

  const container = createElement("div", {
    className: "container",
  });

  function handleGameUpdate(data) {
    const { moves, foundPairs } = data;
    gameStats.updateMoves(moves);
    gameStats.updatePairs(foundPairs);
  }

  const gameInfo = createElement("div", {
    className: "game-info",
  });

  const gameInfoMoves = createElement("div", {
    className: "game-info__moves",
    text: "Moves: 0",
  });

  const gameInfoPairs = createElement("div", {
    className: "game-info__pairs",
    text: "Pairs: 0/8",
  });

  const gameStats = {
    updateMoves(countMoves) {
      gameInfoMoves.textContent = `Moves: ${countMoves}`;
    },

    updatePairs(countPairs) {
      gameInfoPairs.textContent = `Pairs: ${countPairs}/8`;
    },
  };

  gameInfo.append(gameInfoMoves, gameInfoPairs);

  const gameBoard = createGameBoard(handleGameUpdate, handleGameOver);

  container.append(gameInfo, gameBoard.element);
  main.append(container);

  return { element: main, gameBoard, gameStats };
}

export { createMain };
