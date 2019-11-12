<script>
  import Footer from "../Components/Footer.svelte";
  function timeWalk() {
    window.location.go(-2);
  }
</script>

<main id="main-content">
  Sorry, page not found.
  <button on:click={timeWalk}>GO BACK</button>
</main>
<Footer />
