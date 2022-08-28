import * as helpers from "../AboutTeam/helpers";

export const audiocall_game = ``;

const audiocallGameFunc = () => {
  // const card = helpers.createHtmlElement("div", "team-card", "Наша команда");
  const card = helpers.createHtmlElement("div", "team-card", "");
  const teamHeader = helpers.createHtmlElement(
    "h1",
    "team-header",
    "Игра: Аудиовызов"
  );
  card.append(teamHeader);
  const membersWrapper = helpers.createHtmlElement(
    "div",
    "members-wrapper",
    ""
  );
  card.append(membersWrapper);
  return card;
};

// export const ourTeam = ourTeamFunc; // export as function for calling on page
export const audiocallGame = audiocallGameFunc(); // export as html element
