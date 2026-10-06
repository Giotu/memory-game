import { createCardDeck } from "./createCardDeck.js";

const game = {
  cards: createCardDeck(),
  moves: 0,
  foundPairs: 0,
  selectedCards: [],
  isLocked: false,
  timerId: null,

  openCard(id, callback) {
    if (this.isLocked) {
      return null;
    }

    if (this.selectedCards.length < 2) {
      const card = this.cards.find((card) => card.id === id);
      if (!card.isOpen && !card.isMatched) {
        this.selectedCards.push(card);
        card.isOpen = true;
        let isGameOver = false;
        if (this.selectedCards.length === 2) {
          const isEqualCards = this.compareCards();

          if (isEqualCards) {
            this.foundPairs += 1;
            this.markSelectedCardsAsMatched();
            this.selectedCards = [];
          } else {
            this.closeSelectedCards(callback);
          }

          this.moves += 1;
          isGameOver = this.foundPairs === 8;
        }
        return {
          card,
          isGameOver: isGameOver,
          moves: this.moves,
          foundPairs: this.foundPairs,
        };
      }
    }

    return null;
  },

  compareCards() {
    return this.selectedCards[0].characterId === this.selectedCards[1].characterId;
  },

  closeSelectedCards(callback) {
    this.isLocked = true;
    this.timerId = setTimeout(() => {
      const cards = this.selectedCards;

      this.selectedCards.forEach((card) => (card.isOpen = false));
      this.selectedCards = [];
      this.isLocked = false;
      this.timerId = null;
      callback(cards);
    }, 1500);
  },

  markSelectedCardsAsMatched() {
    this.selectedCards.forEach((card) => {
      card.isMatched = true;
    });
  },

  reset() {
    this.cards = createCardDeck();
    this.moves = 0;
    this.foundPairs = 0;
    this.selectedCards = [];
    this.isLocked = false;
    clearTimeout(this.timerId);
    this.timerId = null;
  },
};

export { game };
