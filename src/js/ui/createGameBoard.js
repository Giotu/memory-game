import { game } from "../game/game.js";
import { createElement } from "../helpers/createElement.js";
import { createCard } from "./createCard.js";
import { updateCard } from "./updateCard.js";

function createGameBoard() {
  const containerBoard = createElement("div", { className: "game-board" });
  console.log(game.cards);

  game.cards.forEach((card) => {
    const cardElement = createCard(card);
    containerBoard.append(cardElement);
  });

  containerBoard.addEventListener("click", (event) => {
    const cardElement = event.target.closest(".card");
    if (!cardElement) return;

    const cardId = Number(cardElement.dataset.cardId);
    const card = game.openCard(cardId);
    if (!card) return;

    updateCard(cardElement, card);
  });

  return containerBoard;
}

export { createGameBoard };
