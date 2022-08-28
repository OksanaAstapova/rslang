import { root } from "../../router";
import Component from "../../template/Component";
import Page from "../../template/Page";
import { createBookContent } from "./create-content";

class BookPage extends Page {
  render() {
    root.innerHTML = "";

    createBookContent();

    document.body.className = "body";
    return new Component("h1", "book-title", "\n Book").node;
  }
}

export default new BookPage();

