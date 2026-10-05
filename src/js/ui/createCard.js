import { createElement } from "../helpers/createElement.js";

function createCard(character) {
  const card = createElement("div", { className: "card" });

  const image = createElement("img", { className: "card__image" });
  image.src = character.image;
  image.alt = character.name;

  card.append(image);

  return card;
}

export { createCard };
