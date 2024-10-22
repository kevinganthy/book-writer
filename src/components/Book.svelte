<script lang="ts">
    import Toolbar from "../components/Toolbar.svelte";
    import Creator from "./Creator.svelte";
    import Bloc from "./Bloc.svelte";
    import Chapter from "./Chapter.svelte";
    import { content } from "../store";

    const isNextChapter = (index: number) => {
        if (index === $content.length - 1) return false;
        return $content[index + 1].type === "chapter";
    };
  </script>


{#if $content}
    <article class="flex flex-col grow mx-auto max-w-3xl items-stretch gap-4">
        <Toolbar />
        
        <Creator title={isNextChapter(0)}/>

        {#each $content as item, index}
            {#if item.type === "chapter"}
                <Chapter title={item.value} id={item.id}/>
                <Creator/>
            {/if}
            {#if item.type === "bloc"}
                <Bloc {item} id={item.id}/>
                <Creator title={!isNextChapter(index)}/>
            {/if}
        {/each}

        <div class="mt-auto">
    </article>
  {/if}