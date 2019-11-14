<script>
  import { onMount } from "svelte";
  import Prism from "prismjs";
  import SvelteFile from "../Components/SvelteFile.svelte";
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
      <code class="language-html">{text.svelteFileText}</code>
    </pre>
    <div id="component-box">
      <SvelteFile />
    </div>
  </div>
</main>
<Footer />
