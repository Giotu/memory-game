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
    const data = game.openCard(cardId, handleCardsClosed);
    if (!data) return;

    const { card, isGameOver } = data;
    updateCard(cardElement, card);
    if (isGameOver) {
      //
    }
  });

  return containerBoard;
}

function handleCardsClosed(cards) {
  cards.forEach((card) => {
    const cardElement = document.querySelector(`[data-card-id="${card.id}"]`);
    updateCard(cardElement, card);
  });
}

export { createGameBoard };
