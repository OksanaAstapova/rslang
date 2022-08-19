import aboutTeam from './pages/AboutTeam/AboutTeam';
import audiocall from './pages/Audiocall/Audiocall';
import book from './pages/Book/book';
import homePage from './pages/HomePage/HomePage';
import sprint from './pages/Sprint/Sprint';
import statistics from './pages/Statistics/Statistics';
import Page from './template/Page';

export type Path = {
  resource: string;
  section?: number;
};

type Route = {
  path: string;
  component: Page;
};

const root = document.querySelector('#main__root') as HTMLElement;

const routes = [
  { path: '/', component: homePage },
  { path: 'about-team', component: aboutTeam },
  { path: 'game-audiocall', component: audiocall },
  { path: 'book', component: book },
  { path: 'game-sprint', component: sprint },
  { path: 'statistics', component: statistics },
];

const parseLocation: () => Path = () => {
  const pathName = (window.location.hash.slice(2).toLowerCase() || '/').split('/');
  const path: Path = { resource: `${pathName[0]}` };
  return path;
};

const findComponent = (path: string, routesList: Route[]) => routesList.find((r) => r.path === path || undefined);

const router = () => {
  const path = parseLocation();

  const component = findComponent(path.resource, routes) || routes[0];
  const pageElement = component?.component.render();
  root.innerHTML = '';
  if (pageElement) {
    root.append(pageElement);
  }
};

export default router;
/* router(); */