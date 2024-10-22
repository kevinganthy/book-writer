<script lang="ts">
    import { link } from "svelte-routing";
    import Toc from "../components/Toc.svelte";
    import { book, insights, title, setValue } from "../store";

    const onText = (event: KeyboardEvent) => {
        const value = (event.target as HTMLInputElement).value;
        setValue("title", value);
    }
</script>


{#if book}
    <aside class="flex-col max-w-96 h-dvh sticky top-0 hidden xl:flex">
        <div class="border-b p-2 flex items-center gap-4">
        <a class="btn btn-ghost" href=".." use:link>
            <i class="ph text-xl ph-arrow-left"></i>
        </a>
        <input on:keyup={onText} 
            type="text" 
            placeholder="Titre à définir" 
            value="{$title}" 
            class="input input-ghost grow">
        </div>

        <Toc />

        {#if $insights}
        <div class="border-t p-4 flex flex-col items-center">
            <p>{$insights.today} mots aujourd'hui sur {$insights.words}</p>
            <p>{$insights.chain} jours consécutifs sur {$insights.days}</p>
        </div>
        {/if}
    </aside>
{/if}