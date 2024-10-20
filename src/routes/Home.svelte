<script lang="ts">
    import { link } from "svelte-routing";
</script>

<svelte:head>
  <title>Home - Book writer</title>
</svelte:head>

<div class="flex flex-col min-h-dvh items-center p-2 gap-2">
  <h1>Book writer</h1>
  <hr class="w-1/3">

  <section class="card mt-auto border w-full max-w-xl">
    <div class="card-body pb-2 pe-2">
      <h2 class="card-title">Novembre</h2>
      <p>39540 mots - 28 jours</p>
      <div class="card-actions justify-end mt-6">
        <a class="btn btn-s btn-ghost" href="./writing" use:link>Continuer ➡️</a>
      </div>
    </div>
  </section>

  <section class="mb-auto flex gap-10">
    <button class="btn btn-s btn-ghost">Nouveau</button>
    <button class="btn btn-s btn-ghost">Ouvrir</button>
  </section>

  <hr class="w-1/3">  
  <p>Créé par GNTH</p>
</div>
