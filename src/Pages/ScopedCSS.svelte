<script>
  import { onMount } from "svelte";
  import Prism from "prismjs";
  import State3 from "../Components/State3.svelte";
  import State4 from "../Components/State4.svelte";
  import Footer from "../Components/Footer.svelte";
  import text from "../componentText";
  onMount(() => {
    Prism.highlightAll();
  });
</script>

<style>
  div.code-box {
    margin: 0 auto;
    width: 50%;
    max-width: 680px;
  }
</style>

<main id="main-content">
  <h2>Component Scoped CSS</h2>
  <div class="code-box">
    <pre>
      <code class="language-html">{text.state4}</code>
    </pre>
    <div id="component-box">
      <State3 />
      <State4 />
    </div>
  </div>
  <div class="code-box">
    <pre>
      <code class="language-html">{text.state5}</code>
    </pre>
  </div>
</main>
<Footer />
