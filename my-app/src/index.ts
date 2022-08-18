import image from "./images/love.jpg";

const createImage = (src: string) =>
  new Promise((res, rej) => {
    const img = new Image();
    img.onload = () => res(img);
    img.onerror = rej;
    img.src = src;
  });

async function render() {
  const header = document.createElement("header");
  header.className = "header";
  const headerContainer = document.createElement("div");
  headerContainer.className = "container";
  header.append(headerContainer);

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
  const myImage = await createImage(image);

  document.body.prepend(header);
  document.body.append(main);
  mainContainer.append(subHeader);
  // mainContainer.appendChild(myImage as any);
  mainContainer.append(myImage as HTMLImageElement);
  document.body.appendChild(footer);
}

render();
