<script lang="ts">
    import { content } from "../store";
    import { fade } from 'svelte/transition';

    const goTo = (id: number) => {
        const element = document.querySelector(`[data-id="${id}"]`) as HTMLElement;
        if ( element ) {
            element.scrollIntoView({ behavior: "smooth", block: "center" });
            element.focus();
            if ( element.tagName === "SPAN" ) {
                window.getSelection()?.selectAllChildren(element);
                window.getSelection()?.collapseToEnd();
            }
        }
    }
</script>


{#if $content}
    <section aria-label="Sommaire" class="my-auto max-h-full overflow-auto">
        <ul class="flex flex-col gap-6 p-2">
            <!-- Pour l'élément actif : text-primary font-bold -->
            {#each $content as item}
                {#if item.type === "bloc" }
                    <li class="px-2 border-l flex flex-col gap-2">
                        <buttonclass="button button-ghost text-left" on:click={() => goTo(item.id)}>
                            <p class="line-clamp-1">{item.value}</p>
                            <div class="flex gap-2">
                                {#each item.tags ?? [] as tag}
                                    <div class="badge badge-primary gap-2" transition:fade>{tag}</div>
                                {/each}    
                            </div>
                        </button>
                    </li>
                {:else}
                    <li class="px-2 line-clamp-1 text-lg">
                        <button class="button button-ghost" on:click={() => goTo(item.id)}>{item.value}</button>
                    </li>
                {/if}
            {/each}
        </ul>
    </section>
{/if}


<style>
    section {
        scrollbar-color: #42423F #f3f2e2;
        scrollbar-width: thin;
    }
</style>