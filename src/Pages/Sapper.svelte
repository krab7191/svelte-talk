<script>
  import { onMount } from "svelte";
  import Prism from "prismjs";
  import Footer from "../Components/Footer.svelte";
  import text from "../componentText";
  onMount(() => {
    Prism.highlightAll();
  });
</script>

<style>
  li {
    padding: 10px;
  }
  img.sapper-image {
    width: 300px;
    height: auto;
  }
  img.error-image {
    width: 680px;
    height: auto;
  }
  @media only screen and (max-width: 320px) {
    img.error-image {
      max-width: 300px;
      height: auto;
    }
  }
</style>

<main id="main-content">
  <h2>A quick introduction to S(velte)APP(mak)ER</h2>
  <ul>
    <li>"The next small thing in web development"</li>
    <li>A web-application framework, inspired by Next.js</li>
    <li>But it uses Svelte instead of React</li>
    <li>Server side rendering, code splitting, bundling, lazy-loading, etc.</li>
    <li>Bundles are 'hydrated' client side</li>
    <li>Not yet at version 1.0</li>
  </ul>
  <img
    src="./assets/images/sapper.png"
    alt="A screenshot of a sapper project in VScode"
    class="sapper-image" />
  <div class="code-box">
    <pre>
      <code class="language-html">{text.state6}</code>
    </pre>
    <img
      src="./assets/images/_error.png"
      alt="A 500 stacktrace error"
      class="error-image" />
  </div>
</main>

<Footer />
