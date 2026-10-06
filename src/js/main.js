import { createHeader } from "./ui/createHeader.js";
import { createMain } from "./ui/createMain.js";
import { game } from "./game/game.js";
import "@/styles/main.css";

function createPage() {
  const header = createHeader(startNewGame);
  const main = createMain();
  document.body.append(header, main.element);

  function startNewGame() {
    game.reset();
    main.gameBoard.reset();
  }
}

createPage();
