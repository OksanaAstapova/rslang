import Component from "../../template/Component";
import Page from "../../template/Page";

class HomePage extends Page {
  render() {
    const conteinerHomePage = new Component("div", "main__conteiner", "").node;
    const conteinerInner = new Component("div", "main__conteiner-inner", "")
      .node;
    const homePageText = new Component("p", "main__text", "").node;
    homePageText.innerText =
      "Learn English in the funniest way ​​with the help of electronic textbook and games. Play games, listen to pronunciation, improve your knowledge.";
    const homePageImage = new Component("img", "main__image", "", {
      src: "../../../images/england.png",
    }).node;
    const homePageButton = new Component(
      "button",
      "main__button",
      "Let's go!"
    ).node;

    conteinerInner.appendChild(homePageText);
    conteinerInner.appendChild(homePageButton);
    conteinerHomePage.appendChild(conteinerInner);
    conteinerHomePage.appendChild(homePageImage);

    this.login();
    return conteinerHomePage;
  }

  login() {
    const buttonLogin = document.querySelector(".footer__button-login");
    const wrapperLogin = document.querySelector(
      ".wrapper__login"
    ) as HTMLElement;
    const registerLogin = document.querySelector(
      ".wrapper__register"
    ) as HTMLElement;

    buttonLogin?.addEventListener("click", () => {
      wrapperLogin.classList.toggle("display-none");
      registerLogin.classList.add("display-none");
    });

    const buttonRegister = document.querySelector(
      ".footer__button-register"
    ) as HTMLElement;
    buttonRegister?.addEventListener("click", () => {
      registerLogin.classList.toggle("display-none");
      wrapperLogin.classList.add("display-none");
    });
  }
}

export default new HomePage();
