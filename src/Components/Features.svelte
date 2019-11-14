<style>
  li {
    padding-bottom: 24px;
  }
  @media only screen and (max-width: 320px) {
    ul {
      margin: 5px;
    }
  }
</style>

<h2>What is Svelte?</h2>
<ul>
  <li>
    Created by
    <a href="https://github.com/Rich-Harris">Rich Harris</a>
    , who is also the creator of
    <a href="https://rollupjs.org/guide/en/">Rollup</a>
  </li>
  <li>"Svelte is a radical new approach to building user interfaces."</li>
  <li>
    A "lightweight modern JavaScript library (4.57KB minified)"
    <a href="https://bundlephobia.com/result?p=svelte@3.14.0" target="_blank">
      (3kb ?)
    </a>
  </li>
  <li>
    A compiler of sorts. Moves the work to a build step so you don't have to
    serve a library to everyone's browser.
  </li>
  <li>
    There is no 'virtual DOM' or 'shadow DOM'. It serves javascript which is
    already supported by modern clients.
  </li>
  <li>No unintuitive way to manage and update state. Just write javascript.</li>
  <li>
    Comes with a context API for global state management, much like React.
  </li>
  <li>
    Simple component system. Components are themselves the default export.
  </li>
  <li>Component-scoped CSS</li>
  <li>Webpack HMR support release in v3.0!</li>
</ul>
