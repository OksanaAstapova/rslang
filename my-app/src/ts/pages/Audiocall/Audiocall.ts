import Component from "../../template/Component";
import Page from "../../template/Page";
import { audiocallGame } from "./audiocall-game";
import { root } from '../../router';


const wrapper = document.body.querySelector("#main__root") as HTMLElement;

class AudiocallPage extends Page {
  render() {
    root.innerHTML = ""; // clearing the wrapper element
    // wrapper.append(audiocallGame());
    audiocallGame().then(() => {
      const dropdownContent = document.body.querySelector(
        ".dropdown-menu"
      ) as HTMLElement;
      console.log("dropdown-content->", dropdownContent);
      dropdownContent.addEventListener("click", (event) => {
        console.log("event target->", (event.target as HTMLElement).innerHTML);
      })
    });

    document.body.className = "body";
    return new Component("h1", "audio-header", "Audiocall Game").node;
    // return new Component("", "", "").node;
    // return new Component("p", "", "\n About page").node;
  }
}

export default new AudiocallPage();
