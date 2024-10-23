<script lang="ts">
    import { link } from "svelte-routing";
    import { downloadBook, focusMode, saveStatus } from "../store";

    const toggleFocus = () => {
        focusMode.update(v => !v);
    }

    const scrollTo = (position: string) => {
        window.scrollTo({
            top: position === "top" ? 0 : document.body.scrollHeight,
            behavior: "smooth",
        });
    }
</script>

<header class="sticky top-0 border-b p-2 flex items-center gap-4 xl:hidden">
    <a href=".." use:link><i class="ph text-xl ph-arrow-left"></i></a>
    <input type="text" placeholder="Titre à définir" value="Novembre" class="input input-ghost">
    <button aria-label="Retourner à l'acceuil" class="btn btn-ghost ms-auto"><i class="ph text-xl ph-floppy-disk-back"></i></button>
  </header>

<header class="sticky top-0 border-b mb-auto gap-2 p-2 items-center w-full bg-base-100 z-10 hidden xl:flex">
    {#if !$focusMode }
        <button aria-label="Télécharger le livre" class="btn btn-ghost" on:click={downloadBook}>
            <i class="ph text-xl ph-download"></i>
        </button>
        <button aria-label="Activer le mode focus" class="btn btn-ghost" on:click={toggleFocus}>
            <i class="ph text-xl ph-stack-minus"></i>
        </button>
    {:else}
        <button aria-label="Désactiver le mode focus" class="btn btn-ghost" on:click={toggleFocus}>
            <i class="ph text-xl ph-stack-plus"></i>
        </button>
    {/if}

    <button aria-label="Aller en haut du livre" class="btn btn-ghost" on:click={() => scrollTo("top")}>
        <i class="ph text-xl ph-arrow-up"></i>
    </button>
    <button aria-label="Aller en bas du livre" class="btn btn-ghost" on:click={() => scrollTo("bottom")}>
        <i class="ph text-xl ph-arrow-down"></i>
    </button>
    

    {#if $saveStatus < 0}
        <p class="badge badge-warning"><i class="ph ph-warning me-2"></i> erreur de sauvegarde</p>
    {:else if $saveStatus > 0}
        <p class="ms-auto badge badge-accent badge-outline">sauvegardé à l'instant</p>
    {/if}
</header>