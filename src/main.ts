import { createApp } from 'vue'
import App from './App.vue'
//import router from './router';


import { IonicVue } from '@ionic/vue';

/* Theme variables */
import './globalStyles/variables.css';


/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';



/* Basic CSS for apps built with Ionic */
import "./globalStyles/reset.scss";
import "./globalStyles/utilities.scss";
import "./globalStyles/grid.scss";
import "./globalStyles/inputs.scss";
import "./globalStyles/filters.scss";
import "./globalStyles/animation.scss";



const app = createApp(App).use(IonicVue);
//.use(router);

app.mount('#app');
  
//router.isReady().then(() => {}
//);