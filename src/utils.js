import { routes } from "./routes";


const pageSequencer = () => {
  let { pathname, hash } = window.location;
  if (hash.length !== 0) {
    pathname = hash.substring(1);
  }
  let currentRouteIndex;
  const keys = Object.keys(routes);
  keys.pop();
  keys.forEach((route, index) => {
    if (route === pathname) {
      currentRouteIndex = index;
    }
  });
  return {
    from: keys[currentRouteIndex - 1] ? keys[currentRouteIndex - 1] : null,
    to: keys[currentRouteIndex + 1] ? keys[currentRouteIndex + 1] : null,
  }
};

export default pageSequencer;
