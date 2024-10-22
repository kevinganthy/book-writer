<script lang="ts">
    import { content } from "../store";
</script>


{#if $content}
    <section aria-label="Sommaire" class="my-auto">
        <ul class="flex flex-col gap-6 p-2">
            <!-- Pour l'élément actif : text-primary font-bold -->
            {#each $content as item}
                {#if item.type === "bloc" }
                    <li data-id={item.id} class="px-2 border-l flex flex-col gap-2">
                        <p class="line-clamp-1">{item.value}</p>
                        {#if item.tags?.length }
                            <div class="flex gap-2">
                                {#each item.tags as tag}
                                    <div class="badge badge-primary gap-2">{tag}</div>
                                {/each}    
                            </div>
                        {/if}
                    </li>
                {:else}
                    <li class="px-2 line-clamp-1 text-lg">{item.value}</li>
                {/if}
            {/each}
        </ul>
    </section>
{/if}