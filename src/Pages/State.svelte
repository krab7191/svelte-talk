<script>
  import { onMount } from "svelte";
  import Prism from "prismjs";
  import State1 from "../Components/State1.svelte";
  import Footer from "../Components/Footer.svelte";
  let code = `<script>\n  import Header from "../Components/Header.svelte";\n  const name ="Karsten";\n<`;
  code = code + `/script>\n\n<styl`;
  code = code + `e>\n  p {\n    color: purple;\n  }\n</style>\n\n`;
  code =
    code +
    `<Header />\n<main id="main-content">\n  <p>A svelte component</p>\n  <p>My name is {name}</p>\n</main>`;
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
  <h2>The Svelte File</h2>
  <div class="code-box">
    <pre>
      <code class="language-js">{code}</code>
    </pre>
    <State1 />
  </div>
</main>
<Footer />
