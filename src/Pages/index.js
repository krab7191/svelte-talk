import Intro from './Intro.svelte';
import SvelteFile from './SvelteFile.svelte';
import State from './State.svelte';
import ScopedCSS from './ScopedCSS.svelte';
import Sapper from './Sapper.svelte';
import Disadvantages from './Disadvantages.svelte';
import End from './End.svelte';
import NotFound from './NotFound.svelte';

const pages = {
  Intro: Intro,
  SvelteFile: SvelteFile,
  State: State,
  ScopedCSS: ScopedCSS,
  Sapper: Sapper,
  Disadvantages: Disadvantages,
  End: End,
  NotFound: NotFound,
};

export default pages;
