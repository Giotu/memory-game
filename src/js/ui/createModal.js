import { createElement } from "../helpers/createElement.js";
function createModal(title, contentElement) {
  const modal = createElement("dialog", { className: "modal" });
  const modalTitle = createElement("p", { className: "modal__title", text: title });
  const buttonClose = createElement("button", {
    className: "button-close",
    text: "Close",
  });

  buttonClose.addEventListener("click", () => {
    modal.close();
  });

  modal.addEventListener("click", (event) => {
    const rect = modal.getBoundingClientRect();
    const isOutside =
      event.clientX < rect.left ||
      event.clientX > rect.right ||
      event.clientY < rect.top ||
      event.clientY > rect.bottom;
    if (isOutside) {
      modal.close();
    }
  });

  modal.addEventListener("close", () => {
    document.body.classList.remove("modal-open");
  });

  modal.append(modalTitle, contentElement, buttonClose);

  return {
    element: modal,
    open() {
      document.body.classList.add("modal-open");
      modal.showModal();
    },
    close() {
      modal.close();
    },
  };
}
export { createModal };
