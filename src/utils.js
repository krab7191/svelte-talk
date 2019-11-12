
const pageSequencer = (routeObj) => {
  let { pathname, hash } = window.location;
  if (hash.length !== 0) {
    pathname = hash.substring(1);
  }
  let currentRouteIndex;
  const routes = Object.keys(routeObj);
  routes.pop();
  routes.forEach((route, index) => {
    if (route === pathname) {
      currentRouteIndex = index;
    }
  });
  return {
    from: routes[currentRouteIndex - 1] ? routes[currentRouteIndex - 1] : null,
    to: routes[currentRouteIndex + 1] ? routes[currentRouteIndex + 1] : null,
  }
};

export default pageSequencer;
