
export default {  
  mode: 'universal',
  
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  
  loading: { color: '#fff' },
  
  css: [
  ],
  
  plugins: [
  ],
  
  buildModules: [
  ],
  
  modules: [
    '@nuxtjs/bulma',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
  ],

  axios: {
  },

  pwa: {
    manifest: {
      display: 'fullscreen'
    }
  },

  // server: {
  //   port: 8080
  // },

  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    
    extend (config, ctx) {
    }
  }
}
