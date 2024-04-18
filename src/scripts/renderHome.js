import "./../style.css";

import Logo from "./../images/pipsLogo.png";
import DisplayImage1 from "./../images/restaurantDisplay1.png";
import DisplayImage2 from "./../images/restaurantDisplay2.png";
import DisplayImage3 from "./../images/restaurantDisplay3.png";

export class HomeViewBuilder {
  static #hoursTextList = [
    "Sunday: 8am - 8pm",
    "Monday: 6am - 6pm",
    "Tuesday: 6am - 6pm",
    "Wednesday: 6am - 6pm",
    "Thursday: 6am - 10pm",
    "Friday: 6am - 10pm",
    "Saturday: 8am - 10pm",
  ];

  static buildHomePage(container) {
    container.appendChild(HomeViewBuilder.#buildWelcomeContainer());
    container.appendChild(HomeViewBuilder.#buildImageCarousel());
    container.appendChild(HomeViewBuilder.#buildRestaurantInfo());
  }

  static #buildWelcomeContainer() {
    const welcomeContainer = document.createElement("div");
    welcomeContainer.classList.add("welcome-container");

    // Add logo
    welcomeContainer.appendChild(
      HomeViewBuilder.#makeImage(Logo, "Pip's Logo", "logo")
    );

    // add title
    const titleElement = document.createElement("h1");
    titleElement.textContent = "Welcome to Pip's Bar and Grill!";
    welcomeContainer.appendChild(titleElement);

    // add description
    const descriptionElement = document.createElement("p");
    descriptionElement.textContent =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, tempora sint eveniet consequuntur ut illo veniam cumque eius quis ab ad minima incidunt voluptate a maiores ducimus mollitia, ea libero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, tempora sint eveniet consequuntur ut illo veniam cumque eius quis ab ad minima incidunt voluptate a maiores ducimus mollitia, ea libero.";
    welcomeContainer.appendChild(descriptionElement);

    return welcomeContainer;
  }

  static #buildImageCarousel() {
    const imageCarousel = document.createElement("div");
    imageCarousel.classList.add("imageCarousel");

    // add images
    imageCarousel.appendChild(
      HomeViewBuilder.#makeImage(
        DisplayImage1,
        "Image of a woman taking a bite of foot at a restaurant"
      )
    );
    imageCarousel.appendChild(
      HomeViewBuilder.#makeImage(
        DisplayImage2,
        "Image of a woman holding a burger and smiling"
      )
    );
    imageCarousel.appendChild(
      HomeViewBuilder.#makeImage(
        DisplayImage3,
        "Image of a 3 friends clinking beers at a restaurant"
      )
    );

    return imageCarousel;
  }

  static #buildRestaurantInfo() {
    const infoContainer = document.createElement("div");
    infoContainer.classList.add("restaurantInfo");

    // hours
    const hoursHeading = document.createElement("h2");
    hoursHeading.textContent = "Hours";
    infoContainer.appendChild(hoursHeading);

    const hoursList = document.createElement("ul");
    HomeViewBuilder.#hoursTextList.forEach((hours) => {
      const li = document.createElement("li");
      li.textContent = hours;
      hoursList.appendChild(li);
    });
    infoContainer.appendChild(hoursList);

    //location
    const locationHeading = document.createElement("h2");
    locationHeading.textContent = "Location";
    infoContainer.appendChild(locationHeading);

    const locationText = document.createElement("p");
    locationText.textContent = "1234 Lumon Drive, Kierville, PE";
    infoContainer.appendChild(locationText);

    return infoContainer;
  }

  static #makeImage(src, altText = "", classList = "") {
    const imageElement = new Image();
    imageElement.src = src;
    if (altText) imageElement.setAttribute("alt", altText);
    if (classList) imageElement.classList.add(classList);
    return imageElement;
  }
}
