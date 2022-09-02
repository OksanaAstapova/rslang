// helpers audiocall
import * as helpers from "../AboutTeam/helpers";
import { root } from '../../router';

export const getWords: any = async (page = 0, group = 0) => {
  const rawResponse = await fetch(
    `https://rssslang.herokuapp.com/words?page=${page}&group=${group}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  const rezult = await rawResponse.json();
  return rezult;
};

export const randomPage = () => {
  // from https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
  return Math.floor(Math.random() * 6) + 0.5;
};

export const createAudiocallCard: any = async (words: any) => {

  function randomIntFromInterval(min = 1, max = 20) { // min and max included
      // from https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
    return Math.floor(Math.random() * (max - min + 1) + min)
  };

  const cardWordsSet = new Set();
  while (cardWordsSet.size < 6) {
    const randomWord = words[randomIntFromInterval()]
    cardWordsSet.add(randomWord);
  }
  const cardWordsArr = Array.from(cardWordsSet);

  console.log("words for card randome->", (cardWordsArr[1] as any).word);

  const audio = new Audio(`https://rssslang.herokuapp.com/${(cardWordsArr[0] as any).audio}`);
  audio.play(); // play the sound on first load card

  const cardWord = `<div class="card">
  <header class="card-header" onclick=audio.play()>
  <audio id='audio' src='https://rssslang.herokuapp.com/${(cardWordsArr[0] as any).audio}'></audio>
    <p class="card-header-title">
      Choose the right word
    </p>
    <button class="card-header-icon" aria-label="sound">
      <span class="icon">
        <i class="fas fa-volume-up" aria-hidden="true"></i>
      </span>
    </button>
  </header>
  <div class="card-content">
    <div class="content">
      Click the sound icon to hear the word again.
    </div>
  </div>
  <footer class="card-footer">
    <a href="#" class="card-footer-item">${(cardWordsArr[1] as any).wordTranslate}</a>
    <a href="#" class="card-footer-item">${(cardWordsArr[2] as any).wordTranslate}</a>
    <a href="#" class="card-footer-item">${(cardWordsArr[3] as any).wordTranslate}</a>
    <a href="#" class="card-footer-item">${(cardWordsArr[4] as any).wordTranslate}</a>
    <a href="#" class="card-footer-item">${(cardWordsArr[0] as any).wordTranslate}</a>
  </footer>
</div>
`;
  const card = helpers.createHtmlElement("div", "", cardWord);
  root.append(card);
  return card;
}

