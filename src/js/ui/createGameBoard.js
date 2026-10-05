import { createCardDeck } from "../game/createCardDeck.js";
import { createElement } from "../helpers/createElement.js";
import { createCard } from "./createCard.js";

function createGameBoard() {
  const containerBoard = createElement("div", { className: "game-board" });
  const cards = createCardDeck();
  console.log(cards);

  cards.forEach((card) => {
    const cardElement = createCard(card);
    containerBoard.append(cardElement);
  });

  return containerBoard;
}

export { createGameBoard };
