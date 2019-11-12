import { routes } from "./routes";


const pageSequencer = () => {
  const { pathname } = window.location;
  let currentRouteIndex;
  const keys = Object.keys(routes);
  keys.forEach((route, index) => {
    if (route === pathname) {
      currentRouteIndex = index;
    }
  });
  return {
    from: keys[currentRouteIndex - 1] ? keys[currentRouteIndex - 1].name : null,
    to: keys[currentRouteIndex + 1] ? keys[currentRouteIndex + 1].name : null,
  }
};

export default pageSequencer;
