import image from "./images/love.jpg";
import { menu as navigation } from "./menu";
import * as helpers from "./helpers";

export async function render() {
  const header = document.createElement("header");
  header.className = "header";
  const headerContainer = document.createElement("div");
  headerContainer.className = "container";
  header.append(headerContainer);
  headerContainer.innerHTML = navigation;

  const footer = document.createElement("footer");
  footer.className = "footer";
  const footerContainer = document.createElement("div");
  footerContainer.className = "container";
  footer.append(footerContainer);

  const main = document.createElement("main");
  main.className = "main";
  const mainContainer = document.createElement("div");
  mainContainer.className = "container";
  main.append(mainContainer);

  const subHeader = document.createElement("h2");
  subHeader.innerHTML = "RS-Lang App Team-181";
  const myImage = await helpers.createImage(image, "image-0");

  document.body.prepend(header);
  document.body.append(main);
  mainContainer.append(subHeader);
  // mainContainer.appendChild(myImage as any);
  mainContainer.append(myImage as HTMLImageElement);
  document.body.append(footer);
}

render()
  .then(() => {
    const header = document.body.querySelector(".header");
    console.log("header ->", header);
    (header as HTMLElement).addEventListener("click", (e) => {
      const target = e.target as HTMLElement;
      if (target.classList.contains("description")) {
        console.log("description");
      }
      if (target.classList.contains("our-team")) {
        console.log("our-team");
      }
      if (target.classList.contains("workbook")) {
        console.log("workbook");
      }
      if (target.classList.contains("game-audio")) {
        console.log("game-audio");
      }
      if (target.classList.contains("game-sprint")) {
        console.log("game-sprint");
      }
      if (target.classList.contains("login")) {
        console.log("login");
      }
      if (target.classList.contains("logout")) {
        console.log("logout");
      }
    });
  })
  .catch((err) => {
    console.log("Error happend! ->", err);
  });
