<script>
  import { onMount } from "svelte";
  import Prism from "prismjs";
  import BlueParagraph from "../Components/BlueParagraph.svelte";
  import GreenParagraph from "../Components/GreenParagraph.svelte";
  import Footer from "../Components/Footer.svelte";
  import text from "../componentText";
  onMount(() => {
    Prism.highlightAll();
  });
</script>

<main id="main-content">
  <h2>Component Scoped CSS</h2>
  <div class="code-box">
    <pre>
      <code class="language-html">{text.paragraphComponentText}</code>
    </pre>
    <div id="component-box">
      <BlueParagraph />
      <GreenParagraph />
    </div>
  </div>
  <div class="code-box">
    <pre>
      <code class="language-html">{text.paragraphComponentTextCompiled}</code>
    </pre>
  </div>
</main>
<Footer />
