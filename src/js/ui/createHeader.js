import { createElement } from "@/js/helpers/createElement.js";

function createHeader() {
  const header = createElement("header", { className: "header" });

  const container = createElement("div", {
    className: "container",
  });

  const logo = createElement("img", { className: "header__logo" });
  logo.src = "...";
  logo.alt = "Memory Game";

  const buttonsContainer = createElement("div", {
    className: "header__actions",
  });

  const buttonNewGame = createElement("button", {
    className: "header__button",
    text: "New Game",
  });
  const buttonLeaderboard = createElement("button", {
    className: "header__button",
    text: "Leader Board",
  });

  buttonsContainer.append(buttonNewGame, buttonLeaderboard);
  container.append(logo, buttonsContainer);
  header.append(container);

  return header;
}

export { createHeader };
