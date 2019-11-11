<script>
  import { Router } from "svelte-router-spa";
  import { routes } from "./routes";

  import Header from "./Components/Header.svelte";
</script>

<Header />
<Router {routes} />
