<script>
  import { onMount } from "svelte";
  import Prism from "prismjs";
  import State1 from "../Components/State1.svelte";
  import Footer from "../Components/Footer.svelte";
  import text from "../componentText";
  onMount(() => {
    Prism.highlightAll();
  });
</script>

<main id="main-content">
  <h2>The Svelte File</h2>
  <div class="code-box">
    <pre>
      <code class="language-html">{text.state1}</code>
    </pre>
    <div id="component-box">
      <State1 />
    </div>
  </div>
</main>
<Footer />
