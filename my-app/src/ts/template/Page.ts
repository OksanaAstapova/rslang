export default abstract class Page {
    protected container: HTMLElement;
  
    constructor() {
      this.container = document.createElement('div');
    }
  
    render() {
      return this.container;
    }
  }