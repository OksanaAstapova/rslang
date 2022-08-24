import Component from "../../template/Component";
import Page from "../../template/Page";
import { ourTeam } from "./our_team";
// import ourTeam from "./src/ts/pages/AboutTeam/our_team";

class AboutPage extends Page {
  render() {
    ourTeam();
    document.body.className = "body";
    return new Component("p", "", "\n About page").node;
  }
}

export default new AboutPage();
