<template>
	<ion-app>
		<CardFront></CardFront>
	</ion-app>
</template>

<script>
import { IonApp } from "@ionic/vue";
import CardFront from "./components/CardFront";
import { defineComponent } from "vue";

export default defineComponent({
	name: "App",
	components: {
		IonApp,
		CardFront,
	},
	data() {
		return {
			meow: "mix",
		};
	},
	methods: {
		async sendData() {
			const endpointURL = "https://reqres.in/api/users";
			const dataOpts = {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				// this refers to the data obj thanks to vue being sweet
				body: JSON.stringify(this),
			};

			fetch(endpointURL, dataOpts)
				.then((res) => res.json())
				.then((res) => console.log(res));
		},
	},
	mounted() {
		this.sendData();
	},
});
</script>

<style lang="scss">
#panelCardFront,
#panelCardBack {
	min-height: 100%;
	background-size: cover;
}

[role="tablist"] {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 0.4rem;
	background-color: royalblue;
}

[role="tab"] {
	font-size: 2rem;
	line-height: 0.85;
	font-variation-settings: var(--text-big-bold);
	display: flex;

	//flex-grow: 1;

	align-items: center;
	justify-content: center;
	width: var(--touch-target-large);
	height: var(--touch-target-large);
	padding: 0;
	text-transform: uppercase;
	// in case ever have more than just 2 tabs
	&:not(:first-child) {
		//box-shadow: -1px 0 #000;
		order: 99;
	}
	&[aria-selected="true"] {
		background: royalblue;
		color: #fff;
		pointer-events: none;
	}
	&[aria-selected="false"] {
		background: var(--grey-for-controls);
		//color: #fff;
		//pointer-events: none;
	}
}

[data-input="range"] {
	padding-top: 0;
	padding-bottom: 0;
}

.showOnlyForSelectedTab {
	display: none;
	align-items: center;
	//flex-shrink: 0;
	// after flex-grow 1 OR width 100% here, there is some gap thatS letting a tap click through and zoom on iOS... grrr
	//flex-grow: 1;
	//width: 100%;
	background-color: royalblue;
	[aria-selected="true"] + & {
		display: flex;
	}
	&:last-of-type {
		justify-content: flex-end;
	}
}

.grow-wrap {
	display: grid;
	&:after {
		/* Note the weird space! Needed to preventy jumpy behavior */
		content: attr(data-replicated-value) " ";
		/* This is how textarea text behaves */
		white-space: pre-wrap;
		/* Hidden from view, clicks, and screen readers */
		visibility: hidden;
	}
	> textarea {
		/* Firefox shows scrollbar on growth, you can hide like this. */
		overflow: hidden;
	}
}

.grow-wrap > textarea,
.grow-wrap::after {
	word-break: break-word;
	font-size: 1.6rem;
	font-variation-settings: var(--text-tight);
	line-height: 0.8;
	//max-height: 15.4rem;
	padding: 0.8rem 0 0 0;
	/* Place on top of each other */
	grid-area: 1 / 1 / 2 / 2;
	.aside__wrapper--inner & {
		max-height: 15.4rem;
	}
	.footTextWrap & {
		max-height: 8rem;
	}
}
</style>
