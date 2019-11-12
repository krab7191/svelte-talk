import Intro from './Pages/Intro.svelte';
import State from './Pages/State.svelte';
import End from './Pages/End.svelte';
import NotFound from './Pages/NotFound.svelte';

const routes = {
  '/': Intro,
  '/state': State,
  '/end': End,
  '*': NotFound,
}

export { routes };
