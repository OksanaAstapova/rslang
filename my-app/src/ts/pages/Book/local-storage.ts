import { displayUserLogin } from "../HomePage/autorization";
import { renderWords, pagination, card_wrapper } from "./create-content";
import { applyDifficultAppearance, applyLearntAppearance } from "./switch-levels";

export const loadStorage = async () => {
    const levelButtons = document.querySelectorAll('.left-panel button');
    const dictionaryButton = document.querySelector('.dictionary') as HTMLButtonElement;
    const pageInner = document.querySelector('.page-number') as HTMLElement;
    const paginationButtons = document.querySelectorAll('.pagination button');
    const first = pagination.children[0] as HTMLButtonElement;
    const prev = pagination.children[1] as HTMLButtonElement;
    const next = pagination.children[3] as HTMLButtonElement;
    const last = pagination.children[4] as HTMLButtonElement;
    const enButton = document.querySelector(".en") as HTMLButtonElement;
    const ruButton = document.querySelector(".ru") as HTMLButtonElement;
    const dictionary = document.querySelector(".dictionary") as HTMLButtonElement;
    
      let wordsId: string = '';
      let learntId: string = '';
      let authorization: string = '';
      let level: string = '0';
      let page: string = '0';
      let en: string = 'appear';
      let ru: string = 'hide';
      let name: string = '';
      let color: string = 'b0a2f9';

      for (let i = 0; i < localStorage.length; i++) {
  
        let key = localStorage.key(i);
  
        switch (key) {
          case 'level':
            level = `${localStorage.getItem(key)}`
          break;
  
          case 'page':
              page = `${localStorage.getItem(key)}`
          break;
        
          case 'en':
              en = `${localStorage.getItem(key)}`
          break;
  
          case 'ru':
              ru = `${localStorage.getItem(key)}`
          break;
  
          case 'color':
              color = `${localStorage.getItem(key)}`
          break;

          case 'name':
              name = `${localStorage.getItem(key)}`
          break;

          case 'word-id':
              wordsId = `${JSON.parse(localStorage.getItem(key)!)}`;
          break;

          case 'learnt-id':
              learntId = `${JSON.parse(localStorage.getItem(key)!)}`;
          break;

          case 'authorization':
              authorization = `${localStorage.getItem(key)}`;
          break;
          
        }
  
      }
      await renderWords(+page, +level, en, ru, color);

      for (let button of levelButtons){
       if(button.id === level) {
        button.classList.add('active')
       }else{
        button.classList.remove('active')
       }
      }
      dictionaryButton.style.backgroundColor = `#${color}`;
      
      for (let i = 0; i < paginationButtons.length; i++) {
        const button = paginationButtons[i] as HTMLButtonElement;
        button.style.backgroundColor = `#${color}`
        
      }

      if(+page > 0){

        prev.disabled = false;
        first.disabled = false;
        if(+page === 29){
            next.disabled = true;
            last.disabled = true;

        }
      }
      if(ru == 'appear'){
        enButton.disabled = false;
        ruButton.disabled = true;
      }
      pageInner.innerHTML = `${+page + 1}`;

      if(name !== ''){
        displayUserLogin(name);
      }

      if(authorization === 'Authenticated'){
        dictionary.style.display = 'flex';
        showAuthorizedButton(0);
        showAuthorizedButton(1);
      }
    
      applyDifficultAppearance();
      applyLearntAppearance();
}

export const showAuthorizedButton = (num: number) => {
  const cards = card_wrapper.children;

  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    const button = card.children[0].children[num] as HTMLButtonElement;
    button.style.display = 'flex';
    
  }
}