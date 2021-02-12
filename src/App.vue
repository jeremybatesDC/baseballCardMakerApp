<template>
	<ion-app>
		<ion-page data-page>
			<ion-header>
				<ion-toolbar color="primary" class="controls--l1">
					<div role="tablist" aria-label="Card Side">
						<button
							role="tab"
							:aria-selected="cardFrontShowing"
							aria-controls="tabFront"
							id="buttonShowFront"
							aria-label="Front"
							@click="cardFrontShowing = true"
						>
							Card Front
						</button>
						<span class="showOnlyForSelectedTab">
							<label
								class="colorPicker__label colorPicker__label--front colorPicker__label--textOverlap align-self-center"
							>
								<span>Front Color</span>
								<input
									id="colorPickerFront"
									class="colorPicker__input"
									type="color"
									v-model="bgcf"
								/>
							</label>
							<label
								for="playerPic"
								class="filePicker__label filePicker__label--addPic"
								aria-label="Upload Image"
							>
								<svg
									viewBox="0 0 32 32"
									width="32"
									height="32"
									fill="none"
									stroke="currentcolor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
								>
									<use xlink:href="#iconportraitadd"></use>
								</svg>
								<!-- this br inside of a flex botton with text of uncertain length is in this case more declarative and reduces complexity -->
								<span>Add <br />Pic</span>
							</label>
							<label
								for="logoPic"
								class="filePicker__label filePicker__label--addLogo"
								aria-label="Upload Logo Image"
							>
								<svg
									viewBox="0 0 32 32"
									width="32"
									height="32"
									fill="none"
									stroke="currentcolor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
								>
									<use xlink:href="#iconlogoadd"></use>
								</svg>
								<!-- this br inside of a flex botton with text of uncertain length is in this case more declarative and reduces complexity -->
								<span>Add <br />Logo</span>
							</label>
						</span>
						<button
							role="tab"
							:aria-selected="!cardFrontShowing"
							aria-controls="tabBack"
							id="buttonShowBack"
							aria-label="Back"
							@click="cardFrontShowing = false"
						>
							Card Back
						</button>
						<span class="showOnlyForSelectedTab">
							<StepperStats />
							<label
								class="colorPicker__label colorPicker__label--back colorPicker__label--textOverlap"
							>
								<span>Back Color</span>
								<input class="colorPicker__input" type="color" v-model="bgcb" />
							</label>
						</span>
					</div>
				</ion-toolbar>
			</ion-header>
			<ion-content class="contentWrapper">
				<CardFront
					id="tabFront"
					role="tabpanel"
					class="tabpanel tabpanel--front"
					aria-labelledby="buttonShowFront"
					:bgcf="bgcf"
					:hidden="!cardFrontShowing"
				></CardFront>
				<CardBack
					id="tabBack"
					role="tabpanel"
					class="tabpanel tabpanel--back"
					aria-labelledby="triggerBack"
					:bgcb="bgcb"
					:hidden="cardFrontShowing"
					:backOrient="backOrient"
					:numOfYears="numOfYears"
					:numOfStats="numOfStats"
					:data-years="numOfYears"
					:data-stats="numOfStats"
				></CardBack>
			</ion-content>
		</ion-page>
	</ion-app>
</template>

<script>
import { IonApp, IonContent, IonHeader, IonToolbar, IonPage } from "@ionic/vue";
import CardFront from "./components/CardFront";
import CardBack from "./components/CardBack";
import StepperStats from "./components/backcomponents/StepperStats";

export default {
	name: "App",
	components: {
		IonApp,
		IonContent,
		IonHeader,
		IonToolbar,
		IonPage,
		CardFront,
		CardBack,
		StepperStats,
	},
	data() {
		return {
			meow: "mix",
			cardFrontShowing: true,
			bgcf: "#dddddd",
			bgcb: "#9a8b7c",
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
};
</script>

<style lang="scss">
[role="tabpanel"] {
	min-height: 100%;
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

	color: #000;
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
		background: #fff;
		color: royalblue;
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

.card__container {
	filter: drop-shadow(0 0 0.8rem rgba(0, 0, 0, 0.8));
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
