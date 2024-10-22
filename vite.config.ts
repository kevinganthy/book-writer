import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    VitePWA({ 
      registerType: 'prompt',
      injectRegister: false,
  
      pwaAssets: {
        disabled: false,
        config: true,
      },
  
      manifest: {
        name: 'Book writer',
        short_name: 'BW',
        description: 'Simple offline book writer',
        theme_color: '#42423F',
      },
  
      workbox: {
        globPatterns: [
          '**/*.{js,css,html,svg,png,ico}',
          
        ],
        cleanupOutdatedCaches: true,
        clientsClaim: true,
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/unpkg\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'cdn',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 1,
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          }
        ]
      },
  
      devOptions: {
        enabled: false,
        navigateFallback: 'index.html',
        suppressWarnings: true,
        type: 'module',
      },
    })
  ],
  base: './'
})
