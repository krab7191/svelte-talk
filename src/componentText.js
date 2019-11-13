const text = {
  state1: `
<script>
  import Header from "../Components/Header.svelte";
  const name ="Karsten";
</script>

<style>
  p {
    color: red;
  }
</style>

<Header />
<main id="main-content">
  <p>A svelte component</p>
  <p>My name is {name}</p>
</main>`,
};

export default text;
