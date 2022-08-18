import router from './router';

export default class App {
    async start() {
        this.isHashChange();
        router();
    }

    isHashChange() {
        window.addEventListener('hashchange', () => router());
    }
}
