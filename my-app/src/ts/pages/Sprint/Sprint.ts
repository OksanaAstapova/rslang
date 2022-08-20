import Component from '../../template/Component';
import Page from '../../template/Page';

class SprintPage extends Page {
  render() {
    document.body.className = 'body';
    return new Component('p', '', '\n Sprint page').node;
  }
}

export default new SprintPage();