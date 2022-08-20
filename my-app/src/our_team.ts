//our-team
import * as helpers from "./helpers";

const teamMembers = [
  {
    name: "Оксана",
    photo: "./images/team/girl.jpg",
    github: "",
    rssCVlink: "",
  },
  {
    name: "Юрий",
    photo: "./images/team/boy2.jpg",
    github: "",
    rssCVlink: "",
  },
  {
    name: "Дмитрий",
    photo: "./images/team/boy3.jpg",
    github: "https://github.com/dsh91698",
    rssCVlink: "https://app.rs.school/cv/055a0262-7fdc-4348-8783-2c3dac4d9521",
  },
];

const ourTeamFunc = () => {
  const card = helpers.createHtmlElement("div", "team-card", "");
  const teamHeader = helpers.createHtmlElement(
    "h1",
    "team-header",
    "Наша команда"
  );
  card.append(teamHeader);
  const membersWrapper = helpers.createHtmlElement(
    "div",
    "members-wrapper",
    ""
  );
  card.append(membersWrapper);

  teamMembers.forEach((member) => {
    const cardMember = helpers.createHtmlElement(
      "div",
      "member-card",
      member.name
    );

    const avataraClassList = ["image", "is-128x128"];
    const memberImage = helpers.createHtmlElement(
      "figure",
      avataraClassList,
      ""
    );
    const avatara = helpers.createHtmlElement("img", "is-rounded", "");
    (avatara as HTMLImageElement).src = member.photo;
    memberImage.append(avatara);
    cardMember.append(memberImage);

    membersWrapper.append(cardMember); // добавляем карточку с пользователем в контейнер карточек команды
  });
  return card;
};

export const ourTeam = ourTeamFunc();