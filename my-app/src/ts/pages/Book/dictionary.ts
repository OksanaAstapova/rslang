import { root } from "../../router";
import { book_wrapper, card_wrapper, createWords, pagination } from "./create-content";let localStorageIds: (string | undefined)[] = [];


export const getfromStorage = (el: any) => {

    let elem: string = '';
    if (localStorage.length != 0){

        for (let i = 0; i < localStorage.length; i++) {
          let key = localStorage.key(i);

          if (key == `${el}`){
            elem = `${localStorage.getItem(key)}`

          }
        }
      }
    return elem;
}

export const getWordIdFromStorage = () => {

  let id: string = '';
  if (localStorage.length != 0){

      for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);

        if (key == 'word-id'){
          id = `${JSON.parse(localStorage.getItem(key)!)}`;

        }
      }
    }
  return id;
}


export const getDifficulties = () => {
    
    const dictionaryButton = document.querySelector('.dictionary') as HTMLButtonElement;
    const en = document.querySelector('.en') as HTMLButtonElement;
    const ru = document.querySelector('.ru') as HTMLButtonElement;
    const title = document.querySelector('.book-title') as HTMLElement;
    const diffWrapper = document.createElement('div');
    diffWrapper.classList.add('difficult')

    dictionaryButton.addEventListener('click', async () => {

      if(dictionaryButton.classList.contains('active')){

        dictionaryButton.classList.remove('active');

        [pagination, book_wrapper, en, ru].forEach(el => {
         el.style.display = 'flex';
        })
        title.innerText = 'Book';
        diffWrapper.innerHTML = '';

      }else{
        dictionaryButton.classList.add('active');
        [pagination, book_wrapper, en, ru].forEach(el => {
         el.style.display = 'none';
        })
        title.innerText = 'Dictionary';
        let userId = getfromStorage('id');
       const content = await getUserWords(userId);
       const wordsId: string[] = [];
       const difficultWords: any[] = [];
       content.forEach((word: any) => {
         wordsId.push(word.wordId)
       })
       console.log(wordsId)
       for (let m = 0; m < 7; m++) {
         for (let i = 0; i < 31; i++) {
           let  words = await createWords(i, m);
           for (let j = 0; j < words.length; j++) {
             const word = words[j];
             for (let t = 0; t < wordsId.length; t++) {
               const id = wordsId[t];
               if(word.id === id){
                 difficultWords.push(word)
               }
             }
           }
           if(difficultWords.length === wordsId.length){
             break;
           }
         }
         
       }
       console.log(difficultWords)

       if(difficultWords.length == 0){
        diffWrapper.innerHTML = `<p class='no-difficulties'>You have no difficult words in your dictionary</p>`;
       root.appendChild(diffWrapper);

       }else{
 
       
 
       for (let i=0; i < difficultWords.length; i++){
         const word = difficultWords[i];
         const card = `<div class='card diff' id='${word.id}'>
           <div class='card-img' >
             <div class='difficult-word-remove' data-tooltip="remove" onclick='removeDifficult(${i})' id='difficult-remove ${i}'>X</div>
             <img src='https://rssslang.herokuapp.com/${word.image}' alt='${word.word}'>
           </div>
           <div class='card-audio' onclick='playAudioDiff(${i})'>
             <audio id='audio-diff ${i}' src='https://rssslang.herokuapp.com/${word.audio}'></audio>
             <audio id='audioExample-diff ${i}' src='https://rssslang.herokuapp.com/${word.audioExample}'></audio>
             <audio id='audioMeaning-diff ${i}' src='https://rssslang.herokuapp.com/${word.audioMeaning}'></audio>
 
             <svg width="0" height="0" class="hidden"><symbol version="1.1" id="audio" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" xml:space="preserve" viewBox="0 0 496.159 496.159">
             <path style="fill:#orange;" d="M496.159,248.085c0-137.023-111.07-248.082-248.076-248.082C111.071,0.003,0,111.063,0,248.085
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
         diffWrapper.innerHTML += card;
       }
       root.appendChild(diffWrapper);
      }
    }
  

    })
}

window.removeDifficult = removeDifficult;

async function removeDifficult(i: number){
  const wordCloseButton = document.getElementById(`difficult-remove ${i}`) as HTMLElement;
  const word = wordCloseButton.parentElement?.parentElement;
  console.log(word?.id)
  
  const wordsIds = getWordIdFromStorage();
  let ids = wordsIds.split(',')
  ids.forEach(id => {
    if(id === word?.id){
      let i = ids.indexOf(id);
      ids.splice(i, 1);
    }
  })
  localStorage.setItem("word-id", JSON.stringify(ids));
  
  console.log(ids)
  word?.remove();

  let userId = getfromStorage('id');

  const content = await getUserWords(userId);
  content.forEach((el: any) => {
    if(el.wordId === word?.id){
      const id = el.wordId;
      deleteUserWord(userId, id)
    }
  })

  const cards = card_wrapper.children;
      
      for (const card of cards) {
        if(card.id === word?.id){
          const button = card.children[0].children[0] as HTMLStyleElement;
          button.style.backgroundColor = 'white';
        }
      }

}

export const playGames = () => {

    const train = document.querySelector('.train') as HTMLButtonElement;
    const playWrapper = document.querySelector('.play-games') as HTMLElement;

    train.addEventListener('click', () => {
        train.classList.toggle('active');
        if(train.classList.contains('active')){
            playWrapper.style.display = 'flex';
        }else{
            playWrapper.style.display = 'none';

        }

    })

}


window.putDifficult = putDifficult;


function putDifficult(i: number){

    const button = document.getElementById(`difficult-word ${i}`) as HTMLElement;
    button.style.backgroundColor = 'red';

    const userId = getfromStorage('id');
    const card = button.parentElement?.parentElement;
    const wordId = card?.id
   
    createUserWord({
        userId: userId,
        wordId: wordId,
        word: { "difficulty": "hard", 
        "optional": {testFieldString: 'test', testFieldBoolean: true} }
    });
    if (localStorage.length != 0){

      for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);

        if (key == 'word-id'){
          let storageWordsId = `${JSON.parse(localStorage.getItem(key)!)}`;
          const ids = storageWordsId.split(',')
          // console.log(ids)
          ids.forEach(id => {
            localStorageIds.push(id)
          })
        }
      }
    }

      localStorageIds.push(wordId);
      
      let set = new Set(localStorageIds)
      localStorageIds = Array.from(set)

      localStorage.setItem("word-id", JSON.stringify(localStorageIds));

      


}


const createUserWord = async ({ userId, wordId, word }: any) => {
    let token = getfromStorage('token');
    console.log(token)

    const rawResponse = await fetch(`https://rssslang.herokuapp.com/users/${userId}/words/${wordId}`, {
      method: 'POST',
      headers: {
        'Authorization':`Bearer ${token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(word)
    });
    const content = await rawResponse.json();
    console.log(content);

    return content;

};
const deleteUserWord = async (userId: string, wordId: string) => {
  let token = getfromStorage('token');

  const rawResponse = await fetch(`https://rssslang.herokuapp.com/users/${userId}/words/${wordId}`, {
    method: 'DELETE',
    headers: {
      'Authorization':`Bearer ${token}`,
      'Content-Type': 'application/json'
    },
  });
  const content = await rawResponse.json();

  return content;

};

   
const getUserWords = async (userId: string) => {
  let token = getfromStorage('token');
    const rawResponse = await fetch(`https://rssslang.herokuapp.com/users/${userId}/words`, {
      method: 'GET',
     
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json',
      }
    });
    const content = await rawResponse.json();
  
    return content;
  };

  
