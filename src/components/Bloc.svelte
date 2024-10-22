<script lang="ts">
    import type { ContentItem } from "../types/ContentItem";
    import { setValue } from "../store";
    export let id: number;
    export let item: ContentItem;

    let noteElement: HTMLSpanElement;

    const onText = (event: KeyboardEvent) => {
        const element = event.target as HTMLSpanElement;
        setValue('content.value', element.innerText, id);
    }

    const onNote = (event: KeyboardEvent) => {
        const element = event.target as HTMLSpanElement;
        setValue('content.note', element.innerText, id);
    }

    const createNote = () => {
        item.note = "";
        console.log(noteElement);
        setTimeout(() => {
            noteElement.focus();
        }, 150);
    }
</script>


<article class="mx-2 p-8 bg-neutral card">
    <span contenteditable 
        class="text-base-100 w-full h-max text-justify focus:outline-none focus:border-none"
        tabindex="0"
        role="textbox"
        data-id={id}
        on:keyup={onText}
        placeholder="Commencer à écrire">
        {item.value}
    </span>

    <div class="flex mt-2 items-center gap-2">
        <button class="btn btn-neutral"><i class="ph ph-tag"></i></button>
        {#each item.tags || [] as tag}
            <button class="badge badge-primary gap-2">
                <i class="ph ph-x"></i>
                <span contenteditable>{tag}</span>
            </button>
        {/each}
        {#if !item.note}
            <button class="btn btn-neutral ms-auto hidden lg:flex" on:click={createNote}>
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
            data-id={id}
            on:keyup={onNote}>
            {item.note}
        </span>
    {/if}
</article>