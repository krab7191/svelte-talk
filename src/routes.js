import Intro from './Pages/Intro.svelte';
import SvelteFile from './Pages/SvelteFile.svelte';
import State from './Pages/State.svelte';
import End from './Pages/End.svelte';
import NotFound from './Pages/NotFound.svelte';

const routes = {
  '/': Intro,
  '/svelte-file': SvelteFile,
  '/state': State,
  '/end': End,
  '*': NotFound,
}

export { routes };
