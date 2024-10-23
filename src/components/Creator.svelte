<script lang="ts">
    import { addContentItem } from "../store";

    export let position: number;
    export let title: boolean = false;

    const onAddChapter = () => {
        const id = Date.now();

        addContentItem({
            id,
            type: "chapter",
            order: position + 0.5,
            value: ""
        });

        setTimeout(() => {
            (document.querySelector(`input[data-id="${id}"]`) as HTMLInputElement).focus();
        }, 150);
    }

    const addBloc = () => {
        const id = Date.now();

        addContentItem({
            id,
            type: "bloc",
            order: position + 0.5,
            value: ""
        });

        setTimeout(() => {
            (document.querySelector(`span[data-id="${id}"]`) as HTMLSpanElement).focus();
        }, 150);
    }
</script>


<div data-order={position} class="flex gap-4 mx-auto">
    {#if title}
        <button aria-label="Ajouter un chapitre" class="btn btn-ghost" on:click={onAddChapter}><i class="ph text-xl ph-text-t"></i></button>
    {/if}
        
    <button aria-label="Ajouter un bloc de texte" class="btn btn-ghost" on:click={addBloc}><i class="ph text-xl ph-file-plus"></i></button>
</div>