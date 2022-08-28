import Component from "../../template/Component";
import Page from "../../template/Page";
import { audiocall_game } from "./audiocall-game";

const wrapper = document.body.querySelector("#main__root") as HTMLElement;

class AudiocallPage extends Page {
  render() {
    document.body.className = "body";
    wrapper.innerHTML = ""; // clearing the wrapper element
    wrapper.append(audiocall_game);
    return new Component("", "", "").node;
    // return new Component("p", "", "\n About page").node;
  }
}

export default new AudiocallPage();
