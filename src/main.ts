import { createApp } from 'vue'
import { createStore } from 'vuex'

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

const store = createStore({
	state() {
		return {
			count: 0,
			layoutFront: "oneone",
			textLineA: "Burger King Rangers",
			textLineB: "Jeremy Bates",
			textLineC: "Dad, Pitcher",
			lineAfontWght: 600

		}
	},
	mutations: {
		updateLineA(state: any, payload: string) {
			state.textLineA = payload
		},
		updateLineB(state: any, payload: string) {
			state.textLineB = payload
		},
		updateLineC(state: any, payload: string) {
			state.textLineC = payload
		},
		updateLayoutFront(state: any, payload: string) {
			state.layoutFront = payload
			console.log(state.layoutFront)
		},
		updateLineX(state: any, payload: any) {
			console.log(payload)
			state[`${payload.fieldname}`] = payload.fieldname
		},
		increment(state: any) {
			state.count++
		}
	}
})


const app = createApp(App).use(IonicVue).use(store);

app.mount('#app');

//router.isReady().then(() => {}
//);