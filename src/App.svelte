<script>
  import Links from "./Components/Links.svelte";

  // export let name;
</script>

<style>
  #logo {
    height: 45px;
    width: auto;
  }
  header > h1 {
    display: inline-block;
  }
  main {
    text-align: center;
  }
  li {
    list-style-type: none;
    padding-bottom: 8px;
  }
</style>

<main>
  <header>
    <img src="./assets/images/svelte-logo.png" alt="Svelte logo" id="logo" />
    <h1>Welcome to Svelte.js!</h1>
  </header>
  <hr />
  <p>What is Svelte?</p>
  <ul>
    <li>
      Created by
      <a href="https://github.com/Rich-Harris">Rich Harris</a>
      , who is also the creator of
      <a href="https://rollupjs.org/guide/en/">Rollup</a>
    </li>
    <li>"Svelte is a radical new approach to building user interfaces."</li>
    <li>A "lightweight modern JavaScript library (4.57KB minified)"</li>
    <li>A compiler of sorts</li>
  </ul>
</main>

<Links />
