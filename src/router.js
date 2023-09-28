/* router */
import Home from './pages/Home'
import Detail from './pages/Detail'
import NotFound from './pages/NotFound'

export const baseUrl =  '/pokemon/'
const root = document.querySelector('#app');

const routes = [
    { path: baseUrl , component: Home },
    { path: `${baseUrl}pokemons/:id`, component: Detail }
  ];
  
  const render = (path) => {
    const matchedRoute = routes.map((route) => {
      const isMatch = path.match(getPathConvert(route.path));
      return { route, isMatch };
    }).find((matchedRoute) => matchedRoute.isMatch !== null);
    matchedRoute ? new matchedRoute.route.component(root) : new NotFound(root);
  };
  
  const getPathConvert = (path) =>
    new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");
  
  export const navigateTo = (path) => {
    if (window.location.pathname !== path) {
      window.history.pushState({}, "", window.location.origin + path);
      render(path);
    }
  };
  
  export const initializeRouter = () => {
    window.addEventListener("popstate", () => {
      render(window.location.pathname);
    });
  
    window.addEventListener("DOMContentLoaded", () => {
      render(window.location.pathname);
    });
  };