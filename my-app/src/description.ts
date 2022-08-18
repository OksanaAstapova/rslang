// description
import * as helpers from "./helpers";

const descriptionFunc = () => {
  const card = helpers.createHtmlElement("div", "", "Описание проекта");
  return card;
};

export const prjDescription = descriptionFunc();
