import Intro from './Pages/Intro.svelte';
import SvelteFile from './Pages/SvelteFile.svelte';
import State from './Pages/State.svelte';
import ScopedCSS from './Pages/ScopedCSS.svelte';
import Sapper from './Pages/Sapper.svelte';
import Disadvantages from './Pages/Disadvantages.svelte';
import End from './Pages/End.svelte';
import NotFound from './Pages/NotFound.svelte';

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
