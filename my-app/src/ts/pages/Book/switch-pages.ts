import { renderWords, card_wrapper, pagination } from "./create-content";
import { applyDifficultAppearance, applyLearntAppearance } from "./switch-levels";
import { getfromStorage } from "./dictionary";
import { showAuthorizedButton } from "./local-storage";

export const switchPages = () => {

    const first = pagination.children[0] as HTMLButtonElement;
    const prev = pagination.children[1] as HTMLButtonElement;
    const next = pagination.children[3] as HTMLButtonElement;
    const last = pagination.children[4] as HTMLButtonElement;
    
    const level_panel = document.querySelector(".left-panel") as HTMLElement;
    const levels = level_panel.children;
    const page = document.querySelector(".page-number") as HTMLElement;
    const ruButton = document.querySelector(".ru") as HTMLButtonElement;
  
    let level = 0;
    let color = '';
    let counter = +page.innerHTML;
    let en = `appear`;
    let ru = `hide`;
  
    pagination.addEventListener('click', async (e) => {
      const target = e.target as HTMLButtonElement;

      
      switch (target.className) {
  
        case 'first':
  
          first.disabled = true;
          prev.disabled = true;
          next.disabled = false;
          last.disabled = false;
  
          for (let i = 0; i < levels.length; i++) {
            if (levels[i].classList.contains("active")) {
              const button = levels[i] as HTMLButtonElement
              level = +levels[i].id;
              color = button.value;
            }
          }
  
          card_wrapper.innerHTML = "";
  
          page.innerHTML = '1';
  
          if (ruButton.disabled == true) {
            ru = `appear`;
            en = `hide`;
          }
        
          await renderWords(0, level, en, ru, color);
          
          localStorage.setItem('page', '0');
          
  
          break;
        
         case 'prev':
  
          next.disabled = false;
          last.disabled = false;
  
  
          counter = +page.innerHTML
          counter--;
          let number = counter - 1;
  
  
          for (let i = 0; i < levels.length; i++) {
                if (levels[i].classList.contains("active")) {
                  const button = levels[i] as HTMLButtonElement
                  level = +levels[i].id;
                  color = button.value;
                }
              }
  
          card_wrapper.innerHTML = "";
  
          page.innerHTML = counter.toString();
          counter += -1;
          if (counter == 0) {
            first.disabled = true;
            prev.disabled = true;
          }
  
          if (ruButton.disabled == true) {
                ru = `appear`;
                en = `hide`;
              }
            
             await renderWords(number, level, en, ru, color);
             localStorage.setItem('page', number.toString());
             
              
          break;
        
        case 'next':
  
          first.disabled = false;
          prev.disabled = false;
          counter = +page.innerHTML
  
            
          counter++;
          
          page.innerHTML = counter.toString();
  
          let num = counter - 1;
  
            card_wrapper.innerHTML = "";
          
  
            for (let i = 0; i < levels.length; i++) {
              if (levels[i].classList.contains("active")) {
                const button = levels[i] as HTMLButtonElement
                level = +levels[i].id;
                color = button.value;
              }
            }
          
            if (counter == 30) {
              next.disabled = true;
              last.disabled = true;
            }
          
            if (ruButton.disabled == true) {
              ru = `appear`;
              en = `hide`;
            }
          
            await renderWords(num, level, en, ru, color);

            localStorage.setItem('page', num.toString());
           
        break;
  
        case 'last':
          first.disabled = false;
          prev.disabled = false;
          next.disabled = true;
          last.disabled = true;
  
          for (let i = 0; i < levels.length; i++) {
            if (levels[i].classList.contains("active")) {
              const button = levels[i] as HTMLButtonElement
              level = +levels[i].id;
              color = button.value;
            }
          }
  
          card_wrapper.innerHTML = "";
  
          page.innerHTML = '30';
  
          if (ruButton.disabled == true) {
            ru = `appear`;
            en = `hide`;
          }
        
          await renderWords(29, level, en, ru, color);

          localStorage.setItem('page', '29');
          
          break;
      }
      applyDifficultAppearance();
      applyLearntAppearance();
      
      const authorization = getfromStorage('authorization');
      if(authorization === 'Authenticated'){
        
        showAuthorizedButton(0);
        showAuthorizedButton(1);
  }

    })
  }
  