import { createElement } from "../helpers/createElement.js";
import { createGameBoard } from "./createGameBoard.js";

function createMain() {
  const main = createElement("main", { className: "main" });

  const container = createElement("div", {
    className: "container",
  });

  const gameBoard = createGameBoard();

  container.append(gameBoard);
  main.append(container);

  return main;
}

export { createMain };
