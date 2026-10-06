import { createHeader } from "./ui/createHeader.js";
import { createMain } from "./ui/createMain.js";
import { createModal } from "./ui/createModal.js";
import { createVictoryContent } from "./ui/createVictoryContent.js";
import { game } from "./game/game.js";
import { getCurrentDate } from "./helpers/getCurrentDate.js";
import { createLeaderboardContent } from "./ui/createLeaderboardContent.js";
import "@/styles/main.css";
import { addSavedData, LEADERBOARD_KEY, getSavedData } from "./leaderboard.js";

function createPage() {
  const header = createHeader(startNewGame, openLeaderboard);
  const main = createMain(handleGameOver);
  const victoryContent = createVictoryContent("", startNewGame);
  const victoryModal = createModal("Victory!", victoryContent.element);
  const leaderboardContent = createLeaderboardContent(getSavedData(LEADERBOARD_KEY));

  const leaderboardModal = createModal("Leaderboard", leaderboardContent);

  document.body.append(
    header,
    main.element,
    victoryModal.element,
    leaderboardModal.element,
  );

  function handleGameOver(data) {
    addSavedData(LEADERBOARD_KEY, {
      moves: data.moves,
      date: getCurrentDate(),
      timestamp: Date.now(),
    });

    victoryContent.updateMoves(data.moves);
    victoryModal.open();
  }

  function openLeaderboard() {
    leaderboardModal.setContent(createLeaderboardContent(getSavedData(LEADERBOARD_KEY)));

    leaderboardModal.open();
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
