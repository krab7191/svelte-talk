<script>
  import { onMount } from "svelte";
  import Prism from "prismjs";

  export let language = "html";
  export let text = "window.location.assign('/404.html');";
  onMount(() => {
    Prism.highlightAll();
  });
</script>

<pre>
  <code class={`language-${language}`}>{text}</code>
</pre>
