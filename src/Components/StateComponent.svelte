<script>
  let counter = 0;
  function increment() {
    counter++;
  }
  function decrement() {
    counter--;
  }
</script>

<style>
  main#main-counter {
    background-color: lightseagreen;
    padding: 15px;
    border-radius: 8px;
  }
  p {
    color: darkblue;
  }
</style>

<main id="main-counter">
  <p>Counter is at {counter}</p>
  <button on:click={increment}>Up!</button>
  <button on:click={decrement}>Down!</button>
</main>
