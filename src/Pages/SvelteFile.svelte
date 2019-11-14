<script>
  import SvelteFile from "../Components/SvelteFile.svelte";
  import Footer from "../Components/Footer.svelte";
  import Code from "../Components/Code.svelte";
  import { svelteFileText } from "../data/componentText";
</script>

<main id="main-content">
  <h2>The Svelte File</h2>
  <div class="code-box">
    <Code text={svelteFileText} />
    <div id="component-box">
      <SvelteFile />
    </div>
  </div>
</main>
<Footer />
