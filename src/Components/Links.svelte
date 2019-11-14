<script>
  import links from "../data/links";
</script>

<style>
  li {
    padding: 10px;
  }
</style>

<p>Useful Links:</p>
<ul>
  {#each links as item}
    <li>
      <a href={item.link}>{item.text}</a>
    </li>
  {/each}
</ul>
