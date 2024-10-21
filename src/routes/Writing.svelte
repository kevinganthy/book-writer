<script lang="ts">
  import { link } from "svelte-routing";
</script>

<svelte:head>
  <title>Ecriture - Book writer</title>
</svelte:head>


<div class="flex min-h-dvh px-2 pt-0 gap-8">

  <aside class="flex-col max-w-96 h-dvh sticky top-0 hidden xl:flex">
    <div class="border-b p-2 flex items-center gap-4">
      <a class="btn btn-ghost" href=".." use:link><i class="ph text-xl ph-arrow-left"></i></a>
      <input type="text" placeholder="Titre à définir" value="Novembre" class="input input-ghost grow">
    </div>

    <section aria-label="Sommaire" class="my-auto">
      <ul class="flex flex-col gap-6 p-2">
        <li class="px-2 line-clamp-1 border-l">Integer hendrerit varius scelerisque. Quisque imperdiet scelerisque. Quisque imperdiet</li>
        <li class="px-2 line-clamp-1 border-l">Integer hendrerit varius scelerisque. Quisque imperdiet</li>
        <li class="px-2 line-clamp-2 border-l text-primary font-bold">
          Integer hendrerit varius scelerisque. Quisque imperdiet Integer hendrerit varius scelerisque. Quisque imperdiet
        </li>
        <li class="px-2 line-clamp-1 text-lg">Chapitre</li>
        <li class="px-2 border-l flex flex-col gap-2">
          <p class="line-clamp-1">
            Integer hendrerit varius scelerisque. Quisque imperdiet
          </p>
          <div class="flex gap-2">
            <div class="badge badge-primary gap-2">libellé</div>
            <div class="badge badge-primary gap-2">libellé</div>
          </div>
        </li>
        <li class="px-2 line-clamp-1 border-l">Integer hendrerit varius scelerisque. Quisque imperdiet</li>
      </ul>
    </section>

    <div class="border-t p-4 flex flex-col items-center">
      <p>1453 mots aujourd'hui sur 34056</p>
      <p>8 jours consécutifs sur 28</p>
    </div>
  </aside>

  <article class="flex flex-col grow mx-auto max-w-3xl items-stretch gap-4">
    <header class="sticky top-0 border-b p-2 flex items-center gap-4 xl:hidden">
      <a href=".." use:link><i class="ph text-xl ph-arrow-left"></i></a>
      <input type="text" placeholder="Titre à définir" value="Novembre" class="input input-ghost">
      <button class="btn btn-ghost ms-auto"><i class="ph text-xl ph-floppy-disk-back"></i></button>
    </header>

    <header class="sticky top-0 border-b mb-auto gap-2 p-2 items-center w-full bg-base-100 z-10 hidden xl:flex">
      <button class="btn btn-ghost"><i class="ph text-xl ph-floppy-disk-back"></i></button>
      <button class="btn btn-ghost"><i class="ph text-xl ph-stack-minus"></i></button>
      <p class="badge badge-warning"><i class="ph ph-warning me-2"></i> erreur de sauvegarde</p>
      <p class="ms-auto badge badge-accent badge-outline">sauvegardé à l'instant</p>
    </header>

    <div class="flex gap-4 mx-auto">
      <button class="btn btn-ghost"><i class="ph text-xl ph-stack-minus"></i></button>
      <button class="btn btn-ghost"><i class="ph text-xl ph-file-plus"></i></button>
    </div>

    <article class="mx-2 p-8 bg-neutral card">
      <span contenteditable class="text-base-100 w-full h-max text-justify focus:outline-none focus:border-none" placeholder="Commencer à écrire">
        Quisque eu velit sit amet quam auctor mattis ut eget orci. Nullam ut urna at purus semper rhoncus. Aenean porta rutrum ipsum, in scelerisque erat semper sit amet. Etiam in dolor vel orci faucibus tempor. Donec imperdiet nisl vitae augue elementum volutpat. In in sapien ac tortor sollicitudin mollis. Ut non rutrum orci. Nulla facilisi. Sed vestibulum massa ut malesuada tempor. Aliquam nisl magna, maximus ut felis non, dictum condimentum lectus. Aenean vel feugiat ipsum. Etiam semper nisl mi, a luctus tortor laoreet quis. Donec nisi nunc, varius at massa in, pellentesque vehicula est. Nunc lectus sem, tempor sit amet sodales at, blandit vel magna. Suspendisse potenti.
      </span>
      <div class="flex mt-2 items-center gap-2">
        <button class="btn btn-neutral"><i class="ph ph-tag"></i></button>
        <button class="btn btn-neutral ms-auto hidden lg:flex"><i class="ph text-xl ph-note-blank"></i></button>
      </div>
    </article>

    <div class="flex gap-4 mx-auto">
      <button class="btn btn-ghost"><i class="ph text-xl ph-stack-minus"></i></button>
      <button class="btn btn-ghost"><i class="ph text-xl ph-file-plus"></i></button>
    </div>

    <article class="mx-2 p-8 bg-neutral card relative">
      <span contenteditable class="text-base-100 w-full h-max text-justify focus:outline-none focus:border-none" placeholder="Commencer à écrire">
        Quisque eu velit sit amet quam auctor mattis ut eget orci. Nullam ut urna at purus semper rhoncus. Aenean porta rutrum ipsum, in scelerisque erat semper sit amet. Etiam in dolor vel orci faucibus tempor. Donec imperdiet nisl vitae augue elementum volutpat. In in sapien ac tortor sollicitudin mollis. Ut non rutrum orci. Nulla facilisi. Sed vestibulum massa ut malesuada tempor. Aliquam nisl magna, maximus ut felis non, dictum condimentum lectus. Aenean vel feugiat ipsum. Etiam semper nisl mi, a luctus tortor laoreet quis. Donec nisi nunc, varius at massa in, pellentesque vehicula est. Nunc lectus sem, tempor sit amet sodales at, blandit vel magna. Suspendisse potenti.
      </span>
      <div class="flex mt-2 items-center gap-2">
        <button class="btn btn-neutral"><i class="ph ph-tag"></i></button>
      </div>
      <span contenteditable class="absolute top-8 right-0 translate-x-64 w-64 p-2 text-neutral-content hidden lg:flex">sollicitudin mollis. Ut non rutrum orci.</span>
    </article>

    <div class="flex gap-4 mx-auto">
      <button class="btn btn-ghost"><i class="ph text-xl ph-stack-minus"></i></button>
      <button class="btn btn-ghost"><i class="ph text-xl ph-file-plus"></i></button>
    </div>

    <article class="mx-2 p-8 bg-neutral card">
      <span contenteditable class="text-base-100 w-full h-max text-justify focus:outline-none focus:border-none" placeholder="Commencer à écrire">
        Quisque eu velit sit amet quam auctor mattis ut eget orci. Nullam ut urna at purus semper rhoncus. Aenean porta rutrum ipsum, in scelerisque erat semper sit amet. Etiam in dolor vel orci faucibus tempor. Donec imperdiet nisl vitae augue elementum volutpat. In in sapien ac tortor sollicitudin mollis. Ut non rutrum orci. Nulla facilisi. Sed vestibulum massa ut malesuada tempor. Aliquam nisl magna, maximus ut felis non, dictum condimentum lectus. Aenean vel feugiat ipsum. Etiam semper nisl mi, a luctus tortor laoreet quis. Donec nisi nunc, varius at massa in, pellentesque vehicula est. Nunc lectus sem, tempor sit amet sodales at, blandit vel magna. Suspendisse potenti.
      </span>
      <div class="flex mt-2 items-center gap-2">
        <button class="btn btn-neutral"><i class="ph ph-tag"></i></button>
        <button class="btn btn-neutral ms-auto hidden lg:flex"><i class="ph text-xl ph-note-blank"></i></button>
      </div>
    </article>

    <div class="flex gap-4 mx-auto">
      <button class="btn btn-ghost"><i class="ph text-xl ph-file-plus"></i></button>
    </div>

    <article class="mx-2 p-8 bg-neutral card">
      <span contenteditable class="text-base-100 text-xl w-full h-max text-justify focus:outline-none focus:border-none" placeholder="Commencer à écrire">
        Titre du chapitre
      </span> 
    </article>

    <div class="flex gap-4 mx-auto">
      <button class="btn btn-ghost"><i class="ph text-xl ph-file-plus"></i></button>
    </div>

    <article class="mx-2 p-8 bg-neutral card">
      <span contenteditable class="text-base-100 w-full h-max text-justify focus:outline-none focus:border-none" placeholder="Commencer à écrire">
        Quisque eu velit sit amet quam auctor mattis ut eget orci. Nullam ut urna at purus semper rhoncus. Aenean porta rutrum ipsum, in scelerisque erat semper sit amet. Etiam in dolor vel orci faucibus tempor. Donec imperdiet nisl vitae augue elementum volutpat. In in sapien ac tortor sollicitudin mollis. Ut non rutrum orci. Nulla facilisi. Sed vestibulum massa ut malesuada tempor. Aliquam nisl magna, maximus ut felis non, dictum condimentum lectus. Aenean vel feugiat ipsum. Etiam semper nisl mi, a luctus tortor laoreet quis. Donec nisi nunc, varius at massa in, pellentesque vehicula est. Nunc lectus sem, tempor sit amet sodales at, blandit vel magna. Suspendisse potenti.
      </span>

      <div class="flex mt-2 items-center gap-2">
        <button class="btn btn-neutral"><i class="ph ph-tag"></i></button>
        <button class="badge badge-primary gap-2">
          <i class="ph ph-x"></i>
          <span contenteditable>Libellé</span>
        </button>
        <button class="badge badge-primary gap-2">
          <i class="ph ph-x"></i>
          <span contenteditable>Libellé</span>
        </button>
        <button class="btn btn-neutral ms-auto hidden lg:flex"><i class="ph text-xl ph-note-blank"></i></button>
      </div>
      <div class="mt-2">
        
      </div>
    </article>

    <div class="flex gap-4 mx-auto">
      <button class="btn btn-ghost"><i class="ph text-xl ph-stack-minus"></i></button>
      <button class="btn btn-ghost"><i class="ph text-xl ph-file-plus"></i></button>
    </div>

    <article class="mx-2 p-8 bg-neutral card">
      <span contenteditable class="text-base-100 w-full h-max text-justify focus:outline-none focus:border-none" placeholder="Commencer à écrire">
        Quisque eu velit sit amet quam auctor mattis ut eget orci. Nullam ut urna at purus semper rhoncus. Aenean porta rutrum ipsum, in scelerisque erat semper sit amet. Etiam in dolor vel orci faucibus tempor. Donec imperdiet nisl vitae augue elementum volutpat. In in sapien ac tortor sollicitudin mollis. Ut non rutrum orci. Nulla facilisi. Sed vestibulum massa ut malesuada tempor. Aliquam nisl magna, maximus ut felis non, dictum condimentum lectus. Aenean vel feugiat ipsum. Etiam semper nisl mi, a luctus tortor laoreet quis. Donec nisi nunc, varius at massa in, pellentesque vehicula est. Nunc lectus sem, tempor sit amet sodales at, blandit vel magna. Suspendisse potenti.
      </span> 
      <div class="flex mt-2 items-center gap-2">
        <button class="btn btn-neutral"><i class="ph ph-tag"></i></button>
        <button class="btn btn-neutral ms-auto hidden lg:flex"><i class="ph text-xl ph-note-blank"></i></button>
      </div>
    </article>

    <div class="flex gap-4 mx-auto">
      <button class="btn btn-ghost"><i class="ph text-xl ph-stack-minus"></i></button>
      <button class="btn btn-ghost"><i class="ph text-xl ph-file-plus"></i></button>
    </div>

    <div class="mt-auto">
  </article>
</div>
