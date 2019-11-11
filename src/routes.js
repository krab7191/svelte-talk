import Intro from './Pages/Intro.svelte';
import State from './Pages/State.svelte';

const routes = [
  {
    name: '/',
    component: Intro,
  },
  {
    name: '/state',
    component: State,
  },
];

export { routes };
