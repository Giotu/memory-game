const LEADERBOARD_KEY = "memory-game-leaderboard";

function getSavedData(key) {
  return JSON.parse(localStorage.getItem(key)) || [];
}

function addSavedData(key, winInfo) {
  const data = getSavedData(key);
  data.push(winInfo);
  data.sort((a, b) => {
    if (a.moves !== b.moves) return a.moves - b.moves;
    return a.timestamp - b.timestamp;
  });
  localStorage.setItem(key, JSON.stringify(data.slice(0, 10)));
}

export { getSavedData, addSavedData, LEADERBOARD_KEY };
