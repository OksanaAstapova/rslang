import Component from "../../template/Component";
import Page from "../../template/Page";
import { ourTeam } from "./our_team";

const wrapper = document.body.querySelector("#main__root") as HTMLElement;

class AboutPage extends Page {
  render() {
    document.body.className = "body";
    wrapper.innerHTML = ""; // clearing the wrapper element
    wrapper.append(ourTeam);
    return new Component("", "", "").node;
    // return new Component("p", "", "\n About page").node;
  }
}

export default new AboutPage();
