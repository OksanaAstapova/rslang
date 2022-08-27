import Component from "../../template/Component";
import { audioFalse, audioTrue, /* createPopUp, */ getRandom } from "../../utils";
import { Word } from "../../template/interfaces";
import SprintPresenter from "./SprintPresenter";

export default class SprintView {
  private presenter: SprintPresenter = new SprintPresenter(this);
  numberWordsEng:number = 0;
  numberWordsRus:number = 0;
  arrayEng: string[] = []; 
  arrayRus: string[] = [];
  arrTrueAnswer:string[] = [];
  arrBooleanAnswer:string[] = [];
  sum:number = 1;
  count:number = 0;
  rightAnswerSeries:number = 0;
  longestSeries: number = 0;
 
  gameContainer = <HTMLDivElement>document.querySelector('#main__root');
  leftBut = <HTMLButtonElement>document.getElementById('btn-left');
  rightBut = <HTMLButtonElement>document.getElementById('btn-right');

  soundImage = <HTMLImageElement>document.getElementById('sound-image');

  constructor () {
    
  }

  async startQuiz(level: string, page: string) {
    await this.presenter.createQuiz(level, page);
    this.renderToyBlock();
    this.renderCircleBlock();
  }

  renderSprint = (arrayEng: string[], arrayRus: string[]) => {
    this.arrayEng = arrayEng;
    this.arrayRus = arrayRus;
    const pageWrapper = <HTMLDivElement>document.querySelector('#main__root');
    const closePageButton = new Component('button', 'close-sprint', '×').node;
   /*  closePageButton.addEventListener('click', () => {
      createPopUp('sprint', this.presenter, this.prepareStatistics());
    }) */
    pageWrapper.append(closePageButton);
    const html =`
    <div class="card">
    <div class="sprint-top">
      <div class="block-timer">
        <p class="timer"></p>
      </div>
      <div class="block-result">
        <p class="result" id="result">0</p>
      </div>
    </div>
    <div class="card-circle-block" id="card-circle-block">
    
    </div>
    <div class="png-image-block" id="png-image-block">
    </div>
    <div class="card-body">
      </div> 
  </div>
    `
    this.gameContainer.innerHTML = html;
    const buttonsGroup = new Component('div', 'btn-group').node;
    const leftButton = new Component('button', 'btn-answer btn-left', 'Неверно').node;
    leftButton.addEventListener('click', () => {
      this.nextQuestionFalse();
    });


    document.addEventListener('keydown', (event) => {
      if (event.code == 'ArrowLeft') {
        this.nextQuestionFalse();
        leftButton.style.backgroundColor = "#c2c2c2ee";
      }
    });
    document.addEventListener('keyup', (event) => {
      if (event.code == 'ArrowLeft') {
        leftButton.style.backgroundColor = "transparent";
      }
    });

    
    buttonsGroup.append(leftButton);
    const rightButton = new Component('button', 'btn-answer btn-right', 'Верно').node;
    rightButton.addEventListener('click', () => {
      this.nextQuestionTrue();
    });

    document.addEventListener('keydown', (event) => {
      if (event.code == 'ArrowRight') {
        this.nextQuestionTrue()
        rightButton.style.backgroundColor = "#c2c2c2ee";
      }
    });
    document.addEventListener('keyup', (event) => {
      if (event.code == 'ArrowRight') {
        rightButton.style.backgroundColor = "transparent";
      }
    });

    buttonsGroup.append(rightButton);
    this.gameContainer.append(buttonsGroup);
    this.renderMainWords(this.numberWordsEng, this.numberWordsRus);
}

renderMainWords = (numberWordsEng: number, numberWordsRus:number) => {
  let cardBody = <HTMLDivElement>document.querySelector('.card-body');
  cardBody.innerHTML = `<img id="sound-image"
  src="./images/sound.png" alt="sound" />
     <h5 class="card-title">${this.arrayEng[numberWordsEng]}</h5>
     <p class="card-text">${this.arrayRus[numberWordsRus]}</p>`;
 }

nextQuestionTrue = () =>  {
  if(this.numberWordsEng === this.numberWordsRus){
      this.rightAnswerSeries++;
/*       this.presenter.onWordWin(this.numberWordsEng);
 */      this.arrTrueAnswer.push(this.arrayEng[this.numberWordsEng]);
      this.arrBooleanAnswer.push('true');
      audioTrue();
  } else {
    if (this.rightAnswerSeries > this.longestSeries) {
      this.longestSeries = this.rightAnswerSeries;
    }
    this.rightAnswerSeries = 0;
/*       this.presenter.onWordFail(this.numberWordsEng);
 */      this.arrTrueAnswer = [];
      this.arrBooleanAnswer.push('false');
      audioFalse()
  }

  this.sumResult();
  this.renderCircleBlock();
  this.changeColorPoint();
  this.renderToyBlock();

  this.numberWordsEng += 1;
  this.numberWordsRus = this.numberWordsEng;
  if(!getRandom()){
      if(this.numberWordsEng >=0 && this.numberWordsEng <10){
        this.numberWordsRus = this.numberWordsEng + 10;
      } else if(this.numberWordsEng >=10){
        this.numberWordsRus = this.numberWordsEng - 10;
      }
  } 
  if(this.numberWordsEng % 19 === 0){
    this.presenter.addQuestion();
  }

   this.renderMainWords(this.numberWordsEng, this.numberWordsRus);
}

nextQuestionFalse = () => {
  if (this.numberWordsEng !== this.numberWordsRus) {
    this.rightAnswerSeries++;
/*     this.presenter.onWordWin(this.numberWordsEng);
 */    this.arrTrueAnswer.push(this.arrayEng[this.numberWordsEng])
    this.arrBooleanAnswer.push('true');
      audioTrue();
  } else {
    if (this.rightAnswerSeries > this.longestSeries) {
      this.longestSeries = this.rightAnswerSeries;
    }
    this.rightAnswerSeries = 0;
/*     this.presenter.onWordFail(this.numberWordsEng);
 */    this.arrTrueAnswer = [];
    this.arrBooleanAnswer.push('false');
    audioFalse()
  }
  this.sumResult();
  this.renderCircleBlock();
  this.changeColorPoint();
  this.renderToyBlock();

  this.numberWordsEng += 1;
  this.numberWordsRus = this.numberWordsEng;
  if(getRandom()){
      if(this.numberWordsEng >=0 && this.numberWordsEng <10){
        this.numberWordsRus = this.numberWordsEng + 10;
      } else if(this.numberWordsEng >=10){
        this.numberWordsRus = this.numberWordsEng - 10;
      }
  } 
   if(this.numberWordsEng % 19 === 0){
     this.presenter.addQuestion();
  } 

  this.renderMainWords(this.numberWordsEng, this.numberWordsRus);
}

playAudio = () =>{
  let audioBut = document.getElementById('sound-image') as HTMLImageElement;
  audioBut.addEventListener('click', ()=> {
    this.presenter.playSound(this.numberWordsEng + 1);;
  })

}

sumResult = () => {
  const resultSum = <HTMLParagraphElement>document.getElementById('result');
  if(this.arrTrueAnswer.length === 1){
      this.count += this.sum ;
  return resultSum.innerText = `${this.count}`;
  }
  if(this.arrTrueAnswer.length === 2){
      this.count += this.sum ;
      return resultSum.innerText = `${this.count}`;
  }
  if(this.arrTrueAnswer.length === 3){
    this.count += this.sum ;
      return resultSum.innerText = `${this.count}`;
  }
  if(this.arrTrueAnswer.length > 3 && this.arrTrueAnswer.length <= 6){
    this.sum = 10;
    this.count += this.sum ;
      return resultSum.innerText = `${this.count}`;
  }
  if(this.arrTrueAnswer.length > 6 && this.arrTrueAnswer.length <= 9){
    this.sum = 25;
    this.count += this.sum ;
      return resultSum.innerText = `${this.count}`;
  }
  if(this.arrTrueAnswer.length > 9 ){
    this.sum = 50;
    this.count += this.sum ;
      return resultSum.innerText = `${this.count}`;
  }
}

renderCircleBlock = () => {
  const cardCircle = <HTMLDivElement>document.getElementById('card-circle-block');
      let color1 = "grey";
      let color2 = "grey"
      let color3 = "grey"
      if(this.arrTrueAnswer.length % 3 === 1) color1 = "#18F018";
      if(this.arrTrueAnswer.length % 3 === 2){
          color1 = "#18F018";
          color2 = "#18F018";
      }  
      if(this.arrTrueAnswer.length % 3 === 0 && this.arrTrueAnswer.length > 1){
          color1 = "#18F018";
          color2 = "#18F018";
          color3 = "#18F018";
      } 
      let addPoint ="+1"
      if(this.arrTrueAnswer.length < 3){
        addPoint = "+1";
      }
      if(this.arrTrueAnswer.length >= 3 && this.arrTrueAnswer.length < 6){
        addPoint = "+10";
      }
      if(this.arrTrueAnswer.length >= 6 && this.arrTrueAnswer.length < 9){
        addPoint = "+25";
      }
      if(this.arrTrueAnswer.length >= 9){
        addPoint = "+50";
      }
       cardCircle.innerHTML = `
       <div class="block-point">
          <h5 id="block-point-inner">${addPoint}</h5>
        </div>
        <div class="block-point-svg">
        <svg height="100" width="100">
        <circle cx="17" cy="17" r="12" stroke="black" stroke-width="1" fill="${color1}" class="circle" />
      </svg>
      <svg height="100" width="100">
        <circle cx="17" cy="17" r="12" stroke="black" stroke-width="1" fill="${color2}" class="circle"/>
      </svg>
      <svg height="100" width="100">
        <circle cx="17" cy="17" r="12" stroke="black" stroke-width="1" fill="${color3}" class="circle" />
      </svg>      </div>
      `
  }

  changeColorPoint = () => {
    let innerPoint = <HTMLHeadElement>document.getElementById('block-point-inner');
    if(this.arrTrueAnswer.length <= 3){
      innerPoint.classList.add('blue');
      if(innerPoint.classList.contains('red'))  innerPoint.classList.remove('red');
      if(innerPoint.classList.contains('orange'))  innerPoint.classList.remove('orange');
      if(innerPoint.classList.contains('chartreuse'))  innerPoint.classList.remove('chartreuse');
    }
    if(this.arrTrueAnswer.length >= 3 && this.arrTrueAnswer.length < 6){
      innerPoint.classList.add('red')
    }
   if(this.arrTrueAnswer.length >= 6 && this.arrTrueAnswer.length < 9){
    innerPoint.classList.remove('red')
    innerPoint.classList.add('orange')
  }
  if(this.arrTrueAnswer.length >= 9 ){
    innerPoint.classList.remove('orange')
    innerPoint.classList.add('chartreuse')
  } 
  }

  renderToyBlock = () => {
    const toyBlock = <HTMLDivElement>document.getElementById('png-image-block');
    let opacity1 = 'opacity';
    let opacity2 = 'opacity';
    let opacity3 = 'opacity'; 

    if(this.arrTrueAnswer.length >= 3 ) opacity1 = "";
    if(this.arrTrueAnswer.length >= 6 ) opacity2 = "";
    if(this.arrTrueAnswer.length >= 9 ) opacity3 = "";
    
    toyBlock.innerHTML = `  <img
     src="./images/sprint/makaka1.png"
     class="card-img-top png-image"
     alt="crab"
   />
   <img
     src="./images/sprint/makaka2.png"
     class="card-img-top1 png-image ${opacity1}"
     alt="duck"
   />
   <img
     src="./images/sprint/makaka3.png"
     class="card-img-top2 png-image ${opacity2}"
     alt="poni"
   />
   <img
     src="./images/sprint/makaka4.png"
     class="card-img-top3 png-image ${opacity3}"
     alt="sheep"
   />
    `
}



renderResultsPage = (arrayTranscription:string[]) =>{
/*   this.presenter.sendStatistics(this.prepareStatistics());
 */  const html =`
  <div class="card">
  <h6 class="card-title">Ваш результат ${this.count}</h6>

  <div class="card-bodys">
    
    <div class="sprint-results"></div>
  </div>
</div>
  `
  while (this.gameContainer.firstChild) {
    this.gameContainer.removeChild(this.gameContainer.firstChild);
  }

  const resultContainer = new Component('div', 'sprint-results-page').node;
  resultContainer.innerHTML = html;
  this.gameContainer.append(resultContainer);
  let sprintResults = <HTMLDivElement>document.querySelector('.sprint-results'); 
  const resultList = new Component('ul', 'sprint-results-list', ).node;
  sprintResults.append(resultList);

   for(let i = 1; i <= this.numberWordsEng; i++){
    const resultItem = new Component('li', 'sprint-results-item', ).node;
    const audioImage = `<img src="../../images/sound.png" alt="sound" class="results-img" data-number="${i-1}" id='sound-image${i-1}'>`;
    const audioButton = new Component('button', 'sprint-results-button').node;
    audioButton.innerHTML =  audioImage;
    audioButton.addEventListener('click', ()=> {
      this.presenter.playSound(i);
    })
    resultItem.append(audioButton);
    const resultText = `
      <h5 class="engWord">${this.arrayEng[i-1]}</h5>
      <p class="transr">${arrayTranscription[i-1]}</p>
      <h5 class="rusWords">${this.arrayRus[i-1]}</h5>
      <img src="./images/${this.arrBooleanAnswer[i-1]}.png" alt="boolean" class="boolenImage">
    `
    const resultItemText = new Component('div', 'result-item-text').node;
    resultItemText.innerHTML = resultText;
    resultItem.append(resultItemText);
    resultList.append(resultItem);
   }
 }

}
