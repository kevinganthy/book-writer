<script lang="ts">
    import { useRegisterSW } from 'virtual:pwa-register/svelte'
    
    const period = 60 * 60 * 1000

    function registerPeriodicSync(swUrl: string, r: ServiceWorkerRegistration) {
        if (period <= 0) return
        
        setInterval(async () => {
            if ('onLine' in navigator && !navigator.onLine) return;
            
            const resp = await fetch(swUrl, {
                cache: 'no-store',
                headers: {
                    'cache': 'no-store',
                    'cache-control': 'no-cache',
                },
            })
            
            if (resp?.status === 200)
            await r.update()
        }, period)
    }
    
    const { needRefresh, updateServiceWorker } = useRegisterSW({
        onRegisteredSW(swUrl, r) {
            if (period <= 0) return
            if (r?.active?.state === 'activated') {
                registerPeriodicSync(swUrl, r)
            }
            else if (r?.installing) {
                r.installing.addEventListener('statechange', (e) => {
                    const sw = e.target as ServiceWorker
                    if (sw.state === 'activated')
                    registerPeriodicSync(swUrl, r)
                })
            }
        },
    })
</script>


{#if $needRefresh}
    <div
        class="card bg-neutral text-base-100 fixed bottom-0 right-0 m-4 p-4"
        role="alert"
        aria-labelledby="toast-message"
    >
        <span class="mb-2" id="toast-message">Mise à jour de l'application disponible</span>
        <div class="flex justify-between">
            {#if $needRefresh}
            <button class="btn btn-xs" on:click={() => updateServiceWorker(true)}>
                Appliquer
            </button>
            {/if}
            <button class="btn btn-xs btn-outline text-base-100" on:click={() => needRefresh.set(false)}>
                Fermer
            </button>
        </div>
    </div>
{/if}