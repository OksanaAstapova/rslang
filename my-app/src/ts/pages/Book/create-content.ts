import { switchLevels} from "./switch-levels";
import { switchPages} from "./switch-pages";
import { switchLang } from "./switch-language";
import { root } from '../../router';
import { getDifficulties, playGames } from "./dictionary";
import { loadStorage } from "./local-storage";

export const book_wrapper = document.createElement("div");
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
    <button class='ru'><p>ru</p></button>
    <button class = 'dictionary'>DICTIONARY</button>`
    root.appendChild(lang_panel);

    let left_panel = document.createElement("aside");
    left_panel.classList.add('left-panel');

    const levels = [`<button id='0' class='A1 active' value='b0a2f9'>ELEMENTARY</button>`,
    `<button id='1' class='A2' value='18d8da' >PRE-INTERMEDIATE</button>`, 
    `<button id='2' class='B1' value='bbcb2d'>INTERMEDIATE</button>`,
    `<button id='3' class='B2' value='ffd33f'>UPPER-INTERMEDIATE</button>`,
    `<button id='4' class='C1' value='f4973a'>ADVANCED</button>`,
    `<button id='5'class='C2'value='e770d4'>PROFICIENCY</button>`];

    levels.forEach(level =>{
        left_panel.innerHTML += level
    })

    book_wrapper.innerHTML = '';
    book_wrapper.appendChild(left_panel)
    book_wrapper.appendChild(card_wrapper);

    root.appendChild(book_wrapper);

    pagination.classList.add('pagination');
    pagination.innerHTML = `<button class = 'first' disabled><<</button>
    <button class = 'prev' disabled><</button>
    <div class='page-number'>1</div>
    <button class='next'>></button>
    <button class='last'>>></button>
    <button class='train'>Train</button>
    <div class = 'play-games'>
    <button class='play-audiocall'>Audiocall</button>
    <button class='play-sprint'>Sprint</button>
    </div>`;

    book_wrapper.classList.add('book-wrapper')
    root.appendChild(pagination);

    switchLang();
    switchLevels();
    switchPages();
    getDifficulties();
    playGames();

    if (localStorage.length != 0) {
      loadStorage()
      
    }else renderWords(0, 0, "appear", "hide", 'b0a2f9');

}

export const renderWords = async (page: number, level: number, en: string, ru: string, color: string) => {

  const content = await createWords(page, level);
  card_wrapper.classList.add('card-wrapper');
  card_wrapper.innerHTML = '';

  for (let i=0; i < content.length; i++){
            const word = content[i];
            const card = `<div class='card' id='${word.id}'>
              <div class='card-img' >
                <div class='difficult-word' data-tooltip="difficult word" onclick='putDifficult(${i})' id='difficult-word ${i}'></div>
                <img src='https://rssslang.herokuapp.com/${word.image}' alt='${word.word}'>
              </div>
              <div class='card-audio' onclick='playAudio(${i})'>
                <audio id='audio ${i}' src='https://rssslang.herokuapp.com/${word.audio}'></audio>
                <audio id='audioExample ${i}' src='https://rssslang.herokuapp.com/${word.audioExample}'></audio>
                <audio id='audioMeaning ${i}' src='https://rssslang.herokuapp.com/${word.audioMeaning}'></audio>

                <svg width="0" height="0" class="hidden"><symbol version="1.1" id="audio" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" xml:space="preserve" viewBox="0 0 496.159 496.159">
                <path style="fill:#${color};" d="M496.159,248.085c0-137.023-111.07-248.082-248.076-248.082C111.071,0.003,0,111.063,0,248.085
                  c0,137.001,111.07,248.07,248.083,248.07C385.089,496.155,496.159,385.086,496.159,248.085z"/>
                <g>
                  <path style="fill:#FFFFFF;" d="M284.828,128.917c-3.409-1.851-7.559-1.688-10.813,0.425l-95.137,61.791h-35.164
                    c-5.845,0-10.583,4.738-10.583,10.582v92.728c0,5.845,4.738,10.583,10.583,10.583h35.164l95.137,61.79
                    c1.748,1.135,3.754,1.708,5.765,1.708c1.733,0,3.471-0.426,5.049-1.283c3.41-1.852,5.534-5.42,5.534-9.301V138.218
                    C290.363,134.338,288.239,130.768,284.828,128.917z"/>
                  <path style="fill:#FFFFFF;" d="M319.82,322.937c0.894,0,1.801-0.162,2.685-0.504c24.239-9.412,40.524-38.49,40.524-72.361
                    c0-29.956-13.2-57.047-33.63-69.018c-3.534-2.072-8.08-0.883-10.153,2.652c-2.072,3.535-0.885,8.082,2.651,10.152
                    c15.971,9.358,26.291,31.424,26.291,56.213c0,27.36-12.77,51.426-31.055,58.525c-3.82,1.482-5.715,5.783-4.231,9.604
                    C314.041,321.139,316.847,322.937,319.82,322.937z"/></path></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></symbol></svg>
               <svg class="icon"><use xlink:href="#audio"></use></svg>
              </div>
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
