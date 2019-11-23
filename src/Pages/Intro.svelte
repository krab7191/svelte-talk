<script>
  import Features from "../Components/Features.svelte";
  import Links from "../Components/Links.svelte";
  import Footer from "../Components/Footer.svelte";
</script>

<style>
  @media only screen and (max-width: 375px) {
    video {
      width: 280px;
      height: auto;
    }
  }
</style>

<main id="main-content">
  <Features />
  <video autoplay loop>
    <source src="./assets/video/simpsons-svelte.mp4" type="video/mp4" />
    <source src="./assets/video/simpsons-svelte.ogg" type="video/ogg" />
    Your browser does not support html5 video.
  </video>
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
