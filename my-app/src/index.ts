import image from "./images/love.jpg";
import { menu as navigation } from "./menu";
import * as helpers from "./helpers";
import * as team from "./our_team";
import * as description from "./description";
import * as wb from "./workbook";
import * as audio from "./game_audio";
import * as sprint from "./game_sprint";
import * as stata from "./statistics";

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
  .then(async () => {
    const header = document.body.querySelector(".header");
    const main = document.body.querySelector(".main");
    console.log("header ->", header);
    console.log("main ->", main);
    (header as HTMLElement).addEventListener("click", (e) => {
      const target = e.target as HTMLElement;
      if (target.classList.contains("description")) {
        console.log("description");
        (main as HTMLElement).innerHTML = "";
        (main as HTMLElement).append(description.prjDescription);
      }
      if (target.classList.contains("our-team")) {
        console.log("our-team");
        (main as HTMLElement).innerHTML = "";
        (main as HTMLElement).append(team.ourTeam);
      }
      if (target.classList.contains("workbook")) {
        console.log("workbook");
        (main as HTMLElement).innerHTML = "";
        (main as HTMLElement).append(wb.workbook);
      }
      if (target.classList.contains("game-audio")) {
        console.log("game-audio");
        (main as HTMLElement).innerHTML = "";
        (main as HTMLElement).append(audio.audiocall);
      }
      if (target.classList.contains("game-sprint")) {
        console.log("game-sprint");
        (main as HTMLElement).innerHTML = "";
        (main as HTMLElement).append(sprint.sprint);
      }
      if (target.classList.contains("statistics")) {
        console.log("statistics");
        (main as HTMLElement).innerHTML = "";
        (main as HTMLElement).append(stata.statistics);
      }
      if (target.classList.contains("login")) {
        console.log("login");
        (main as HTMLElement).innerHTML = "";
      }
      if (target.classList.contains("logout")) {
        console.log("logout");
        (main as HTMLElement).innerHTML = "";
      }
    });
  })
  .catch((err) => {
    console.log("Error happend! ->", err);
  });
