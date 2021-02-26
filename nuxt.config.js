export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'hapi',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'vant/lib/index.less',
    'swiper/swiper-bundle.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: '~plugins/vant.js',
      ssr: true
    }, {
      src: '~plugins/amfe-flexible.js',
      mode: 'client'
    }, {
      src: "~plugins/vue-awesome-swiper.js",
      ssr: false
    }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      less: {
        modifyVars: {
          'tabbar-height': '1.5rem',
          'goods-action-height': '1.5rem',
          'nav-bar-height': '1.3rem'
        }
      }
    },
    postcss: {
      plugins: {
        'postcss-plugin-px2rem': {
          rootValue: 16,
          exclude: /(node_module)/
        }
      },
      preset: {
        autoprefixer: true
      }
    }
  },
}
