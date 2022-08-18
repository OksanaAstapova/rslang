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
