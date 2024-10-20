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
  <header>
    <nav class="navbar gap-2">
      <Link let:active to="{basepath}/">
        <div class="{btnStyle(active)}">Home</div>
      </Link>
      <Link let:active to="{basepath}/writing">
        <div class="{btnStyle(active)}">Writing</div>
      </Link>
    </nav>
  </header>

  <main class="m-auto">
    <Route path="/writing" component={Writing} />
    <Route path="*" component={Home} />
  </main>
</Router>
