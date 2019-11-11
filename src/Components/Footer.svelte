<script>
  import { Navigate } from "svelte-router-spa";
  import pageSequencer from "../utils";
  const { from, to } = pageSequencer();
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
      <Navigate to={from}>
        <button>
          <i class="fa fa-arrow-left" />
          Back
        </button>
      </Navigate>
    {/if}
    {#if to}
      <!-- Notice shorthand attribute -->
      <Navigate {to}>
        <button>
          Next!
          <i class="fa fa-arrow-right" />
        </button>
      </Navigate>
    {/if}
  </span>
</footer>
