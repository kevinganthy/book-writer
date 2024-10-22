<script lang="ts">
    import { setValue } from "../store";

    export let id: number;
    export let title: string = "";

    const onText = (event: KeyboardEvent) => {
        const element = event.target as HTMLSpanElement;
        setValue('content.value', element.innerText, id);
    }
</script>


<article class="mx-2 p-8 bg-neutral card">
    <span contenteditable
        tabindex="0"
        role="textbox"
        data-id={id}
        on:keyup={onText}
        class="text-base-100 text-xl w-full h-max text-justify focus:outline-none focus:border-none" 
        placeholder="Commencer à écrire">
        {title}
    </span> 
</article>