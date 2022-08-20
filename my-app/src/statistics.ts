// statistics
import * as helpers from "./helpers";

const statFunc = () => {
  const card = helpers.createHtmlElement("div", "", "Статистика");
  return card;
};

export const statistics = statFunc();
