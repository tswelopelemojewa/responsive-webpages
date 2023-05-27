// import handlebars from 'vite-plugin-handlebars';
// import data from "./data.json" assert {type: 'json'};

// export default {
//   base: "/responsive_webpages/",
//   plugins: [handlebars({
//     context :{

//       data
//     }
//   })]
// };


import data from "./data.json" assert {type:'json'};
import handlebars from 'vite-plugin-handlebars';
import { defineConfig } from 'vite';
// import data from './data.json';

export default defineConfig({
    base : '/responsive_webpages/',
    build: {
        rollupOptions: {
            input : {
                main: 'index.html',
                bootstrap: 'index-bootstrap.html',
                materialize: 'index-materialize.html',
            }
        },
    },
    plugins: [handlebars({
      context : {
        data
      }
  })]
    
});