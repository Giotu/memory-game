import { createElement } from "../helpers/createElement";

function createLeaderboardContent(data) {
  const content = createElement("div", {
    className: "modal__content",
  });

  if (data.length === 0) {
    const emptyMessage = createElement("p", {
      className: "leaderboard__empty",
      text: "No games played yet",
    });

    content.append(emptyMessage);

    return content;
  }
  const table = createElement("table", { className: "leaderboard__table" });
  const thead = createElement("thead");
  const trHead = createElement("tr");
  const thPlace = createElement("th", { text: "Place" });
  const thMoves = createElement("th", { text: "Moves" });
  const thDate = createElement("th", { text: "Date" });

  trHead.append(thPlace, thMoves, thDate);
  thead.append(trHead);
  const tbody = createElement("tbody");

  data.forEach((result, index) => {
    const trBody = createElement("tr");
    const tdPlace = createElement("td", { text: index + 1 });
    const tdMoves = createElement("td", { text: result.moves });
    const tdDate = createElement("td", { text: result.date });

    trBody.append(tdPlace, tdMoves, tdDate);
    tbody.append(trBody);
  });

  table.append(thead, tbody);

  return table;
}

export { createLeaderboardContent };
