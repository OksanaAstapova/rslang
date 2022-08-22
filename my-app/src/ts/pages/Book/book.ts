import Component from '../../template/Component';
import Page from '../../template/Page';
import { createWords } from './words';

class BookPage extends Page {
  render() {
    
    createWords()

    document.body.className = 'body';
    return new Component('h1', 'book-title', '\n Book').node;
  }
  
}

export default new BookPage();

