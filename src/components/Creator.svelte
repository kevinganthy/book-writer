<script lang="ts">
    export let title: boolean = false;
</script>


<div class="flex gap-4 mx-auto">
    {#if title}
        <button class="btn btn-ghost"><i class="ph text-xl ph-text-t"></i></button>
    {/if}
        
    <button class="btn btn-ghost"><i class="ph text-xl ph-file-plus"></i></button>
</div>