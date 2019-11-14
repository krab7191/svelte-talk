<script>
  import StateComponent from "../Components/StateComponent.svelte";
  import Footer from "../Components/Footer.svelte";
  import Code from "../Components/Code.svelte";
  import {
    stateComponentText,
    stateComponentTextCompiled
  } from "../data/componentText";
</script>

<main id="main-content">
  <h2>Handling State</h2>
  <div class="code-box">
    <Code text={stateComponentText} />
    <div id="component-box">
      <StateComponent />
    </div>
  </div>
  <div class="code-box">
    <Code language="js" text={stateComponentTextCompiled} />
  </div>
</main>
<Footer />
