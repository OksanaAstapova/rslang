// import image from "./images/love.jpg";
// import { menu as navigation } from "./menu";
import * as helpers from "./helpers";
import * as team from "./our_team";
import * as description from "./description";
import * as wb from "./workbook";
import * as audio from "./game_audio";
import * as sprint from "./game_sprint";
import * as stata from "./statistics";

helpers
  .render()
  .then(async () => {
    const header = document.body.querySelector(".header");
    const main = document.body.querySelector("main > .container");
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
