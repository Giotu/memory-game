import { createElement } from "@/js/helpers/createElement.js";
import logoImage from "@/assets/images/logo.png";

function createHeader(handleNewGame) {
  const header = createElement("header", { className: "header" });

  const container = createElement("div", {
    className: "container",
  });

  const headerInner = createElement("div", {
    className: "header__inner",
  });

  const logo = createElement("img", { className: "header__logo" });
  logo.src = logoImage;
  logo.alt = "Memory Game";

  const buttonsContainer = createElement("div", {
    className: "header__actions",
  });

  const buttonNewGame = createElement("button", {
    className: "header__button",
    text: "New Game",
  });

  buttonNewGame.addEventListener("click", handleNewGame);

  const buttonLeaderboard = createElement("button", {
    className: "header__button",
    text: "Leader Board",
  });

  buttonsContainer.append(buttonNewGame, buttonLeaderboard);
  headerInner.append(logo, buttonsContainer);
  container.append(headerInner);
  header.append(container);

  return header;
}

export { createHeader };
