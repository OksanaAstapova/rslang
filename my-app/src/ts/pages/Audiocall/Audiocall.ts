import Component from "../../template/Component";
import Page from "../../template/Page";
import { audiocallGame } from "./audiocall-game";
import { root } from '../../router';
import { randomPage, getWords, createAudiocallCard, WordObj } from "./get-words";

class AudiocallPage extends Page {
  render() {
    root.innerHTML = ""; // clearing the wrapper element
    // wrapper.append(audiocallGame());
    audiocallGame().then(() => {
      const dropdownContent = document.body.querySelector(".dropdown-menu") as HTMLElement;
      // console.log("dropdown-content->", dropdownContent);
      dropdownContent.addEventListener("click", (event) => {

        const level = (event.target as HTMLElement).innerHTML.split(" ")[0]; // get the level of words - from 0 to 5
        const group = randomPage(); // randomize page number in audiocall
        
        const levelWords = getWords(group, Number(level)).then(
          (levelWords: Array<WordObj>) => {
            console.log("getWords->", levelWords);
            createAudiocallCard(levelWords);

            // const cardContent = document.body.querySelector(".card") as HTMLElement;
            // const answer = document.body.querySelector(".card-footer") as HTMLElement;
            // console.log("card-footer->", answer);
            // answer.addEventListener("click", (e) => {
            //   if ((e.target as HTMLElement).dataset.answer == "wrong") {
            //     console.log("Wrong!")
            //   }
            //   if ((e.target as HTMLElement).dataset.answer == "right") {
            //     console.log("Right!")
            //     alert("Right answer!");
            //     createAudiocallCard(levelWords);
            //   }

            // })

      
          
          }
        );
      });
    });

    document.body.className = "body";
    return new Component("h1", "audio-header", "").node;
    // return new Component("h1", "audio-header", "Audiocall Game").node;
    // return new Component("", "", "").node;
    // return new Component("p", "", "\n About page").node;
  }
}

export default new AudiocallPage();

