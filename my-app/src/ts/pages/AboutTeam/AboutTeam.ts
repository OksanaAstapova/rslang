import Component from '../../template/Component';
import Page from '../../template/Page';

class AboutPage extends Page {
  render() {
    document.body.className = 'body';
    return new Component('p', '', '\n About page').node;
  }
}

export default new AboutPage();