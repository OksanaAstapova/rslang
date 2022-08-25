import { renderWords, card_wrapper, pagination } from "./create-content";

declare global {
  interface Window {
    switchNextPage: any;
  }
  interface Window {
    switchPrevPage: any;
  }
  interface Window {
    playAudio: any;
  }
}

export const switchLevels = () => {
  const levels = document.querySelector(".left-panel") as HTMLElement;

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
    renderWords(0, level, en, ru);
  });
};

window.switchNextPage = switchNextPage;
window.switchPrevPage = switchPrevPage;

let counter = 0;

function switchNextPage() {
  const prev = pagination.firstChild as HTMLButtonElement;
  const next = pagination.lastChild as HTMLButtonElement;

  prev.disabled = false;

  counter++;

  card_wrapper.innerHTML = "";

  const level_panel = document.querySelector(".left-panel") as HTMLElement;
  const levels = level_panel.children;

  let level = 0;
  for (let i = 0; i < levels.length; i++) {
    if (levels[i].classList.contains("active")) {
      level = +levels[i].id;
    }
  }
  console.log(level);

  const page = document.querySelector(".page-number") as HTMLElement;

  const page_num = counter + 1;
  page.innerHTML = page_num.toString();

  if (counter == 29) {
    next.disabled = true;
  }

  const ruButton = document.querySelector(".ru") as HTMLButtonElement;

  let en = `appear`;
  let ru = `hide`;

  if (ruButton.disabled == true) {
    ru = `appear`;
    en = `hide`;
  }

  renderWords(counter, level, en, ru);
}

function switchPrevPage() {
  const prev = pagination.firstChild as HTMLButtonElement;

  counter--;

  const level_panel = document.querySelector(".left-panel") as HTMLElement;
  const levels = level_panel.children;

  let level = 0;
  for (let i = 0; i < levels.length; i++) {
    if (levels[i].classList.contains("active")) {
      level = +levels[i].id;
    }
  }
  console.log(level);

  card_wrapper.innerHTML = "";

  const page = document.querySelector(".page-number") as HTMLElement;

  const page_num = counter + 1;
  page.innerHTML = page_num.toString();

  if (counter == 0) {
    prev.disabled = true;
  }

  const ruButton = document.querySelector(".ru") as HTMLButtonElement;

  let en = `appear`;
  let ru = `hide`;

  if (ruButton.disabled == true) {
    ru = `appear`;
    en = `hide`;
  }

  renderWords(counter, level, en, ru);
}
window.playAudio = playAudio;

function playAudio(i: number) {
  const sound = document.getElementById(`audio ${i}`) as HTMLAudioElement;
  sound.play();
}
