export class MenuViewBuilder {
  static buildMenuPage(container) {
    container.appendChild(MenuViewBuilder.#buildMenuContainer());
  }

  static #buildMenuContainer() {
    const menuContainer = document.createElement("div");
    menuContainer.classList.add("welcome-container");

    const menuHeading = document.createElement("h1");
    menuHeading.textContent = "Menu Page";
    menuContainer.appendChild(menuHeading);

    return menuContainer;
  }
}
