<script>
  import { Navigate } from "svelte-router-spa";
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
    <Navigate to="/">
      <button>
        <i class="fa fa-arrow-left" />
        Back
      </button>
    </Navigate>
    <Navigate to="State">
      <button>
        Next!
        <i class="fa fa-arrow-right" />
      </button>
    </Navigate>
  </span>
</footer>
