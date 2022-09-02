import Component from "../../template/Component";
import Page from "../../template/Page";
import { audiocallGame } from "./audiocall-game";
import { root } from '../../router';
import { randomPage, getWords, createAudiocallCard } from "./get-words";

const wrapper = document.body.querySelector("#main__root") as HTMLElement;

class AudiocallPage extends Page {
  render() {
    root.innerHTML = ""; // clearing the wrapper element
    // wrapper.append(audiocallGame());
    audiocallGame().then(() => {
      const dropdownContent = document.body.querySelector(".dropdown-menu") as HTMLElement;
      console.log("dropdown-content->", dropdownContent);
      dropdownContent.addEventListener("click", (event) => {
        const level = (event.target as HTMLElement).innerHTML.split(" ")[0]; // get the level of words - from 0 to 5
        const group = randomPage(); // randomize page number in audiocall
        const levelWords = getWords(group, Number(level)).then(
          (q: any) => {
            console.log("getWords->", q);
            createAudiocallCard(q)}
        );
      })
    });

    document.body.className = "body";
    return new Component("h1", "audio-header", "Audiocall Game").node;
    // return new Component("", "", "").node;
    // return new Component("p", "", "\n About page").node;
  }
}

export default new AudiocallPage();

