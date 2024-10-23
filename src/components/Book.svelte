<script lang="ts">
    import Toolbar from "../components/Toolbar.svelte";
    import Creator from "./Creator.svelte";
    import Bloc from "./Bloc.svelte";
    import Chapter from "./Chapter.svelte";
    import { content } from "../store";
    import { fade } from 'svelte/transition';
    import { get } from "svelte/store";

    const isNextChapter = (index: number) => {
        if (index === $content.length - 1) return false;
        return $content[index + 1]?.type === "chapter";
    };
  </script>


<article class="flex flex-col grow mx-auto max-w-3xl items-stretch gap-4">
    <Toolbar />
    
    {#if $content && $content.length}
        <Creator position={0} title={isNextChapter(0)}/>
    
        {#key $content.length + $content.map(c => c.tags?.length ?? 0).reduce((c, acc) => acc + c)}
            {#each get(content) as item, index}
                {#if item.type === "chapter"}
                    <Chapter {item}/>
                    <Creator position={index+1}/>
                {/if}
                {#if item.type === "bloc"}
                    <Bloc {item}/>
                    <Creator position={index+1} title={!isNextChapter(index)}/>
                {/if}
            {/each}
        {/key}
    {:else}
        <p class="mx-auto text-neutral-content" transition:fade>Commençons l'aventure !</p>
        <Creator position={0} title/>
    {/if}

    <div class="mt-auto">
</article>