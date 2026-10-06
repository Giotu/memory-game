import { createHeader } from "./ui/createHeader.js";
import { createMain } from "./ui/createMain.js";
import { createModal } from "./ui/createModal.js";
import { createVictoryContent } from "./ui/createVictoryContent.js";
import { game } from "./game/game.js";
import "@/styles/main.css";

function createPage() {
  const header = createHeader(startNewGame);
  const main = createMain(handleGameOver);
  const victoryContent = createVictoryContent("", startNewGame);
  const victoryModal = createModal("Victory!", victoryContent.element);
  document.body.append(header, main.element, victoryModal.element);

  function handleGameOver(data) {
    victoryContent.updateMoves(data.moves);
    victoryModal.open();
  }

  function startNewGame() {
    game.reset();
    main.gameBoard.reset();
    main.gameStats.updateMoves(game.moves);
    main.gameStats.updatePairs(game.foundPairs);
    victoryModal.close();
  }
}
createPage();
