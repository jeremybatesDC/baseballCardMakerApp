<template>
	<ion-app data-app>
		<ion-page
			data-page
			:style="[colorContrastVarsFront, colorContrastVarsBack]"
		>
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
								<span class="colorPicker__label__span" data-side="front"
									>Front Color</span
								>
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
								<span data-side="back">Back Color</span>

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
					:hidden="!cardFrontShowing"
				></CardFront>
				<CardBack
					id="tabBack"
					role="tabpanel"
					class="tabpanel tabpanel--back"
					aria-labelledby="triggerBack"
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
import { hexToRGB } from "./globalScripts/hexToRGB.ts";
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
	computed: {
		// refactor
		colorContrastVarsFront() {
			const theRGB = hexToRGB(this.bgcf);
			return {
				"--bgcf": `rgb(${theRGB[0]},${theRGB[1]},${theRGB[2]})`,
				"--redfront": theRGB[0],
				"--greenfront": theRGB[1],
				"--bluefront": theRGB[2],
			};
		},
		colorContrastVarsBack() {
			const theRGB = hexToRGB(this.bgcb);
			return {
				"--bgcb": `rgb(${theRGB[0]},${theRGB[1]},${theRGB[2]})`,
				"--redback": theRGB[0],
				"--greenback": theRGB[1],
				"--blueback": theRGB[2],
			};
		},
	},
	mounted() {
		this.sendData();
	},
};
</script>

<style lang="scss">
.contentWrapper.hydrated.ios {
	--keyboard-offset: 0px !important;
}

[data-page] {
	--rfront: calc(var(--redfront) * 0.2126);
	--gfront: calc(var(--greenfront) * 0.7152);
	--bfront: calc(var(--bluefront) * 0.0722);
	--sumfront: calc(var(--rfront) + var(--gfront) + var(--bfront));
	--perceived-lightness-front: calc(var(--sumfront) / 255);

	--calcColorFront: hsl(
		0,
		0%,
		calc(
			(var(--perceived-lightness-front) - var(--contrast-threshold-for-card)) *
				-10000000%
		)
	);

	--rback: calc(var(--redback) * 0.2126);
	--gback: calc(var(--greenback) * 0.7152);
	--bback: calc(var(--blueback) * 0.0722);
	--sumback: calc(var(--rback) + var(--gback) + var(--bback));
	--perceived-lightness-back: calc(var(--sumback) / 255);

	--calcColorBack: hsl(
		0,
		0%,
		calc(
			(var(--perceived-lightness-back) - var(--contrast-threshold-for-card)) *
				-10000000%
		)
	);
}

[data-side] {
	user-select: none;
	-webkit-tap-highlight-color: transparent;
}

[data-side="front"] {
	color: var(--calcColorFront);
}

[data-side="back"] {
	color: var(--calcColorBack);
}

[role="tabpanel"] {
	position: relative;
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
	font-variation-settings: var(--text-controls-impact);
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
	font-variation-settings: var(--text-textarea);
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
