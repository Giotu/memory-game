import { createCardDeck } from "./createCardDeck.js";

const game = {
  cards: createCardDeck(),
  moves: 0,
  foundPairs: 0,
  selectedCards: [],

  openCard(id) {
    if (this.selectedCards.length < 2) {
      const card = this.cards.find((card) => card.id === id);
      if (!card.isOpen) {
        this.selectedCards.push(card);
        card.isOpen = true;
        return card;
      }
    }

    return null;
  },
};

export { game };
