<script lang="ts">
    import { link } from "svelte-routing";
    import { downloadBook, insights, title } from "../store";
</script>

<section class="card mt-auto border w-full max-w-xl">
  <div class="card-body pb-2 pe-2">
    <h2 class="card-title">{$title}</h2>
    <p>{$insights?.words} mots - {$insights?.days} jours</p>
    <div class="flex card-actions justify-between mt-6">
      <button aria-label="Télécharge le livre" class="btn btn-ghost" on:click={downloadBook}>
        <i class="ph text-xl text-neutral-content ph-download"></i>
      </button>
      <a class="btn btn-s btn-ghost text-primary" href="./writing" use:link>Continuer <i class="ph ph-arrow-right"></i></a>
    </div>
  </div>
</section>