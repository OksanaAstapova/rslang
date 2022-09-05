import { audioStart } from "../../utils";
import { Words } from "../../template/interfaces";
import SprintModel from "./SprintModel";
import SprintView from "./SprintView";
import router from "../../router";

export default class SprintPresenter {
  level:string = 'any';
  page:string = 'any'
  model: SprintModel  = new SprintModel();
  view: SprintView;

  answers: Words = [];

  constructor(view: SprintView) {
    this.view = view;
  }

  playSound(numberWordsEng: number) {
    this.model.playAudio(numberWordsEng);  
  }

  endGame(){
    this.view.renderResultsPage(this.model.arrayTranscr);
  }

/*   endButtonGame(){
  
    })
  } */

  async addQuestion() {
    await this.model.makeQuestionsArray(this.level, this.page);
  }

  timer = () => {
    let sec: number = 11;
    let timeT = <HTMLParagraphElement>document.querySelector('.timer');
    
    window.addEventListener('hashchange', () => {
      clearInterval(sec_timer);
      });

      let sec_timer = setInterval(() => {
        if (sec > 0){
            sec--;
        } else {
            clearInterval(sec_timer);
            this.endGame()  
        }

        if (sec < 10) {
          timeT.innerHTML = `0${sec}`;
        } else {
          timeT.innerHTML = `${sec}`;
        }
        return sec;
    }, 1000);
}


  async createQuiz(level: string, page: string) {
    this.level = level;
    this.page = page;
    if (this.level === '6') {
/*       await this.model.getHardWords();
 */    } else {
      await this.model.makeQuestionsArray(this.level, this.page);
    }
    audioStart()
    this.view.renderSprint(this.model.arrayEng, this.model.arrayRus);
    this.timer();
    
  }
}
