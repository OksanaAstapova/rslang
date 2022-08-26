import { renderWords, card_wrapper, pagination } from "./create-content";
declare global {
  
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
    const color = target.value;
    console.log(color)
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

  pagination.addEventListener('click', (e) => {
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
      
        renderWords(0, level, en, ru, color);

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
          
            renderWords(number, level, en, ru, color);
        
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
        
          renderWords(num, level, en, ru, color);
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
      
        renderWords(29, level, en, ru, color);
        break;
    }
  })
}


window.playAudio = playAudio;

function playAudio(i: number) {
  const sound = document.getElementById(`audio ${i}`) as HTMLAudioElement;
  sound.play();
}
