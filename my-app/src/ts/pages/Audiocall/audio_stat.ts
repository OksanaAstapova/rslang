// statustic
import * as helpers from "../AboutTeam/helpers";
import { root } from "../../router";
import { WordObj, StatObj } from "./audio_types";

export function audioStatistic(stata: StatObj) {
  root.innerHTML = ""; // clearing the root element
  const audioStatCard = `
  <div class="container is-fluid">
  <div class="notification audio-stat-message">You finished the Audiocall game!</div>

  <div class="card">
  <header class="card-header">
    <p class="card-header-title"> Right answers </p>
  </header>
  <div class="card-content">
    <div class="content wins">
    You correctly guessed the words: ${stata.wins} times.
      <br>
    </div>
  </div>
  <footer class="card-footer">
  </footer>
</div>

<div class="card">
<header class="card-header">
  <p class="card-header-title">Wrong answers</p>
</header>
<div class="card-content">
  <div class="content lost">
  You guessed the words incorrectly ${stata.lost} times.
    <br>
  </div>
</div>
<footer class="card-footer">
 <a class="card-footer-item audio-stat-message" onclick=window.location.reload();>Wanna play again?</a>
</footer>
</div>

</div>
`;
  const card = helpers.createHtmlElement("div", "", audioStatCard);
  root.append(card);

  const rightCard = document.querySelector(".wins");
  stata.words_right.forEach((word) => {
    rightCard?.append(createWordBox(word));
  });

  const lostCard = document.querySelector(".lost");
  stata.words_lost.forEach((word) => {
    lostCard?.append(createWordBox(word));
  });

  console.log("right card->", rightCard);
};

function createWordBox(word: WordObj) {
  const wBox = `${word.word} - ${word.wordTranslate};`;
  return helpers.createHtmlElement("div", "box", wBox);
};
