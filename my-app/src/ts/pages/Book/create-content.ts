import { switchLevels } from "./utils";
import { switchLang } from "./switch-language";

const root = document.querySelector('#main__root') as HTMLElement;
const book_wrapper = document.createElement("div");
export const card_wrapper = document.createElement("div") as HTMLElement;
export const pagination = document.createElement('div');

export const createWords: any = async (page: number, group: number) => {
        const rawResponse = await fetch(`https://rssslang.herokuapp.com/words?page=${page}&group=${group}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
        });
      return await rawResponse.json()
}


export const createBookContent = async () => {

    const nth = await createWords(0, 0)

    const lang_panel = document.createElement("div");
    lang_panel.classList.add('book-buttons')
    lang_panel.innerHTML = `<button class='en' disabled><p>en</p></button>
    <button class='ru'><p>ru</p></button>`
    root.appendChild(lang_panel);

    let left_panel = document.createElement("aside");
    left_panel.classList.add('left-panel');

    const levels = [`<button id='0' class='A1 active'>ELEMENTARY</button>`,
    `<button id='1' class='A2'>PRE-INTERMEDIATE</button>`, 
    `<button id='2' class='B1'>INTERMEDIATE</button>`,
    `<button id='3' class='B2'>UPPER-INTERMEDIATE</button>`,
    `<button id='4' class='C1'>ADVANCED</button>`,
    `<button id='5'class='C2'>PROFICIENCY</button>`];

    levels.forEach(level =>{
        left_panel.innerHTML += level
    })

    book_wrapper.appendChild(left_panel)
    book_wrapper.appendChild(card_wrapper);

    root.appendChild(book_wrapper);

    pagination.classList.add('pagination');
    pagination.innerHTML = `<button class = 'prev' onclick='switchPrevPage()' disabled><p><</p></button>
    <div class='page-number'>1</div>
    <button class='next' onclick='switchNextPage()'><p>></p></button>`;

    book_wrapper.classList.add('book-wrapper')
    root.appendChild(pagination);

    switchLang();
    switchLevels();

}

export const renderWords = async (page: number, level: number, en: string, ru: string) => {

  const content = await createWords(page, level);

  card_wrapper.classList.add('card-wrapper');

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
                <div class = ${en}>
                    <p>${word.textMeaning}</p>
                    <p class='text-italic'>${word.textExample}</p>
                </div>
                <div class= ${ru}>
                    <p>${word.textMeaningTranslate}</p>
                    <p class='text-italic'>${word.textExampleTranslate}</p>
                </div>
              </div>
            </div>`
            card_wrapper.innerHTML += card;
        }


}
