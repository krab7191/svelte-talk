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
  state2: `
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
  main#main-content {
    background-color: lightseagreen;
    padding: 15px;
    border-radius: 8px;
  }
  p {
    color: darkblue;
  }
</style>

<main id="main-content">
  <p>Counter is at {counter}</p>
  <button on:click={increment}>Up!</button>
  <button on:click={decrement}>Down!</button>
</main>  
  `,
  state3: `
function pe(t) {
    let n, r, s, g, h, m, v, b, y;
    return {
        c() {
            n = c("main"), r = c("p"), s = u("Counter is at "), g = u(t.counter), h = d(), (m = c("button")).textContent = "Up!", v = d(), (b = c("button")).textContent = "Down!", p(r, "class", "svelte-eogs2z"), p(n, "id", "main-content"), p(n, "class", "svelte-eogs2z"), y = [f(m, "click", t.increment), f(b, "click", t.decrement)]
        },
        m(e, t) {
            i(e, n, t), o(n, r), o(r, s), o(r, g), o(n, h), o(n, m), o(n, v), o(n, b)
        },
        p(e, t) {
            e.counter && function(e, t) {
                t = "" + t, e.data !== t && (e.data = t)
            }(g, t.counter)
        },
        i: e,
        o: e,
        d(e) {
            e && l(n), a(y)
        }
    }
}  
`
};

export default text;
