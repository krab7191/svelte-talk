<script>
  import Features from "../Components/Features.svelte";
  import Links from "../Components/Links.svelte";
  import Footer from "../Components/Footer.svelte";
</script>

<style>
  @media only screen and (max-width: 320px) {
    img {
      width: 280px;
      height: auto;
    }
  }
</style>

<main id="main-content">
  <Features />
  <img
    src="https://media.giphy.com/media/l2JecKRSx8ojmh51S/giphy.gif"
    alt="Simpsons Mr. Burns gif" />
  <p>
    Source code at
    <a href="https://github.com/krab7191/svelte-talk">
      https://github.com/krab7191/svelte-talk
    </a>
  </p>
  <p>
    Website at
    <a href="https://svelte-talk.netlify.com/">
      https://svelte-talk.netlify.com/
    </a>
  </p>

</main>

<Footer />
