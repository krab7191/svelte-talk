<script>
  import { onMount } from "svelte";
  import Prism from "prismjs";
  import State2 from "../Components/State2.svelte";
  import Footer from "../Components/Footer.svelte";
  import text from "../componentText";
  onMount(() => {
    Prism.highlightAll();
  });
</script>

<main id="main-content">
  <h2>Handling State</h2>
  <div class="code-box">
    <pre>
      <code class="language-html">{text.state2}</code>
    </pre>
    <div id="component-box">
      <State2 />
    </div>
  </div>
  <div class="code-box">
    <pre>
      <code class="language-js">{text.state3}</code>
    </pre>
  </div>
</main>
<Footer />
