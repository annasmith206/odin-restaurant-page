import { HomeViewBuilder } from "./renderHome";
import { AboutViewBuilder } from "./renderAbout";
import { MenuViewBuilder } from "./renderMenu";

import "./../style.css";

class TabController {
  static tabIds = {
    HOME: 1,
    MENU: 2,
    ABOUT: 3,
  };

  #navBar = document.querySelector("nav");
  #contentContainer = document.querySelector("#content");
  #selectedButton = document.querySelector("button.selected");

  constructor() {
    this.#updateContent(TabController.tabIds.HOME);
    this.#navBar.addEventListener("click", (e) => this.#handleClickNav(e));
  }

  #handleClickNav(e) {
    const tabId = Number(e.target.dataset.tabId);
    if (!tabId || tabId === Number(this.#selectedButton.dataset.tabId)) return;

    // remove selected styling from old tab
    this.#selectedButton.classList.toggle("selected");

    this.#updateContent(tabId);

    // update selected tab and styling
    this.#selectedButton = e.target;
    this.#selectedButton.classList.toggle("selected");
  }

  #updateContent(tabId) {
    this.#contentContainer.textContent = "";

    if (tabId === TabController.tabIds.HOME)
      HomeViewBuilder.buildHomePage(this.#contentContainer);
    else if (tabId === TabController.tabIds.MENU)
      MenuViewBuilder.buildMenuPage(this.#contentContainer);
    else if (tabId === TabController.tabIds.ABOUT)
      AboutViewBuilder.buildAboutPage(this.#contentContainer);
  }
}

new TabController();
