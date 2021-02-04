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
			decadeFilter: "",
			textLineA: "Burger King Rangers",
			textLineB: "Jeremy Bates",
			textLineC: "Dad, Pitcher",
			lineAfontWght: 600,
			gumShowing: "gumShowing",
			layoutBack: "horizontal",
			bgColorBack: "#9a8b7c",
			numOfYears: 3,
			numOfStats: 3,

		}
	},
	mutations: {
		updateDecadeFiler(state: any, payload: string) {
			state.decadeFilter = payload
		},
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
		},
		updateLayoutBack(state: any, payload: string) {
			state.layoutBack = payload
		},
		updateBgColorBack(state: any, payload: any) {
			state.bgColorBack = payload
		},
		updateGumShowing(state: any, payload: string) {
			state.gumShowing = payload
		},
		decrementYears(state: any, payload: string) {
			state.numOfYears -= 1;
			console.log(state.numOfYears);
		},
		incrementYears(state: any, payload: string) {
			state.numOfYears += 1;
			console.log(state.numOfYears);

		},
		decrementStats(state: any, payload: string) {
			state.numOfStats -= 1;
			console.log(state.numOfStats);
		},
		incrementStats(state: any, payload: string) {
			state.numOfStats += 1;
			console.log(state.numOfStats);
		},
	}
})


const app = createApp(App).use(IonicVue).use(store);

app.mount('#app');
