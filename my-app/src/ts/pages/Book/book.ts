import { root } from "../../router";
import Component from "../../template/Component";
import Page from "../../template/Page";
import { createBookContent } from "./create-content";

class BookPage extends Page {
  render() {
    root.innerHTML = "";

    createBookContent();
    const login  = document.querySelector('.login__conteiner') as HTMLElement;
   
    login.style.display = 'none';

    document.body.className = "body";
    console.log(login)
    return new Component("h1", "book-title", "\n Book").node;
  }
}

export default new BookPage();

