// our-team
//our-team
import * as helpers from "./helpers";

const teamMembers = [
  {
    name: "Оксана",
    photo: "./images/team/girl.jpg",
    github: "https://github.com/OksanaAstapova",
    rssCVlink: "",
    done: `Team/Project Lead - организовала работу команды,  синхронизировала таски по плану. Создала Учебник полностью: уровни, карточки слов, пагинация, раздел "Сложные слова"`
  },
  {
    name: "Юрий",
    photo: "./images/team/boy2.jpg",
    github: "https://github.com/clukva",
    done: `Создал базовую структуру приложения (роутер), игру "Спринт". Создал базу данных MongoDB и деплой бекенда на heroku.`,
  },
  {
    name: "Дмитрий",
    photo: "./images/team/boy3.jpg",
    github: "https://github.com/dsh91698",
    rssCVlink: "https://app.rs.school/cv/055a0262-7fdc-4348-8783-2c3dac4d9521",
    done: `Сделал базовую структуру приложения (отклонено командой, заменена на дизайн с роутером), страницу "О команде" и игру "Аудиовызов"`
  },
];

const ourTeamFunc = () => {
  // const card = helpers.createHtmlElement("div", "team-card", "Наша команда");
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
    const ghIcon = `<div class="icon-text"> 
    <span class="icon has-text-info">
    <i class="fa-brands fa-github"></i>
    </span> <a href='${member.github}' target="_blank">Github</a> 
    </div>`;

    const githubLink = helpers.createHtmlElement("div", "", ghIcon);

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

    const done = helpers.createHtmlElement("div", "box done", member.done);

    const avatara = helpers.createHtmlElement("img", "is-rounded", "");
    (avatara as HTMLImageElement).src = member.photo;
    memberImage.append(avatara);
    cardMember.append(memberImage);
    cardMember.append(githubLink);
    cardMember.append(done);
    

    membersWrapper.append(cardMember); // add member-card into teamcards wrapper
  });
  return card;
};

// export const ourTeam = ourTeamFunc; // export as function for calling on page
export const ourTeam = ourTeamFunc(); // export as html element
