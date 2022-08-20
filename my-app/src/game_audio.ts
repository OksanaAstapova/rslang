// game audiocall
import * as helpers from "./helpers";

const acFunc = () => {
  const card = helpers.createHtmlElement("div", "", "Аудиовызов игра");
  return card;
};

export const audiocall = acFunc();
