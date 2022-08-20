import Component from '../../template/Component';
import Page from '../../template/Page';

class AudiocallPage extends Page {
  render() {
    document.body.className = 'body';
    return new Component('p', '', '\n Audiocall page').node;
  }
}

export default new AudiocallPage();