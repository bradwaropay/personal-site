import { RuntimeConfig } from 'nuxt/schema';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Brad Waropay | Front-End Architecture and Design System Consulting",
      viewport: "width=device-width, initial-scale=1",
      charset: "utf-8",
      htmlAttrs: {
        lang: "en",
      },
      "meta": [
        {
          "name": "msapplication-TileColor",
          "content": "#da532c"
        },
        {
          "name": "theme-color",
          "content": "#ffffff"
        },
        {
          "name": "description",
          "content": `test`,
        }
      ],
      "link": [
        { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
        { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
        { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
        { rel: "manifest", href: "/site.webmanifest" },
        { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#5bbad5" },
      ],
    }
  },
  css: [
    "@/assets/styles/reset.scss",
    "devicon/devicon.min.css"
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "~/assets/styles/styles.scss" as *;`
        }
      }
    },
  },
  modules: [
    '@nuxt/content',
    '@nuxtjs/google-fonts',
    'nuxt-mail',
  ],
  googleFonts: {
    preconnect: true,
    display: 'swap',
    families: {
      Inconsolata: [400, 700],
    }
  },
  mail: {
    message: {
      to: 'brad.waropay@gmail.com',
    },
    smtp: {
      service: 'gmail',
      auth: {
        user: 'brad.waropay@gmail.com',
        pass: process.env.MAIL_PASS,
      },
    },
  },
  content: {},
  components: [
    '~/components/structural',
    '~/components/simple',
    '~/components/complex',
    '~/components/presentation',
    '~/components'
  ]
})