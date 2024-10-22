<script lang="ts">
  import { Router, Route } from "svelte-routing";
  import Home from "./routes/Home.svelte";
  import Writing from "./routes/Writing.svelte";
  
  export let url = "";
  const basepath: string = import.meta.env.VITE_BASE_URL || "";
  
  import { restoreBook } from "./store";
  restoreBook();
</script>


<Router {url} {basepath}>
  <main class="bg-base-100">
    <Route path="/writing" component={Writing} />
    <Route path="*" component={Home} />
  </main>
</Router>
