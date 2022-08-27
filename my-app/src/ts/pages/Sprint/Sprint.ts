import Component from '../../template/Component';
import Page from '../../template/Page';
import { sprintDescription } from '../../utils';
import SprintView from "./SprintView";

class SprintPage extends Page {
  public currentLevel: undefined | string;

  render() {
    this.renderLevelPage();
    
    return new Component('p', '', '').node;
  }

  renderLevelPage() {
    const rootMain = document.querySelector('.main') as HTMLElement;
    const header = document.querySelector('.header') as HTMLElement;
    const footer = document.querySelector('.footer') as HTMLElement;
    header.classList.add('display-none');
    footer.classList.add('display-none');
   
    const choice = new Component('div', 'choice__block');
    const choiceBlock = choice.node;
    const choiceTextDescription = new Component('pre', 'choice__block-description', sprintDescription).node;
    const choiceTitle = new Component('p', 'choice__block-title', 'Select difficulty level').node;
    const choiceLevelButtons = new Component('div', 'choice__block-buttons').node;
    choiceBlock.append(choiceTextDescription, choiceTitle, choiceLevelButtons);
    const levelArray = ['1', '2', '3', '4', '5', '6'];
    levelArray.forEach( el => {
      const levelButton = new Component('button', `choice__block-button button__${el}`, el ).node;
      choiceLevelButtons.append(levelButton);
      levelButton.addEventListener('click', async () => {
        this.currentLevel = String(Number(levelButton.innerText) - 1);
        console.log(this.currentLevel);
        choice.destroy();
        let sprintView = new SprintView();
         await sprintView.startQuiz(this.currentLevel, 'any');
      })
    })

    rootMain.appendChild(choiceBlock);


  }
}

export default new SprintPage();