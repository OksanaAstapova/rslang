import { switchLang } from "./utils";

const root = document.querySelector('#main__root') as HTMLElement;


export const createWords: any = async () => {
    const rawResponse = await fetch('https://rssslang.herokuapp.com/words?page=0&group=0', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    });
    const content = await rawResponse.json();
  
    console.log(content);
    
    let card_wrapper = document.createElement("div");
    card_wrapper.classList.add('card-wrapper');
    let left_panel = document.createElement("aside");
    left_panel.classList.add('left-panel');
    let book_wrapper = document.createElement("div");
    book_wrapper.classList.add('book-wrapper');
    
    const button_ru = document.createElement("button") as HTMLInputElement;
    const button_en = document.createElement("button") as HTMLInputElement;
    button_en.innerHTML = `<p>en</p>`
    button_en.classList.add('en');
    button_en.disabled = true;
    button_ru.innerHTML = `<p>ru</p>`
    button_ru.classList.add('ru');
    const book_buttons = document.createElement("div");
    book_buttons.classList.add('book-buttons');
    book_buttons.appendChild(button_en);
    book_buttons.appendChild(button_ru);
    
    const levels = [`<button class='A1' disabled>ELEMENTARY</button>`,
    `<button class='A2'>PRE-INTERMEDIATE</button>`, 
    `<button class='B1'>INTERMEDIATE</button>`,
    `<button class='B2'>UPPER-INTERMEDIATE</button>`,
    `<button class='C1'>ADVANCED</button>`,
    `<button class='C2'>PROFICIENCY</button>`];

    levels.forEach(level =>{
        left_panel.innerHTML += level
    })

    const prev = document.createElement("button");
    prev.classList.add('prev');
    prev.disabled = true;
    prev.innerHTML = `<p><</p>`;
    const page = document.createElement("div");
    page.classList.add('page-number');
    page.innerHTML = `1`;
    const next = document.createElement("button");
    next.classList.add('next');
    next.innerHTML = `<p>></p>`;
    const pagination = document.createElement('div');
    pagination.classList.add('pagination');
    [prev, page, next].forEach(div => {
        pagination.appendChild(div)
    })
    
    for (let i=0; i < content.length; i++){
        const word = content[i];
        const card = `<div class='card' id='${word.id}'>
          <img class='card-img' src='https://rssslang.herokuapp.com/${word.image}' alt='${word.word}'>
          <div class='card-audio'><audio src='https://rssslang.herokuapp.com/${word.audio}'></audio></div>
          <div class='card-info'>
            <h1 class='card-title'>${word.word}</h1>
            <div class='translate-panel'>
                <h2>${word.wordTranslate}</h2>
                <h2>${word.transcription}</h2>
            </div>
            <div class = 'description-eng'>
                <p>${word.textMeaning}</p>
                <p class='text-italic'>${word.textExample}</p>
            </div>
            <div class='description-ru hide'>
                <p>${word.textMeaningTranslate}</p>
                <p class='text-italic'>${word.textExampleTranslate}</p>
            </div>
          </div>
        </div>`
        card_wrapper.innerHTML += card;
    }
    card_wrapper.appendChild(pagination);

    [left_panel, card_wrapper].forEach(panel =>{
        book_wrapper.appendChild(panel);
    })
   
    root.appendChild(book_buttons);
    root.appendChild(book_wrapper);

    switchLang();
  };


