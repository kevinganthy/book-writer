<script lang="ts">
  import Cover from "../components/Cover.svelte";
  import { downloadBook, isBook, onUploadBook } from "../store";

  let input: HTMLInputElement;

  const openDialog = () => {
    input.click()
  };

  const onFileSelected = (event: Event) => {
    const input = event.target as HTMLInputElement;

    if (!input.files?.length) {
        return;
    }

    const file = input.files[0];
    const reader = new FileReader();

    reader.readAsText(file, "UTF-8");
    reader.onload = (e) => {
      const content = e.target?.result;
      if ( content ) {
        let json = JSON.parse(content.toString());
        onUploadBook(json);
      }
    }
  }

  const newBook = () => {
    downloadBook();
    onUploadBook({
      title: "Nouveau livre",
      content: [],
      insights: {
        days: [],
      }
    });
  }
</script>

<svelte:head>
  <title>Home - Book writer</title>
</svelte:head>

<div class="flex flex-col min-h-dvh items-center p-2 gap-2">
  <h1>Book writer</h1>
  <hr class="w-1/3">

  {#if $isBook}
    <Cover />
  {/if}

  <section class="mb-auto flex gap-10">
    <button class="btn btn-s btn-ghost text-primary" on:click={newBook}>Nouveau</button>
    <button class="btn btn-s btn-ghost text-primary" on:click={openDialog}>Ouvrir</button>

    <input bind:this={input} on:change={onFileSelected} type="file" name="book" class="hidden">
  </section>

  <hr class="w-1/3">  
  <p>Créé par GNTH</p>
</div>
