import { createCardDeck } from "./createCardDeck.js";

const game = {
  cards: createCardDeck(),
  moves: 0,
  foundPairs: 0,
  selectedCards: [],
  isLocked: false,

  openCard(id) {
    if (this.isLocked) {
      return null;
    }

    if (this.selectedCards.length < 2) {
      const card = this.cards.find((card) => card.id === id);
      if (!card.isOpen && !card.isMatched) {
        this.selectedCards.push(card);
        card.isOpen = true;
        if (this.selectedCards.length === 2) {
          const isEqualCards = this.compareCards();

          if (isEqualCards) {
            this.foundPairs += 1;
            this.markSelectedCardsAsMatched();
            this.selectedCards = [];
          } else {
            this.closeSelectedCards();
          }
        }
        return card;
      }
    }

    return null;
  },

  compareCards() {
    return this.selectedCards[0].characterId === this.selectedCards[1].characterId;
  },

  closeSelectedCards() {
    this.isLocked = true;
    setTimeout(() => {
      this.selectedCards.forEach((card) => (card.isOpen = false));
      this.selectedCards = [];
      this.isLocked = false;
    }, 1500);
  },

  markSelectedCardsAsMatched() {
    this.selectedCards.forEach((card) => {
      card.isMatched = true;
    });
  },
};

export { game };
