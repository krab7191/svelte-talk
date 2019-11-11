import { routes } from "./routes";


const pageSequencer = () => {
  const { pathname } = window.location;
  let currentRouteIndex;
  routes.forEach((route, index) => {
    if (route.name === pathname) {
      currentRouteIndex = index;
    }
  });
  return {
    from: routes[currentRouteIndex - 1] ? routes[currentRouteIndex - 1].name : null,
    to: routes[currentRouteIndex + 1] ? routes[currentRouteIndex + 1].name : null,
  }
};

export default pageSequencer;
