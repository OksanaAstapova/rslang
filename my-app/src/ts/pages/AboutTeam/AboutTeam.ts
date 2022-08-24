import Component from "../../template/Component";
import Page from "../../template/Page";
import { ourTeam } from "./our_team";

const wrapper = document.body.querySelector("#main__root");

class AboutPage extends Page {
  render() {
    document.body.className = "body";
    (wrapper as HTMLElement).append(ourTeam);
    return new Component("", "", "").node;
    // return new Component("p", "", "\n About page").node;
  }
}

export default new AboutPage();
