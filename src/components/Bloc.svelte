<script lang="ts">
    import type { ContentItem } from "../types/ContentItem";
    import { setValue, focusMode } from "../store";
    export let item: ContentItem;
    import { fade } from 'svelte/transition';

    let noteElement: HTMLSpanElement;
    let articleElement: HTMLElement;

    const onText = (event: KeyboardEvent) => {
        const element = event.target as HTMLSpanElement;
        setValue('content.value', element.innerText, item.id);
    }

    const onNote = (event: KeyboardEvent) => {
        const element = event.target as HTMLSpanElement;
        setValue('content.note', element.innerText, item.id);
    }

    const createNote = () => {
        item.note = "";
        console.log(noteElement);
        setTimeout(() => {
            noteElement.focus();
        }, 150);
    }

    const deleteTag = (event: MouseEvent) => {
        const element = event.target as HTMLButtonElement;
        const tag = (element.nextElementSibling as HTMLInputElement).value;
        const tags = item.tags?.filter(t => t !== tag);
        setValue('content.tags', tags, item.id);
    }

    const editTag = (event: KeyboardEvent) => {
        const element = event.target as HTMLInputElement;
        const tag = element.value;

        if ( !element.dataset.index ) return;
        const index = parseInt(element.dataset.index);

        if ( item?.tags && item.tags.length > index ) {
            item.tags[index] = tag;
            setValue('content.tags', item.tags, item.id);
        }
    }

    const addTag = () => {
        const tags = item.tags || [];
        tags.push("");
        setValue('content.tags', tags, item.id);
        setTimeout(() => {
            if ( articleElement ) {
                const input = articleElement.querySelector(`.tags input[data-index="${tags.length - 1}"]`) as HTMLInputElement;
                input.focus();
            }
        }, 150);
    }
</script>


<article bind:this={articleElement} class="mx-2 p-8 bg-neutral card">
    {#if !$focusMode }
        <p class="absolute text-neutral-content top-8 left-0 -translate-x-8">{item.order}</p>
    {/if}

    <span contenteditable 
        class="text-base-100 w-full h-max text-justify focus:outline-none focus:border-none"
        tabindex="0"
        role="textbox"
        data-id={item.id}
        on:keyup={onText}
        placeholder="Commencer à écrire">
        {@html item.value.replace(/\n/g, '<br>')}
    </span>

    {#if !$focusMode }
        <div class="tags flex flex-wrap mt-2 items-center gap-2">
            <button aria-label="Ajouter un libellé" class="btn btn-neutral" on:click={addTag}>
                <i class="ph ph-tag"></i>
            </button>
            {#each item.tags || [] as tag, index}
                <button aria-label="Supprimer le libellé" class="badge flex badge-primary gap-2 pe-0" on:click={deleteTag} transition:fade>
                    <i class="ph ph-x"></i>
                    <input type="text" value={tag} 
                        class="input input-m bg-transparent h-full px-0 w-40"
                        data-index={index}
                        on:click={event => event.stopPropagation()}
                        on:keyup={editTag}>
                </button>
            {/each}
            {#if !item.note}
                <button aria-label="Ajouter une note" class="btn btn-neutral ms-auto hidden lg:flex" on:click={createNote}>
                    <i class="ph text-xl ph-note-blank"></i>
                </button>
            {/if}
        </div>

        {#if "note" in item}
            <span contenteditable
                bind:this={noteElement}
                class="absolute top-8 right-0 translate-x-64 w-64 p-2 text-neutral-content hidden lg:flex"
                tabindex="0"
                role="textbox"
                data-id={item.id}
                on:keyup={onNote}>
                {@html item.note?.replace(/\n/g, '<br>')}
            </span>
        {/if}
    {/if}
</article>