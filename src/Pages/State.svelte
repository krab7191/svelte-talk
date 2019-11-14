<script>
  import { onMount } from "svelte";
  import Prism from "prismjs";
  import StateComponent from "../Components/StateComponent.svelte";
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
      <code class="language-html">{text.stateComponentText}</code>
    </pre>
    <div id="component-box">
      <StateComponent />
    </div>
  </div>
  <div class="code-box">
    <pre>
      <code class="language-js">{text.stateComponentTextCompiled}</code>
    </pre>
  </div>
</main>
<Footer />
