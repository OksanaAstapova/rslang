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

export const createImage = (src: string, className: string) =>
  new Promise((res, rej) => {
    const img = new Image();
    img.onload = () => res(img);
    img.onerror = rej;
    img.src = src;
    img.className = className;
  });
