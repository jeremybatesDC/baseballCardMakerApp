<template>
	<div :style="[colorContrastVarsFront]" data-front>
		<div class="controls--l1">
			<div class="row">
				<!--<span class="showOnlyForSelectedTab">-->
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
				<!--</span> -->
			</div>
		</div>

		<div class="tabpanel--front" aria-labelledby="triggerFront">
			<div class="controls--l2 l2--front">
				<div class="row">
					<RadiosLayout></RadiosLayout>
					<label slot="start" class="rangeUI__label">
						<span class="absolute text-vertical">Curve </span>
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
					:class="[
						this.$store.state.layoutFront,
						cardDesign.playerImageBleedOrBoxed,
					]"
				>
					<div class="text__line--first row">
						<!-- using  slot here because it makes sense to apss html to this component. -->
						<h2 class="cf__h2">
							<TextSlidersVuex :fontWghtMin="150" :fontWghtMax="800">
								<input
									class="cf__h2__input"
									v-model.trim.lazy="textLineA"
									type="text"
									placeholder
									maxlength="42"
									spellcheck="false"
								/>
							</TextSlidersVuex>
						</h2>
					</div>

					<div
						:class="
							`row--middle--forDesign row ${cardDesign.logoPosition} ${decade}`
						"
					>
						<figure class="figure--player">
							<label class="figure--player__label" for="inputTriggerFocusUI_0">
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
							class="row align-center absolute left--0 margin--0 height--100"
							:hidden="!imgFiltersShowing"
							aria-labelledby="imgFilters"
						>
							<RadiosDecade></RadiosDecade>
						</span>

						<!--<div id="dztl" class="dz dropzone--logo top left"></div>
						<div id="dztr" class="dz dropzone--logo top right"></div>
						<div id="dzbl" class="dz dropzone--logo bottom left"></div>-->

						<div id="dzbr" class="dz dropzone--logo bottom right">
							<figure
								class=" figure--logo"
								v-show="cardDesign.logoPosition !== 'hideLogo'"
							>
								<canvas id="canvasLogo" class="image--logo logo--default">
								</canvas>
							</figure>
						</div>
					</div>

					<div class="text__line--second row">
						<LineB></LineB>
						<LineC></LineC>
					</div>
				</div>
			</div>
			<!-- end card front-->
		</div>

		<span class="hidden--visually">
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
		</span>
	</div>
</template>

<script>
function hexToRGB(hex) {
	return [
		parseInt("0x" + hex[1] + hex[2]),
		parseInt("0x" + hex[3] + hex[4]),
		parseInt("0x" + hex[5] + hex[6]),
	];
}

//import {  } from "@ionic/vue";

import TextSlidersVuex from "./TextSlidersVuex";
import LineB from "./frontcomponents/LineB";
import LineC from "./frontcomponents/LineC";
import RadiosDecade from "./frontcomponents/RadiosDecade";
import RadiosLayout from "./frontcomponents/RadiosLayout";
//import ReOrder from "./frontcomponents/ReOrder";

import Dragula from "dragula";

export default {
	name: "CardFront",

	components: {
		//Dragula,
		TextSlidersVuex,
		LineB,
		LineC,
		RadiosDecade,
		RadiosLayout,
	},
	//setup(){
	//},
	data() {
		return {
			frontShowing: true,
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
				//cardLayout: "oneone",
				cardBrightness: 1,
				cardSepia: 0,
				cardGrayScale: 0,
				borderInnerCurve: 0,
				borderInnerWidth: 3,
				logoPosition: "bottomRight",

				logo: {
					position: "bottomRight",
				},
			},

			cardBackSettings: {
				//backOrient: "horizontal",
				backgroundColor: "#9a8b7c",
				//gumShowing: "gumShowing",
			},
		};
	},
	methods: {
		toggleImageFilters(event) {
			console;
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
	},
	computed: {
		textLineA: {
			get() {
				return this.$store.state.textLineA;
			},
			set(payload) {
				this.$store.commit("updateLineA", payload);
			},
		},
		decade: {
			get() {
				return this.$store.state.decadeFilter;
			},
		},
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
	},
	mounted() {
		const dropzones = [...document.querySelectorAll(".dz")];

		// on desktop slidefactor works. Not on touch phone tho
		Dragula(
			dropzones
			//, { liftDelay: 700 }
		);
	},
};
</script>

<style lang="scss">
[data-front] {
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
}
[data-back] {
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

.oneone {
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
.zerotwo {
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
.twozero {
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
