<script>
  import BlueParagraph from "../Components/BlueParagraph.svelte";
  import GreenParagraph from "../Components/GreenParagraph.svelte";
  import Code from "../Components/Code.svelte";
  import Footer from "../Components/Footer.svelte";
  import {
    paragraphComponentText,
    paragraphComponentTextCompiled
  } from "../componentText";
</script>

<main id="main-content">
  <h2>Component Scoped CSS</h2>
  <div class="code-box">
    <Code text={paragraphComponentText} />
    <div id="component-box">
      <BlueParagraph />
      <GreenParagraph />
    </div>
  </div>
  <div class="code-box">
    <Code text={paragraphComponentTextCompiled} />
  </div>
</main>
<Footer />
