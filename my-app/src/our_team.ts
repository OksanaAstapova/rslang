//our-team
import * as helpers from "./helpers";

const ourTeamFunc = () => {
  const card = helpers.createHtmlElement("div", "team-card", "Наша команда");
  return card;
};

export const ourTeam = ourTeamFunc();
