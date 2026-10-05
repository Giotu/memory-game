import { characters } from "../data/characters.js";

function createCardDeck() {
  const cards = [];

  characters.forEach((character, index) => {
    const firstCard = {
      ...character,
      id: index * 2,
      isOpen: false,
      isMatched: false,
      characterId: character.id,
    };
    const secondCard = {
      ...character,
      id: index * 2 + 1,
      isOpen: false,
      isMatched: false,
      characterId: character.id,
    };
    cards.push(firstCard, secondCard);
  });

  shuffle(cards);
  return cards;
}

function shuffle(cards) {
  for (let i = cards.length - 1; i >= 0; i--) {
    const currentCard = cards[i];

    const randomIndex = Math.floor(Math.random() * (i + 1));
    const temp = cards[randomIndex];

    cards[randomIndex] = currentCard;
    cards[i] = temp;
  }
}

export { createCardDeck };
