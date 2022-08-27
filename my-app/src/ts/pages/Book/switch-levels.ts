import { renderWords, card_wrapper, pagination } from "./create-content";
declare global {
  
  interface Window {
    playAudio: any;
  }
}

export const switchLevels = () => {
  const levels = document.querySelector(".left-panel") as HTMLElement;
  const dictionaryButton = document.querySelector('.dictionary') as HTMLButtonElement;

  levels.addEventListener("click", (e) => {
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
    renderWords(0, level, en, ru, color);
  });
};

window.playAudio = playAudio;

function playAudio(i: number) {
  
  const sound = document.getElementById(`audio ${i}`) as HTMLAudioElement;
  const soundExample = document.getElementById(`audioExample ${i}`) as HTMLAudioElement;
  const soundMeaning = document.getElementById(`audioMeaning ${i}`) as HTMLAudioElement;
  sound.play();
  
  sound.onended = () => {
    soundMeaning.play(); 
  }
  soundMeaning.onended = () => {
    soundExample.play();
  };
  
}
