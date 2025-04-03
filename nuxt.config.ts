// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from  "vite-svg-loader";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Academy',
      charset: "utf-8",
      link: [ 
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&family=Open+Sans:wght@400;500;600;700&display=swap"
        }
      ],
      script: [],
      viewport: "width=device-width,height=device-height,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no",  
    }
  },
  css: ["@/styles/styles.less"],
  modules: [   
      "@pinia/nuxt"
  ],  
  ssr: true,
  vite: {
    css: {
      preprocessorOptions:{
        less: {
          additionalData: `
          @import "@/styles/variables.less";
          @import "@/styles/mixins.less";
          `
        }
      }
    },
    plugins: [svgLoader()]
  },
  // compatibilityDate: "2025-03-06"
});
