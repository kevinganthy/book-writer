<script lang="ts">
  import Side from "../components/Side.svelte";
  import Book from "../components/Book.svelte";
  import { focusMode } from "../store";
</script>

<svelte:head>
  <title>Ecriture - Book writer</title>
</svelte:head>


<div class="flex min-h-dvh px-2 pt-0 gap-8">
  {#if !$focusMode }
    <Side />
  {/if}
  <Book />  
</div>
