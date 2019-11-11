import Intro from './Pages/Intro.svelte';
import State from './Pages/State.svelte';
import End from './Pages/End.svelte';

const routes = [
  {
    name: '/',
    component: Intro,
  },
  {
    name: '/state',
    component: State,
  },
  {
    name: '/end',
    component: End,
  },
];

export { routes };
