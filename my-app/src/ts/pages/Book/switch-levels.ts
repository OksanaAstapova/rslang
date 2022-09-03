import { renderWords, card_wrapper, pagination } from "./create-content";
import { getWordIdFromStorage } from "./dictionary";

declare global {
  
  interface Window {
    playAudio: any;
  }

  interface Window {
    playAudioDiff: any;
  }

  interface Window {
    putDifficult: any;
  }

  interface Window {
    removeDifficult: any;
  }
}

export const switchLevels = () => {
  const levels = document.querySelector(".left-panel") as HTMLElement;
  const dictionaryButton = document.querySelector('.dictionary') as HTMLButtonElement;

  levels.addEventListener("click", async (e) => {
    const target = e.target as HTMLButtonElement;

    const buttons = document.querySelectorAll(".left-panel button");
    for (let i = 0; i < buttons.length; i++) {
      const button = buttons[i] as HTMLButtonElement;

      button.classList.remove("active");
      button.disabled = false;
    }

    target.classList.add("active");
    target.disabled = true;

    const level = +target.id;
    const color = target.value;

    dictionaryButton.style.backgroundColor = `#${color}`;
    for (let i = 0; i< pagination.children.length; i++){
      const button = pagination.children[i] as HTMLBodyElement;
      if(button.tagName == 'BUTTON'){
        button.style.backgroundColor = `#${color}`
      }
    }

    card_wrapper.innerHTML = "";

    const page = document.querySelector(".page-number") as HTMLElement;
    page.innerHTML = "1";

    const ruButton = document.querySelector(".ru") as HTMLButtonElement;

    let en = `appear`;
    let ru = `hide`;

    if (ruButton.disabled == true) {
      ru = `appear`;
      en = `hide`;
    }
    await renderWords(0, level, en, ru, color);

    localStorage.setItem('level', target.id);
    localStorage.setItem('en', en);
    localStorage.setItem('ru', ru);
    localStorage.setItem('color', color);

    const wordsIds = getWordIdFromStorage();
    let ids = wordsIds.split(',')
    const cards = card_wrapper.children;
  
    for (const card of cards) {
     for (const id of ids) {
      if(card.id === id){
        const button = card.children[0].children[0] as HTMLStyleElement;
        button.style.backgroundColor = 'red' 
      }
     }
      
    }

  });

 

};

window.playAudio = playAudio;
window.playAudioDiff = playAudioDiff;

function playAudio(i: number) {

  const sound = document.getElementById(`audio ${i}`) as HTMLAudioElement;
  const soundDiff = document.getElementById(`audio-diff ${i}`) as HTMLAudioElement;
  const soundExample = document.getElementById(`audioExample ${i}`) as HTMLAudioElement;
  const soundExampleDiff = document.getElementById(`audioExample-diff ${i}`) as HTMLAudioElement;
  const soundMeaning = document.getElementById(`audioMeaning ${i}`) as HTMLAudioElement;
  const soundMeaningDiff = document.getElementById(`audioMeaning-diff ${i}`) as HTMLAudioElement;
  
  sound.play();
  soundDiff.play();
  sound.onended = () => {
    soundMeaning.play(); 
  }
  soundMeaning.onended = () => {
    soundExample.play();
  };
  
}

function playAudioDiff(i: number) {

  const soundDiff = document.getElementById(`audio-diff ${i}`) as HTMLAudioElement;
  const soundExampleDiff = document.getElementById(`audioExample-diff ${i}`) as HTMLAudioElement;
  const soundMeaningDiff = document.getElementById(`audioMeaning-diff ${i}`) as HTMLAudioElement;
  
  soundDiff.play();
  soundDiff.onended = () => {
    soundMeaningDiff.play(); 
  }
  soundMeaningDiff.onended = () => {
    soundExampleDiff.play();
  };
  
}
