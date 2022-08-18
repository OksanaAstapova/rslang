// workbook
import * as helpers from "./helpers";

const wbFunc = () => {
  const card = helpers.createHtmlElement("div", "", "Учебник");
  return card;
};

export const workbook = wbFunc();
