import Component from "../../template/Component";
import Page from "../../template/Page";
import { audiocallGame } from "./audiocall-game";

const wrapper = document.body.querySelector("#main__root") as HTMLElement;

class AudiocallPage extends Page {
  render() {
    document.body.className = "body";
    wrapper.innerHTML = ""; // clearing the wrapper element
    wrapper.append(audiocallGame);
    return new Component("", "", "").node;
    // return new Component("", "", "").node;
    // return new Component("p", "", "\n About page").node;
  }
}

export default new AudiocallPage();

const dropdownContent = document.body.querySelector(
  ".dropdown-content"
) as HTMLElement;
console.log("dropdown-content->", dropdownContent);
