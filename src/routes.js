import pages from "./Pages";
const { Intro, SvelteFile, State, ScopedCSS, Sapper, Disadvantages, End, NotFound } = pages;

const routes = {
  '/': Intro,
  '/svelte-file': SvelteFile,
  '/state': State,
  '/scoped-css': ScopedCSS,
  '/sapper': Sapper,
  '/disadvantages': Disadvantages,
  '/end': End,
  '*': NotFound,
}

export { routes };
