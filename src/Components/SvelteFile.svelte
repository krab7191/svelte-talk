<script>
  import Header from "./Header.svelte";
  const name = "Karsten";
</script>

<style>
  p {
    color: red;
  }
</style>

<Header />
<main>
  <p>A svelte component</p>
  <p>My name is {name}</p>
</main>
