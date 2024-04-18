import "./../style.css";

export class AboutViewBuilder {
  static buildAboutPage(container) {
    container.appendChild(AboutViewBuilder.#buildAboutContainer());
  }

  static #buildAboutContainer() {
    const aboutContainer = document.createElement("div");
    aboutContainer.classList.add("welcome-container");

    const aboutHeading = document.createElement("h1");
    aboutHeading.textContent = "About Page";
    aboutContainer.appendChild(aboutHeading);

    return aboutContainer;
  }
}
