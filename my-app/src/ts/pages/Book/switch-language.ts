import { card_wrapper } from "./create-content";

export const switchLang = () => {
  const enButton = document.querySelector(".en") as HTMLButtonElement;
  const ruButton = document.querySelector(".ru") as HTMLButtonElement;

  ruButton.addEventListener("click", () => {
    ruButton.disabled = true;
    enButton.disabled = false;

    intoRu();
    localStorage.setItem('en', 'hide');
    localStorage.setItem('ru', 'appear');
  });

  enButton.addEventListener("click", () => {
    ruButton.disabled = false;
    enButton.disabled = true;

    intoEn();
    localStorage.setItem('ru', 'hide');
    localStorage.setItem('en', 'appear');
  });
};

export const intoRu = () => {
  const cards = card_wrapper.children;
  console.log(cards);

  for (let i = 0; i < cards.length; i++) {
    const ru = cards[i].children[2].children[3];
    const en = cards[i].children[2].children[2];
    en.classList.add("hide");
    ru.classList.remove("hide");
    
  }
};

export const intoEn = () => {
  const cards = card_wrapper.children;

  for (let i = 0; i < cards.length; i++) {
    const en = cards[i].children[2].children[2];
    const ru = cards[i].children[2].children[3];
    ru.classList.add("hide");
    en.classList.remove("hide");
  }
};
