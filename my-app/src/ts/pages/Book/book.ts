import Component from '../../template/Component';
import Page from '../../template/Page';

class BookPage extends Page {
  render() {
    document.body.className = 'body';
    return new Component('p', '', '\n book page').node;
  }
}

export default new BookPage();