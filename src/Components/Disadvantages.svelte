<script>
  const disadvantages = [
    "Newer, still evolving ecosystem: Maybe not the best choice for huge 'enterprise' projects.",
    "IE support is weak. IE 11 requires polyfills. (Who cares)",
    `Svelte Parser issues with string literals and
    <code>
    blocks.`
  ];
</script>

<style>
  li {
    padding: 10px;
  }
</style>

<ul>
  {#each disadvantages as node}
    <li>{node}</li>
  {/each}
  <li>
    No JS in CSS, dynamic CSS must be done inline.
    <a
      href="https://css-tricks.com/what-i-like-about-writing-styles-with-svelte/#article-header-id-7">
      BUT CSS variables allow for a hack.
    </a>
  </li>
</ul>
