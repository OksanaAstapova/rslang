import { menu as navigation } from "./menu";
import image from "./images/love.jpg";
//-------------------------------------------------------------------------------------------------------------------------------
export function createHtmlElement(
  tagName: string,
  className: string | Array<string>, // на входе может быть массив классов или один класс
  text: string
) {
  const element = document.createElement(tagName);
  if (typeof className === "string") {
    element.className = className;
  } else {
    element.classList.add(...className);
  }
  element.innerHTML = text;
  return element;
}
//---------------------------------------------------------------------------------------------------------------------------------------
export const createImage = (src: string, className: string) =>
  new Promise((res, rej) => {
    const img = new Image();
    img.onload = () => res(img);
    img.onerror = rej;
    img.src = src;
    img.className = className;
  });
//---------------------------------------------------------------------------------------------------------------------------------------
export async function render() {
  const header = document.createElement("header");
  header.className = "header";
  const headerContainer = document.createElement("div");
  headerContainer.className = "container";
  header.append(headerContainer);
  headerContainer.innerHTML = navigation;

  const footer = document.createElement("footer");
  footer.className = "footer";
  const footerContainer = document.createElement("div");
  footerContainer.className = "container";
  footer.append(footerContainer);

  const main = document.createElement("main");
  main.className = "main";
  const mainContainer = document.createElement("div");
  mainContainer.className = "container";
  main.append(mainContainer);

  const subHeader = document.createElement("h2");
  subHeader.innerHTML = "RS-Lang App Team-181";
  const myImage = await createImage(image, "image-0");
  // const myImage = await helpers.createImage(image, "image-0");

  document.body.prepend(header);
  document.body.append(main);
  mainContainer.append(subHeader);
  // mainContainer.appendChild(myImage as any);
  mainContainer.append(myImage as HTMLImageElement);
  document.body.append(footer);
}
//---------------------------------------------------------------------------------------------------------------------------------------