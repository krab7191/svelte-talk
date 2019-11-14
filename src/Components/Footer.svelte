<script>
  import { link } from "svelte-spa-router";
  import { pageSequencer } from "../utils";
  import { routes } from "../routes";
  const { from, to } = pageSequencer(routes);
</script>

<style>
  footer {
    text-align: center;
  }
  footer button {
    cursor: pointer;
  }
</style>

<footer id="footer">
  <hr />
  <span>
    {#if from}
      <a href={from} use:link>
        <button>
          <i class="fa fa-arrow-left" />
          Back
        </button>
      </a>
    {/if}
    {#if to}
      <a href={to} use:link>
        <button>
          Next!
          <i class="fa fa-arrow-right" />
        </button>
      </a>
    {/if}
  </span>
</footer>
