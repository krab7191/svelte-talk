<script>
  import Router from "svelte-spa-router";
  import { routes } from "./routes";

  import Header from "./Components/Header.svelte";
</script>

<Header />
<Router {routes} />
