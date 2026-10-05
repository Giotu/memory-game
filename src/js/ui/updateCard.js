function updateCard(cardElement, card) {
  console.log(card.isOpen);
  if (card.isOpen) {
    cardElement.classList.add("card--open");
  } else {
    cardElement.classList.remove("card--open");
  }
}

export { updateCard };
