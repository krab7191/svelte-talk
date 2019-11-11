import Intro from './Pages/Intro.svelte';
import About from './Pages/About.svelte';

const routes = [
  {
    name: '/',
    component: Intro,
  },
  {
    name: 'about',
    component: About,
  },
];

export { routes };
