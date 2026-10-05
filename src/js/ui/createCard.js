import { createElement } from "../helpers/createElement.js";

function createCard(card) {
  const cardElement = createElement("div", { className: "card" });

  cardElement.dataset.cardId = card.id;

  const cardInner = createElement("div", { className: "card__inner" });
  const cardFront = createElement("div", { className: "card__front" });
  const cardBack = createElement("div", { className: "card__back" });

  const image = createElement("img", { className: "card__image" });
  image.src = card.image;
  image.alt = card.name;

  cardFront.append(image);
  cardInner.append(cardFront, cardBack);
  cardElement.append(cardInner);

  return cardElement;
}

export { createCard };
