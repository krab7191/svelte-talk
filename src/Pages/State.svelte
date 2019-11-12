<script>
  import { onMount } from "svelte";
  import Prism from "prismjs";
  import Footer from "../Components/Footer.svelte";
  let code = `<script>\n  import Header from "../Components/Header.svelte";\n  const name ="Karsten";\n<`;
  code = code + `/script>\n\n<styl`;
  code = code + `e>\n  p {\n    color: blue;\n  }\n</style>\n\n`;
  code =
    code +
    `<Header />\n<main id="main-content">\n  <p>A svelte component</p>\n  <p>My name is {name}</p>\n</main>`;
  onMount(() => {
    Prism.highlightAll();
  });
</script>

<style>

</style>

<main id="main-content">
  <h2>The Svelte File</h2>
  <div>
    <pre>
      <code class="language-js">{code}</code>
    </pre>
  </div>
</main>
<Footer />
