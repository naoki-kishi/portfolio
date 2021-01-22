module.exports = {
  mode: 'spa',

  /*
   ** Headers of the page
   */
  head: {
    title: `Naoki Kishi's Portfolio`,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Naoki Kishiのポートフォリオサイトです。Nuxt.jsで書かれています。インターンの経歴や開発しているものを紹介しています。',
      },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@p1ass' },
      { property: 'og:title', content: `Naoki Kishi's Portfolio Site` },
      {
        property: 'og:description',
        content:
          'Naoki Kishiのポートフォリオサイトです。Nuxt.jsで書かれています。インターンの経歴や開発しているものを紹介しています。',
      },
      {
        property: 'og:url',
        content: 'https://p1ass.com/',
      },
      {
        property: 'og:image',
        content: 'https://p1ass.com/og.png',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/vue-scrollto'],

  /*
   ** Nuxt.js modules
   */
  modules: [
    [
      'nuxt-sass-resources-loader',
      ['@/assets/styles/_colors.scss', '@/assets/styles/_mixins.scss'],
    ],
    '@nuxtjs/pwa',
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-127036212-5',
      },
    ],
  ],

  buildModules: [['@nuxtjs/vuetify', {}]],

  env: {
    apiEndpoint: process.env.API_ENDPOINT || 'http://localhost:8080/json',
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }
    },
  },
}
