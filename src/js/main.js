import { createHeader } from "./ui/createHeader.js";
import { createMain } from "./ui/createMain.js";
import "@/styles/main.css";

function createPage() {
  const header = createHeader();
  const main = createMain();
  document.body.append(header, main);
}

createPage();
