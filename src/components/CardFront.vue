<template>
	<ion-page :style="[colorContrastVarsFront, colorContrastVarsBack]" data-page>
		<input
			id="playerPic"
			ref="playerPic"
			name="playerPic"
			data-which-canvas="canvasPlayer"
			data-canvas-width="640"
			class="hidden--visually filePicker__input"
			type="file"
			accept="image/*"
			@input="encodeImage"
		/>

		<input
			id="logoPic"
			ref="logoPic"
			name="logoPic"
			data-which-canvas="canvasLogo"
			data-canvas-width="144"
			class="hidden--visually filePicker__input"
			type="file"
			accept="image/*"
			@input="encodeImage"
		/>
		<ion-header>
			<ion-toolbar color="primary" class="controls--l1">
				<div class="tabsGood">
					<div role="tablist" aria-label="Card Side">
						<button
							role="tab"
							aria-selected="true"
							aria-controls="panelCardFront"
							id="triggerFront"
							aria-label="Front"
							@click="chngTbz"
						>
							Card Front
						</button>
						<span class="showOnlyForSelectedTab">
							<label
								class="colorPicker__label colorPicker__label--front colorPicker__label--textOverlap align-self-center"
							>
								<span>Front Color</span>
								<input
									class="colorPicker__input"
									type="color"
									v-model="cardDesign.bgcf"
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
							aria-selected="false"
							aria-controls="panelCardBack"
							id="triggerBack"
							aria-label="Back"
							@click="chngTbz"
						>
							Card Back
						</button>
						<span class="showOnlyForSelectedTab">
							<fieldset class="step__fieldset">
								<label for="hiddenNumInput" class="step__label"
									>Years: <span>{{ numOfYears }}</span></label
								>
								<div class="step__wrapper--inner">
									<button
										type="button"
										class="step__button"
										:data-u-cant-click-me="numOfYears < 1"
										data-minus-field="numOfYears"
										@click="minus1year"
									>
										<svg
											viewBox="0 0 32 32"
											width="12"
											height="12"
											fill="none"
											stroke="currentcolor"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="4"
										>
											<use xlink:href="#iconminus"></use>
										</svg>
									</button>
									<input
										id="hiddenYearsNumInput"
										type="number"
										class="hidden--visually"
										min="0"
										max="5"
									/>
									<!--<output class="step__output">{{ numOfYears }}</output>-->
									<button
										type="button"
										class="step__button"
										:data-u-cant-click-me="numOfYears > 4"
										data-add-field="numOfYears"
										@click="add1year"
									>
										<svg
											viewBox="0 0 32 32"
											width="12"
											height="12"
											fill="none"
											stroke="currentcolor"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="4"
										>
											<use xlink:href="#iconplus"></use>
										</svg>
									</button>
								</div>
							</fieldset>
							<fieldset class="step__fieldset">
								<label for="hiddenStatsNumInput" class="step__label">
									Stats: <span>{{ numOfStats }}</span>
								</label>
								<div class="step__wrapper--inner">
									<button
										type="button"
										class="step__button"
										:data-u-cant-click-me="numOfStats < 1"
										data-minus-field="numOfStats"
										@click="minus1stat"
									>
										<svg
											viewBox="0 0 32 32"
											width="12"
											height="12"
											fill="none"
											stroke="currentcolor"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="4"
										>
											<use xlink:href="#iconminus"></use>
										</svg>
									</button>
									<input
										id="hiddenStatsNumInput"
										type="number"
										class="hidden--visually"
										min="0"
										max="5"
									/>
									<!--<output class="step__output"></output>-->

									<button
										type="button"
										class="step__button"
										:data-u-cant-click-me="numOfStats > 4"
										data-add-field="numOfStats"
										@click="add1stat"
									>
										<svg
											viewBox="0 0 32 32"
											width="12"
											height="12"
											fill="none"
											stroke="currentcolor"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="4"
										>
											<use xlink:href="#iconplus"></use>
										</svg>
									</button>
								</div>
							</fieldset>
							<label
								class="colorPicker__label colorPicker__label--back colorPicker__label--textOverlap"
							>
								<span>Back Color</span>
								<input
									class="colorPicker__input"
									type="color"
									v-model="cardBackSettings.backgroundColor"
								/> </label
						></span>
					</div>
				</div>
			</ion-toolbar>
		</ion-header>
		<ion-content class="contentWrapper">
			<div
				id="panelCardFront"
				role="tabpanel"
				class="tabpanel--front"
				aria-labelledby="triggerFront"
			>
				<div class="controls--l2 l2--front">
					<div class="row">
						<fieldset slot="start" class="radioBtns__fieldset">
							<legend class="radioBtns__legend text-left text-vertical">
								Layout
							</legend>
							<div class="radioBtns__wrapper--inner">
								<label class="radioBtns__label">
									<input
										type="radio"
										class="radioBtns__input hidden--visually"
										v-model="cardDesign.cardLayout"
										value="one-one"
									/>
									<span
										><svg width="32" height="32" viewBox="0 0 32 32">
											<use xlink:href="#iconlayoutoneone"></use></svg
									></span>
								</label>

								<label class="radioBtns__label">
									<input
										type="radio"
										class="radioBtns__input hidden--visually"
										v-model="cardDesign.cardLayout"
										value="zero-two"
									/>
									<span
										><svg viewBox="0 0 32 32" width="32" height="32">
											<use xlink:href="#iconlayoutzerotwo"></use></svg
									></span>
								</label>

								<label class="radioBtns__label">
									<input
										type="radio"
										class="radioBtns__input hidden--visually"
										v-model="cardDesign.cardLayout"
										value="two-zero"
									/>
									<span
										><svg viewBox="0 0 32 32" width="32" height="32">
											<use xlink:href="#iconlayouttwozero"></use></svg
									></span>
								</label>
							</div>
						</fieldset>
						<label slot="start" class="rangeUI__label">
							<span class="absolute">Border Curve </span>
							<input
								type="range"
								data-input="range"
								min="0"
								max="24"
								v-model.number="cardDesign.borderInnerCurve"
							/>
						</label>
					</div>
				</div>

				<!-- card front -->
				<div
					class="cardFront__wrapper--outermost"
					:style="[cssCardDesignProps, cssLogoProps, cssBorderInnerProps]"
				>
					<div
						class="card__container card__container--front"
						:class="[cardDesign.cardLayout, cardDesign.playerImageBleedOrBoxed]"
					>
						<div class="text__line--first row">
							<LineA></LineA>
						</div>

						<div
							:class="
								`row--middle--forDesign row ${cardDesign.logoPosition} ${cardDesign.playerImageFilterEffect}`
							"
						>
							<figure class="figure--player">
								<label
									class="figure--player__label"
									for="inputTriggerFocusUI_0"
								>
									<canvas
										id="canvasPlayer"
										class="image--player player--default"
									></canvas>
								</label>
							</figure>

							<!-- make rounded corner optional -->
							<!-- using css filter drop shadow could work -->

							<button
								id="imgFilters"
								name="imgFilters"
								class="absolute fab__button--imgFilters"
								aria-label="Image Filters"
								:aria-expanded="imgFiltersShowing"
								@click="toggleImageFilters"
							></button>

							<span
								id="imageFilterMenu"
								class="absolute margin--0 width--100 height--100"
								:hidden="!imgFiltersShowing"
								aria-labelledby="imgFilters"
							>
								<fieldset
									class="radioBtns__fieldset radioBtns__fieldset--decadeFilters"
								>
									<legend
										class="radioBtns__legend radioBtns__legend--decadeFilters"
									>
										Filters
									</legend>
									<div
										class="radioBtns__wrapper--inner radioBtns__wrapper--decadeFilters"
									>
										<label
											class="radioBtns__label radioBtns__label--decadeFilters"
										>
											<input
												type="radio"
												class="radioBtns__input hidden--visually"
												v-model="cardDesign.playerImageFilterEffect"
												value="noFilterEffect"
											/>
											<span>NONE</span>
										</label>

										<label
											class="radioBtns__label radioBtns__label--decadeFilters"
										>
											<input
												type="radio"
												class="radioBtns__input hidden--visually"
												v-model="cardDesign.playerImageFilterEffect"
												value="filter1940s"
											/>
											<span class="decadeFilters__span">1940s</span>
										</label>

										<label
											class="radioBtns__label radioBtns__label--decadeFilters"
										>
											<input
												type="radio"
												class="radioBtns__input hidden--visually"
												v-model="cardDesign.playerImageFilterEffect"
												value="filter1950s"
											/>
											<span class="decadeFilters__span">1950s</span>
										</label>

										<label
											class="radioBtns__label radioBtns__label--decadeFilters"
										>
											<input
												type="radio"
												class="radioBtns__input hidden--visually"
												v-model="cardDesign.playerImageFilterEffect"
												value="filter1960s"
											/>
											<span class="decadeFilters__span">1960s</span>
										</label>
										<label
											class="radioBtns__label radioBtns__label--decadeFilters"
										>
											<input
												type="radio"
												class="radioBtns__input hidden--visually"
												v-model="cardDesign.playerImageFilterEffect"
												value="filter1970s"
											/>
											<span class="decadeFilters__span">1970s</span>
										</label>
									</div>
								</fieldset>
							</span>
							<!--
							<div id="dztl" class="dz dropzone--logo top left"></div>
							<div id="dztr" class="dz dropzone--logo top right"></div>
							<div id="dzbl" class="dz dropzone--logo bottom left"></div>

							<div id="dzbr" class="dz dropzone--logo bottom right">
								<figure
									class=" figure--logo"
									v-show="cardDesign.logoPosition !== 'hideLogo'"
								>
									<canvas id="canvasLogo" class="image--logo logo--default">
									</canvas>
								</figure>
							</div>-->
						</div>

						<div class="text__line--second row">
							<LineB></LineB>
							<LineC></LineC>
						</div>
					</div>
				</div>
				<!-- end card front-->
			</div>
			<div
				id="panelCardBack"
				role="tabpanel"
				class="tabpanel--back"
				aria-labelledby="triggerBack"
				hidden
			>
				<div class="controls--l2 l2--back">
					<div class="row space-around height--100">
						<fieldset class="radioBtns__fieldset">
							<legend class="radioBtns__legend text-left">Orientation</legend>
							<div class="radioBtns__wrapper--inner">
								<label class="radioBtns__label">
									<input
										type="radio"
										class="radioBtns__input hidden--visually"
										name=""
										v-model="cardBackSettings.backOrient"
										value="horizontal"
									/>
									<span
										><svg width="32" height="32" viewBox="0 0 32 32">
											<use xlink:href="#iconorientationhorz"></use></svg
									></span>
								</label>

								<label class="radioBtns__label">
									<input
										type="radio"
										class="radioBtns__input hidden--visually"
										name=""
										v-model="cardBackSettings.backOrient"
										value="vertical"
									/>
									<span
										><svg width="32" height="32" viewBox="0 0 32 32">
											<use xlink:href="#iconorientationvert"></use></svg
									></span>
								</label>
							</div>
						</fieldset>
						<fieldset class="radioBtns__fieldset">
							<legend class="radioBtns__legend text-left">Gum Stain</legend>
							<div class="radioBtns__wrapper--inner">
								<label class="radioBtns__label">
									<input
										type="radio"
										class="radioBtns__input hidden--visually"
										name="gumradio"
										v-model="cardBackSettings.gumShowing"
										value="gumShowing"
									/>
									<span>Show</span>
								</label>

								<label class="radioBtns__label">
									<input
										type="radio"
										class="radioBtns__input hidden--visually"
										name="gumradio"
										v-model="cardBackSettings.gumShowing"
										value="gumHidden"
									/>
									<span>Hide</span>
								</label>
							</div>
						</fieldset>
					</div>
				</div>

				<CardBack
					v-bind="cardBackSettings"
					:numOfYears="numOfYears"
					:numOfStats="numOfStats"
					:data-years="numOfYears"
					:data-stats="numOfStats"
				></CardBack>
			</div>
		</ion-content>
	</ion-page>
</template>

<script>
function hexToRGB(hex) {
	return [
		parseInt("0x" + hex[1] + hex[2]),
		parseInt("0x" + hex[3] + hex[4]),
		parseInt("0x" + hex[5] + hex[6]),
	];
}

import { IonHeader, IonPage, IonToolbar, IonContent } from "@ionic/vue";

import LineA from "./frontcomponents/LineA";
import LineB from "./frontcomponents/LineB";
import LineC from "./frontcomponents/LineC";
import CardBack from "./CardBack";

//import ReOrder from "./frontcomponents/ReOrder";

import Dragula from "dragula";

export default {
	name: "CardFront",

	components: {
		//Dragula,
		IonHeader,
		IonToolbar,
		IonContent,
		IonPage,
		CardBack,
		LineA,
		LineB,
		LineC,
	},
	//setup(){
	//},
	data() {
		return {
			imgFiltersShowing: false,
			minYears: 0,
			maxYears: 5,
			minStats: 0,
			maxStats: 5,
			numOfYears: 5,
			numOfStats: 5,
			images: {
				playerPic: "/assets/images/leroy.jpg",
				logoPic: "/assets/images/logo.svg",
			},
			cardDesign: {
				playerImageBleedOrBoxed: "relative",
				bgcf: "#dddddd",
				cardLayout: "one-one",
				cardBrightness: 1,
				cardSepia: 0,
				cardGrayScale: 0,
				playerImageFilterEffect: "noFilterEffect",
				borderInnerCurve: 0,
				borderInnerWidth: 3,
				logoPosition: "bottomRight",

				logo: {
					position: "bottomRight",
				},
			},

			cardBackSettings: {
				backOrient: "horizontal",
				backgroundColor: "#9a8b7c",
				gumShowing: "gumShowing",
			},
		};
	},
	methods: {
		chngTbz(e) {
			document.body
				.querySelector('[aria-selected="true"]')
				.setAttribute("aria-selected", false);
			e.target.setAttribute("aria-selected", true);
			document.body
				.querySelector('[role="tabpanel"]:not([hidden])')
				.setAttribute("hidden", true);
			//.classList.add("rotated");
			document
				.getElementById(e.target.getAttribute("aria-controls"))
				.removeAttribute("hidden");
			//.classList.remove("rotated");
		},
		toggleImageFilters(event) {
			if (!this.imgFiltersShowing) {
				event.target.setAttribute("aria-expanded", true);
				document.getElementById("imageFilterMenu").removeAttribute("hidden");
				this.imgFiltersShowing = true;
			} else {
				event.target.setAttribute("aria-expanded", false);
				document.getElementById("imageFilterMenu").setAttribute("hidden", "");
				this.imgFiltersShowing = false;
			}
		},

		async encodeImage(event) {
			// maybe i should be using refs maybe here not IDs
			const input = event.target;
			const targetCanvas = document.getElementById(input.dataset.whichCanvas);
			const ctx = targetCanvas.getContext("2d");
			const reader = new FileReader();
			const image = new Image();
			const userFile = input.files[0];
			// need print resolution, and 2x really seems to address quality issues
			// can i use optional chaining // nullish coalscing or whatever i mean to say here?
			if (input.files && userFile) {
				reader.readAsDataURL(userFile);
			}
			reader.onload = async (event) => {
				image.src = event.target.result;
			};
			image.onload = async (event) => {
				const oc = document.createElement("canvas");
				const octx = oc.getContext("2d");
				targetCanvas.width = input.dataset.canvasWidth;
				targetCanvas.height = targetCanvas.width * (image.height / image.width);
				oc.width = targetCanvas.width;
				oc.height = targetCanvas.height;
				octx.drawImage(image, 0, 0, oc.width, oc.height);
				ctx.drawImage(oc, 0, 0, oc.width, oc.height, 0, 0, oc.width, oc.height);

				// refactor
				targetCanvas.classList.remove("logo--default", "player--default");
				//targetCanvas.nextElementSibling.setAttribute("hidden", "true");
			};
		},
		add1year() {
			console.log("add1");
			if (this.numOfYears < this.maxYears) {
				return (this.numOfYears += 1);
			}
		},
		minus1year() {
			if (this.numOfYears > this.minYears) {
				return (this.numOfYears -= 1);
			}
		},
		add1stat() {
			if (this.numOfStats < this.maxStats) {
				return (this.numOfStats += 1);
			}
		},
		minus1stat() {
			if (this.numOfStats > this.minStats) {
				return (this.numOfStats -= 1);
			}
		},

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
		cssBorderInnerProps() {
			return {
				"--borderinnercurve": `${this.cardDesign.borderInnerCurve}px`,
				"--borderinnerwidth": `${this.cardDesign.borderInnerWidth}px`,
			};
		},
		// can we combine into single function? try composition API here
		colorContrastVarsFront() {
			const theRGB = hexToRGB(this.cardDesign.bgcf);
			return {
				"--bgcf": `rgb(${theRGB[0]},${theRGB[1]},${theRGB[2]})`,
				"--redfront": theRGB[0],
				"--greenfront": theRGB[1],
				"--bluefront": theRGB[2],
			};
		},
		colorContrastVarsBack() {
			const theRGB = hexToRGB(this.cardBackSettings.backgroundColor);
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

		const dropzones = [...document.querySelectorAll(".dz")];

		// on desktop slidefactor works. Not on touch phone tho
		Dragula(
			dropzones
			//, { liftDelay: 700 }
		);

		console.log(Dragula);
	},
};
</script>

<style lang="scss">
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

	--logo-default: `/assets/images/logo.svg`;
}
//
//.fixed--fullWidth {
//	top: 0;
//	left: 0;
//	width: 100%;
//	height: 100%;
//}

[data-input="range"] {
	--bar-background: royalblue;
	--knob-background: royalblue;
}

// end vars

.card__container--front {
	position: relative;
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 32.8rem;
	//yes, hard height here because
	height: 50.4rem;
	margin: 0 auto;
	//padding: 0 1.6rem;
	color: var(--calcColorFront, #000);
	background-color: var(--bgcf, #fefefe);
	box-shadow: -1.6rem 0 var(--bgcf, #fefefe), 1.6rem 0 var(--bgcf, #fefefe);
	//border: 1px solid rgba(0, 0, 0, 0.3333);
	// may need this again...
	//overflow: hidden;
	z-index: 0;
}

.cardFront__controls {
	position: relative;

	.filePicker__label {
		flex-grow: 0;
		width: var(--min-touch-target);
		height: var(--min-touch-target);
	}
	// i donT like this but...
	.rangeUI__label {
		margin-left: 1.6rem;
		flex-grow: 1;
	}
}

.playerImage__controls {
	height: 100%;
}

.one-one {
	justify-content: space-between;
	input {
		&[type="text"] {
			height: var(--min-touch-target);
		}
	}
	.row--middle--forDesign {
		order: 0;
	}
	.text__line--first {
		[data-soi] {
			top: var(--min-touch-target);
			bottom: auto;
		}
	}

	.text__line--second {
		[data-soi] {
			top: auto;
			bottom: var(--min-touch-target);
		}
	}
}
.zero-two {
	justify-content: flex-end;
	//padding-top: 1.6rem;
	padding-bottom: 0;
	input {
		&[type="text"] {
			height: 2.4rem;
		}
	}
	.row--middle--forDesign {
		order: -1;
	}

	.text__line--first {
		padding-top: 0.8rem;
		[data-soi] {
			top: auto;
			bottom: 6.4rem;
		}
	}
	.text__line--second {
		padding-bottom: 0.8rem;
		[data-soi] {
			top: auto;
			bottom: 6.4rem;
		}
	}
}
.two-zero {
	justify-content: flex-start;
	padding-top: 0;
	//padding-bottom: 1.6rem;
	input {
		&[type="text"] {
			height: 2.4rem;
		}
	}
	.row--middle--forDesign {
		order: 1;
	}

	.text__line--first {
		padding-top: 0.8rem;
		[data-soi] {
			top: 6.4rem;
			bottom: auto;
		}
	}
	.text__line--second {
		padding-bottom: 0.8rem;
		[data-soi] {
			top: 6.4rem;
			bottom: auto;
		}
	}
}

.row--middle--forDesign {
	height: 41.6rem;
	max-height: 41.6rem;
	display: flex;
	//position: var(--playerimagebleedorboxed);
	position: relative;
	flex-grow: 1;
	border-width: var(--borderinnerwidth);
	border-style: solid;
	border-color: var(--calcColorFront);
	border-radius: var(--borderinnercurve);

	&.topLeft {
		justify-content: flex-start;
		align-items: flex-start;
	}
	&.topRight {
		justify-content: flex-end;

		align-items: flex-start;
	}
	&.bottomLeft {
		justify-content: flex-start;
		align-items: flex-end;
	}
	&.bottomRight {
		justify-content: flex-end;
		align-items: flex-end;
	}
}

.text__line--second {
	justify-content: space-between;
	align-items: center;
	.cf__h1 {
		width: 66.6666%;
	}
	.cf__h3 {
		width: 33.3333%;
	}
}

.cf__h1,
.cf__h2,
.cf__h3 {
	display: flex;
	input {
		&[type="text"] {
			display: flex;
			// why this
			min-width: 0;
			width: 100%;
			font-variation-settings: "wght" var(--fontwght), "wdth" var(--fontwidth),
				"slnt" var(--fontslant);
			color: var(--calcColorFront);
			padding: 0;
		}
	}

	&:focus-within {
		[data-soi] {
			visibility: visible;
		}
	}
}

.cf__h1 {
	font-size: 2.2rem;
}
.cf__h2 {
	font-size: 1.8rem;
	display: flex;
	flex-grow: 1;
}

.cf__h3 {
	font-size: 1.6rem;
	text-align: right;
	input {
		text-align: right;
	}
}

.figure--player {
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	display: flex;
	border-radius: calc(var(--borderinnercurve) - var(--borderinnerwidth));
	overflow: hidden;
	//.static & {
	//  border-radius: 0;
	//  z-index: -1;
	//}
}
.figure--player__label {
	flex-grow: 1;
	position: relative;
	overflow: hidden;
}

.image--player {
	object-fit: cover;
	object-position: center;
	border-radius: calc(var(--borderinnercurve) - var(--borderinnerwidth));
	-webkit-tap-highlight-color: transparent;

	&:not(.imagePlaceholder) {
		max-width: 100%;
		min-height: 100%;
	}
}

.playerImage__fieldset {
	flex-grow: 1;
}

.figure--logo {
	position: absolute;
	//pointer-events: none;
	width: 7.2rem;
	height: 7.2rem;
	z-index: 9999;
}

.image--logo {
	// background-image isn't going to work considering i wonT take away form user ability to have transparent logo image.
	width: 7.2rem;
	height: 7.2rem;
	object-fit: cover;
	object-position: center;
	border-radius: var(--logoborderradius);
	-webkit-tap-highlight-color: transparent;

	.top.left & {
		transform: translate(
			calc(var(--borderinnercurve) / -3.5),
			calc(var(--borderinnercurve) / -3.5)
		);
	}
	.top.right & {
		transform: translate(
			calc(var(--borderinnercurve) / 3.5),
			calc(var(--borderinnercurve) / -3.5)
		);
	}
	.bottom.left & {
		transform: translate(
			calc(var(--borderinnercurve) / -3.5),
			calc(var(--borderinnercurve) / 3.5)
		);
	}
	.bottom.right & {
		transform: translate(
			calc(var(--borderinnercurve) / 3.5),
			calc(var(--borderinnercurve) / 3.5)
		);
	}
}

.logo--default {
	background-image: url(/assets/images/logo.svg);
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center center;
	box-shadow: inset 0 0 0 0.3rem var(--calcColorFront);
}

.player--default {
	background-image: url(/assets/images/leroy.jpg);
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center center;
}

.imagePlaceholder {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;

	&.image--logo {
		box-shadow: inset 0 0 0 1.6rem var(--calcColorFront);
	}
}

.fab__button--imgFilters {
	--background: transparent;
	--box-shadow: none;
	--border-radius: 0;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	border: none;
	border-radius: 0;

	// gross mix of ionic and my own styles ugh
	&:not(.fab-button-close-active) {
		opacity: 0;
	}
	&:hover,
	&:focus,
	&:active {
		--background: transparent;
		--box-shadow: none;
		border: none;
		border-radius: 0;
	}
	// refactor
	&.fab-button-close-active {
		&,
		&[hidden] {
			display: block !important;
			bottom: -100vh;
			left: -100vw;
			width: 300vw;
		}
	}
}

.dropzone--logo {
	position: absolute;
	//width: 7.2rem;
	//height: 7.2rem;
	width: 50%;
	height: 50%;
	//z-index: 9999;
	&.top {
		top: 0;
	}
	&.right {
		right: 0;
	}
	&.bottom {
		bottom: 0;
	}
	&.left {
		left: 0;
	}
	.figure--logo {
		right: inherit;
		bottom: inherit;
	}
	.gu-unselectable & {
		z-index: 9999;
	}
}
</style>
