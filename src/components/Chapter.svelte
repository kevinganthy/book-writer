<script lang="ts">
    import { setValue } from "../store";
    import type { ContentItem } from "../types/ContentItem";
    import { focusMode } from "../store";

    export let item: ContentItem;

    const onText = (event: KeyboardEvent) => {
        const element = event.target as HTMLInputElement;
        setValue('content.value', element.value, item.id);
    }
</script>


<article class="mx-2 p-8 bg-neutral card">
    {#if !$focusMode }
        <p class="absolute text-neutral-content top-12 left-0 -translate-x-8">{item.order}</p>
    {/if}

    <input type="text"
        data-id={item.id}
        on:keyup={onText}
        value={item.value}
        class="input text-base-100 bg-transparent text-xl" 
        placeholder="Titre de chapitre">
</article>