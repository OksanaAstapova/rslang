import { root } from "../../router";
import Component from "../../template/Component";
import Page from "../../template/Page";
import { createBookContent, renderWords } from "./create-content";

class BookPage extends Page {
  render() {
    root.innerHTML = "";

    createBookContent();
    renderWords(0, 0, "appear", "hide");

    document.body.className = "body";
    return new Component("h1", "book-title", "\n Book").node;
  }
}

export default new BookPage();
