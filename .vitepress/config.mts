import { defineConfig } from 'vitepress'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'
//import { InlineLinkPreviewElementTransform } from '@nolebase/vitepress-plugin-inline-link-preview/markdown-it'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  vite: { 
      optimizeDeps: { 
            exclude: [ 
              '@nolebase/vitepress-plugin-inline-link-preview/client', 
            ], 
          }, 
      ssr: { 
        noExternal: [ 
          // If there are other packages that need to be processed by Vite, you can add them here.
          '@nolebase/vitepress-plugin-highlight-targeted-heading', 
          //'@nolebase/vitepress-plugin-inline-link-preview', 
          '@nolebase/ui',
        ], 
      }, 
    }, 
  markdown: {
    config(md) {
      md.use(tabsMarkdownPlugin)
      //md.use(InlineLinkPreviewElementTransform) 
    }
  },
  title: "Kalaay Docs",
  description: 'stuff i wrote',
  head: [['link', { rel: 'icon', href: 'favicon.ico' }]],
  cleanUrls: true,
  appearance: 'dark',
  themeConfig: {
    search: {
      provider: 'local',
      options: { detailedView: true },
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Github - What and How', link: 'Github' },
    ],

    footer: {
      copyright: 'Copyright © 2024-present Kalaay',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/KalaayPT/' }
    ],
    outline: [2, 6],
    lastUpdated: {
      text: 'Last Updated',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'medium'
      }
    },
    externalLinkIcon : true,
  }
})
