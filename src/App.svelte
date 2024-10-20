<script lang="ts">
  import { Router, Link, Route } from "svelte-routing";
  import Home from "./routes/Home.svelte";
  import Writing from "./routes/Writing.svelte";

  export let url = "";
  const basepath: string = import.meta.env.VITE_BASE_URL || "";

  const btnStyle = (active: Boolean) => {
    return `btn ${active ? "btn-primary" : "btn-ghost"}`;
  };
</script>


<Router {url} {basepath}>
  <main class="bg-base-100">
    <Route path="/writing" component={Writing} />
    <Route path="*" component={Home} />
  </main>
</Router>
