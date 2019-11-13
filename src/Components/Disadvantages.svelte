<script>
  const code = "<code>";
</script>

<style>
  ul {
    list-style-type: none;
  }
  li {
    padding: 10px;
  }
</style>

<ul>
  <li>
    Newer, still evolving ecosystem: Maybe not the best choice for huge
    'enterprise' projects.
  </li>
  <li>IE support is weak. IE 11 requires polyfills. (Who cares)</li>
  <li>
    Svelte Parser issues with string literals and
    <code>{code}</code>
    blocks.
  </li>
  <li>
    No JS in CSS, dynamic CSS must be done inline.
    <a
      href="https://css-tricks.com/what-i-like-about-writing-styles-with-svelte/#article-header-id-7">
      BUT CSS variables allow for a hack.
    </a>
  </li>
</ul>
