import { createApp } from 'vue'
import { createStore } from 'vuex'
import { IonicVue } from '@ionic/vue';

import { store } from './store'
import App from './App.vue'

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


const app = createApp(App).use(IonicVue).use(store);

app.mount('#app');
