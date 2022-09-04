// statustics
import * as helpers from "../AboutTeam/helpers";
import { root } from "../../router";
import { WordObj, StatObj } from "./audio_types";


export function audioStatistic(stata: StatObj) {
  root.innerHTML = ""; // clearing the root element
  const audioStatCard = `
  <div class="container is-fluid">

  <div class="notification audio-stat-message">Вы успешно завершили игру Audiocall!</div>

  <div class="card">
  <header class="card-header">
    <p class="card-header-title"> Верные ответы </p>
  </header>
  <div class="card-content">
    <div class="content">
      Вы верно угадали слова: ${stata.wins} слов.
      <br>
    </div>
  </div>
  <footer class="card-footer">
    <a href="#" class="card-footer-item">Save</a>
    <a href="#" class="card-footer-item">Edit</a>
    <a href="#" class="card-footer-item">Delete</a>
  </footer>
</div>

<div class="card">
<header class="card-header">
  <p class="card-header-title">Ошибки</p>
</header>
<div class="card-content">
  <div class="content">
   Вы ошиблись ${stata.lost} раз.
    <br>
  </div>
</div>
<footer class="card-footer">
  <a href="#" class="card-footer-item">Save</a>
  <a href="#" class="card-footer-item">Edit</a>
  <a href="#" class="card-footer-item">Delete</a>
</footer>
</div>


</div>
  `;
  const card = helpers.createHtmlElement("div", "", audioStatCard);
  // root.innerHTML = ""; // clearing the root element
  root.append(card);
  // alert("Game over!");
}
