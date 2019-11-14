const text = {
  svelteFileText: `
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
  stateComponentText: `
<!-- Source code -->
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
  stateComponentTextCompiled: `
<!-- Compiled (and then un-minified) code -->
function pe(t) {
    let n, r, s, g, h, m, v, b, y;
    return {
        c() {
            n = c("main"), 
            r = c("p"),               // Alias for document.createElement
            s = u("Counter is at "),  // Alias for document.createTextNode
            g = u(t.counter), 
            h = d(),
            (m = c("button")).textContent = "Up!", 
            v = d(), 
            (b = c("button")).textContent = "Down!", 
            p(r, "class", "svelte-eogs2z"), 
            p(n, "id", "main-content"), 
            p(n, "class", "svelte-eogs2z"), 
            y = [f(m, "click", t.increment), f(b, "click", t.decrement)]
            //   function f(e, t, n) {
            //     null == n
            //       ? e.removeAttribute(t)
            //       : e.getAttribute(t) !== n && e.setAttribute(t, n)
        },
        m(e, t) {
            i(e, n, t), 
            o(n, r), 
            o(r, s),  // Wrapper function for r.appendChild(s)
            o(r, g), 
            o(n, h), 
            o(n, m), 
            o(n, v), 
            o(n, b)
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
`,
  paragraphComponentText: `
<!-- Source code -->

<!-- First Component -->
<style>
  p {
    color: blue;
  }
</style>

<main id="main-content">
  <p>I'm a blue paragraph!!</p>
</main>

<!-- Second Component -->
<style>
  p {
    color: green;
  }
</style>

<main id="main-content">
  <p>I'm a green paragraph!!</p>
</main>

`,
  paragraphComponentTextCompiled: `
<!-- Compiled code -->
<div id="component-box">
  <main id="main-content">
    <p class="svelte-ru5ed3">I'm a blue paragraph!!</p>
  </main>
  <main id="main-content">
    <p class="svelte-w5bjo0">I'm a green paragraph!!</p>
  </main>
</div>  
`,
  errorFileText: `
<script>
	export let status;
	export let error;

	const dev = process.env.NODE_ENV === 'development';
</script>

<style>
	h1, p {
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<svelte:head>
	<title>{status}</title>
</svelte:head>

<h1>{status}</h1>

<p>{error.message}</p>

{#if dev && error.stack}
	<pre>{error.stack}</pre>
{/if}  
`,
};

export default text;
