import { renderWords, pagination } from "./create-content";

export const loadStorage = () => {

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

    let level = '0';
      let page = '0';
      let en = 'appear';
      let ru = 'hide';
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
        
          
        }
  
      }
      renderWords(+page, +level, en, ru, color);

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
      
}