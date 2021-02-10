import { createStore } from 'vuex'

const store: any = createStore({
	state() {
		return {
			count: 0,
			layoutFront: "oneone",
			decadeFilter: "",
			textLineA: "Burger King Rangers",
			textLineB: "Jeremy Bates",
			textLineC: "Dad, Pitcher",
			aWght: 600,
			aWdth: 125,
			aSlnt: 0,
			bWght: 200,
			bWdth: 100,
			bSlnt: 0,
			cWght: 250,
			cWdth: 85,
			cSlnt: -5,
			dWght: 800,
			dWdth: 90,
			dSlnt: -10,
			gumShowing: "gumShowing",
			layoutBack: "horizontal",
			bgColorBack: "#9a8b7c",
			numOfYears: 3,
			numOfStats: 3,

		}
	},
	mutations: {
		updateDecadeFilter(state: any, payload: string) {
			state.decadeFilter = payload
		},
		updateLineA(state: any, payload: string) {
			state.textLineA = payload;
			console.log(state.textLineA);
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
		updateAwght(state: any, payload: number) {
			state.aWght = payload
		},
		updateAwdth(state: any, payload: number) {
			state.aWdth = payload
		},
		updateAslnt(state: any, payload: number) {
			state.aSlnt = payload
		},
		updateBwght(state: any, payload: number) {
			state.bWght = payload
		},
		updateBwdth(state: any, payload: number) {
			state.bWdth = payload
		},
		updateBslnt(state: any, payload: number) {
			state.bSlnt = payload
		},
		updateCwght(state: any, payload: number) {
			state.cWght = payload
		},
		updateCwdth(state: any, payload: number) {
			state.cWdth = payload
		},
		updateCslnt(state: any, payload: number) {
			state.cSlnt = payload;
		}

	}
}
)

export { store }