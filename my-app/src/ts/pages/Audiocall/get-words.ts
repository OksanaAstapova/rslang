// helpers audiocall
import * as helpers from "../AboutTeam/helpers";
import { root } from "../../router";
import { audiocallGame } from "./audiocall-game";
import { WordObj, StatObj } from "./audio_types";
import { audioStatistic } from "./audio_stat";

export const getWords = async (page = 0, group = 0) => {
  const rawResponse = await fetch(
    `https://rssslang.herokuapp.com/words?page=${page}&group=${group}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const rezult = await rawResponse.json();
  return rezult;
};

export const randomPage = () => {
  // from https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
  return Math.floor(Math.random() * 6) + 0.7;
};

function randomIntFromInterval(min = 0, max = 19) {
  // min and max included
  // from https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function arrElRemove(arr: Array<WordObj>, val: WordObj) { 
  return arr.filter((el) => el != val);
}

const generateRandomWordsSet5 = (words: Array<WordObj>) => {
  const cardWordsSet = new Set();
  while (cardWordsSet.size < 5) {
    const randomWord = words[randomIntFromInterval()];
    cardWordsSet.add(randomWord);
  }
  const rezult = Array.from(cardWordsSet);
  return rezult;
};

function shuffleDivs(parent: HTMLElement) {
  //https://stackoverflow.com/questions/315177/any-way-to-shuffle-content-in-multiple-div-elements
  const divs = parent.children;
  const frag = document.createDocumentFragment();
  while (divs.length) {
    frag.appendChild(divs[Math.floor(Math.random() * divs.length)]);
  }
  parent.appendChild(frag);
};

const MAX_ROUNDS = 10;
let counter = MAX_ROUNDS; // set MAX count of rounds
function countRound() {
  counter = --counter;
};

export const audioStatisticaObj: StatObj = {
  wins: 0,
  lost: 0,
  words_right: [],
  words_lost: [],
};


export const createAudiocallCard = async (levelWords: Array<WordObj>) => {

  const cardWordsArr = generateRandomWordsSet5(levelWords);

  const audio1 = new Audio(
    `https://rssslang.herokuapp.com/${(cardWordsArr[0] as WordObj).audio}`
  );
  audio1.play(); // play the sound on first load card

  const cardWord = `<div class="card">
  <audio id='audio' src='https://rssslang.herokuapp.com/${(cardWordsArr[0] as WordObj).audio}'></audio>
  <header class="card-header" onclick=audio.play()>
    <p class="card-header-title"> Click the sound icon to hear the word again</p>
    <button class="card-header-icon" aria-label="sound">
      <span class="icon"> <i class="fas fa-volume-up" aria-hidden="true"></i> </span>
    </button>
  </header>
  <div class="card-content">
    <div class="content"> Choose the right word translation</div>
  </div>
  <footer class="card-footer">
    <a class="card-footer-item" data-answer="wrong">${(cardWordsArr[1] as WordObj).wordTranslate}</a>
    <a class="card-footer-item" data-answer="wrong">${(cardWordsArr[2] as WordObj).wordTranslate}</a>
    <a class="card-footer-item" data-answer="wrong">${(cardWordsArr[3] as WordObj).wordTranslate}</a>
    <a class="card-footer-item" data-answer="wrong">${(cardWordsArr[4] as WordObj).wordTranslate}</a>
    <a class="card-footer-item" data-answer="right">${(cardWordsArr[0] as WordObj).wordTranslate}</a>
  </footer>
</div>
`;  
  const card = helpers.createHtmlElement("div", "", cardWord);
  root.innerHTML = ""; // clearing the root element
  root.append(card);

  const cardContent = document.body.querySelector(".card-content") as HTMLElement;
  const rightWord = document.body.querySelector("[data-answer='right']") as HTMLElement;
  // console.log(rightWord)
  
  const cardFooter = document.body.querySelector(".card-footer") as HTMLElement;
  shuffleDivs(cardFooter);

  function checkForCounterAndCreateCard() {
    if (counter) {
      setTimeout(() => createAudiocallCard(levelWords), 1000);
    } else {
      setTimeout(() => audioStatistic(audioStatisticaObj), 1000);
      counter = MAX_ROUNDS;
    }
  }

  cardFooter.addEventListener("click", (e) => {
    if ((e.target as HTMLElement).dataset.answer == "wrong") {
      console.log(`counter ${counter}`)
      cardContent.innerHTML = "Wrong answer :(";
      rightWord.style.backgroundColor = "#ff7d00ff";
      audioStatisticaObj.lost += 1;
      audioStatisticaObj.words_lost.push(cardWordsArr[0] as WordObj);
      countRound();
      checkForCounterAndCreateCard();
    }
    if ((e.target as HTMLElement).dataset.answer == "right") {
      // console.log("Right!")
      rightWord.style.backgroundColor = "#ADFF2F";
      cardContent.style.backgroundColor = "#ADFF2F";
      cardContent.innerHTML = "RIGHT!";
      audioStatisticaObj.wins += 1; // add 1 to wins count
      audioStatisticaObj.words_right.push(cardWordsArr[0] as WordObj); // add right word to array
      countRound();
      checkForCounterAndCreateCard();
    }
  })
};
