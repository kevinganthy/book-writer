<script lang="ts">
    import { link } from "svelte-routing";
</script>

<header class="sticky top-0 border-b p-2 flex items-center gap-4 xl:hidden">
    <a href=".." use:link><i class="ph text-xl ph-arrow-left"></i></a>
    <input type="text" placeholder="Titre à définir" value="Novembre" class="input input-ghost">
    <button class="btn btn-ghost ms-auto"><i class="ph text-xl ph-floppy-disk-back"></i></button>
  </header>

<header class="sticky top-0 border-b mb-auto gap-2 p-2 items-center w-full bg-base-100 z-10 hidden xl:flex">
    <button class="btn btn-ghost"><i class="ph text-xl ph-floppy-disk-back"></i></button>
    <button class="btn btn-ghost"><i class="ph text-xl ph-stack-minus"></i></button>
    <p class="badge badge-warning"><i class="ph ph-warning me-2"></i> erreur de sauvegarde</p>
    <p class="ms-auto badge badge-accent badge-outline">sauvegardé à l'instant</p>
</header>