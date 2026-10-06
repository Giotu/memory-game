import { createElement } from "../helpers/createElement.js";

function createVictoryContent(text, handleNewGame) {
  const content = createElement("div", {
    className: "modal__content",
  });

  const paragraph = createElement("p", {
    className: "modal__text",
    text,
  });

  const buttonNewGame = createElement("button", {
    className: "modal__button",
    text: "New Game",
  });

  buttonNewGame.addEventListener("click", handleNewGame);

  content.append(paragraph, buttonNewGame);

  return {
    element: content,
    updateMoves(countMoves) {
      paragraph.textContent = `Moves: ${countMoves}`;
    },
  };
}

export { createVictoryContent };
