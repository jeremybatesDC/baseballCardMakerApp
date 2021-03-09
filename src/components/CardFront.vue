<template>
	<div data-front>
		<div class="controls--l2">
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

		<div class="tabpanel--front" aria-labelledby="triggerFront">
			<!-- card front -->
			<div
				class="cardFront__wrapper--outermost"
				:style="[cssCardDesignProps, cssLogoProps, cssBorderInnerProps]"
			>
				<!--<button
					v-show="imgFiltersShowing"
					class="button--closeAll absolute width--100 height--100"
					tabindex="-1"
					@click="closeAll()"
				></button>-->
				<div
					:class="
						`${layoutFront} card__container card__container--front relative`
					"
				>
					<div class="text__line--first row">
						<!-- using  slot here because it makes sense to apss html to this component. -->
						<h2 class="cf__h2">
							<TextSlidersVuex
								whichLine="A"
								gradProp="0"
								wghtProp="600"
								wdthProp="125"
								slantProp="0"
								:fontWghtMin="150"
								:fontWghtMax="800"
							>
								<input
									class="cf__h2__input textControlledBySliders"
									type="text"
									maxlength="42"
									spellcheck="false"
									v-model.trim="localLineA"
									data-line="A"
									:placeholder="localPlaceholderA"
									:data-dirty="textLineADirty"
									@blur="storeDis('A')"
									@focus.once="makeFieldDirty"
								/>
							</TextSlidersVuex>
						</h2>
					</div>

					<div :class="`row--middle--forDesign row ${decade}`">
						<figure class="figure--player">
							<label class="figure--player__label" for="inputTriggerFocusUI_0">
								<canvas
									id="canvasPlayer"
									class="image--player player--default"
									:data-canvas-dirty="canvasPlayerDirty"
								></canvas>
							</label>
						</figure>

						<!-- make rounded corner optional -->
						<!-- using css filter drop shadow could work -->

						<!-- could prob do a v-if and just have 2 diff buttons to show at different times. Then no need for event this -->
						<button
							id="imgFilters"
							name="imgFilters"
							class="absolute button--imgFilters"
							aria-label="Image Filters"
							:aria-expanded="imgFiltersShowing"
							@click="imgFiltersShowing = !imgFiltersShowing"
						></button>

						<span
							id="imageFilterMenu"
							class="imageFilterMenu row align-center space-between absolute left--0 margin--0 height--100 width--100"
							:hidden="!imgFiltersShowing"
							aria-labelledby="imgFilters"
						>
							<button
								class="absolute left--0 margin--0 height--100 width--100"
								aria-label="Close Image Filters"
								:aria-expanded="imgFiltersShowing"
								@click="imgFiltersShowing = !imgFiltersShowing"
							></button>
							<RadiosDecade></RadiosDecade>

							<RadiosLogo></RadiosLogo>
						</span>

						<span :class="`figure--logoWrapper ${logoPosition}`">
							<figure
								class=" figure--logo"
								v-show="logoPosition !== 'hideLogo'"
							>
								<canvas
									id="canvasLogo"
									class="image--logo logo--default"
									:data-canvas-dirty="canvasLogoDirty"
								>
								</canvas>
							</figure>
						</span>
					</div>

					<div class="text__line--second row">
						<h1 class="cf__h1">
							<TextSlidersVuex
								whichLine="B"
								gradProp="0"
								wghtProp="200"
								wdthProp="100"
								slantProp="0"
								:fontWghtMin="150"
								:fontWghtMax="800"
								:fontWidthMax="125"
							>
								<input
									class="textControlledBySliders"
									v-model.trim="localLineB"
									type="text"
									maxlength="48"
									spellcheck="false"
									data-line="B"
									:placeholder="localPlaceholderB"
									:data-dirty="textLineBDirty"
									@focus.once="makeFieldDirty"
									@blur="storeDis('B')"
								/>
							</TextSlidersVuex>
						</h1>
						<h3 class="cf__h3">
							<TextSlidersVuex
								whichLine="C"
								gradProp="0"
								wghtProp="250"
								wdthProp="85"
								slantProp="-5"
								:fontWghtMin="150"
								:fontWghtMax="800"
								:fontWidthMax="90"
							>
								<input
									class="textControlledBySliders"
									v-model.trim="localLineC"
									type="text"
									maxlength="48"
									spellcheck="false"
									data-line="C"
									:placeholder="localPlaceholderC"
									:data-dirty="textLineCDirty"
									@focus.once="makeFieldDirty"
									@blur="storeDis('C')"
								/>
							</TextSlidersVuex>
						</h3>
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
import TextSlidersVuex from "./TextSlidersVuex";
import RadiosDecade from "./frontcomponents/RadiosDecade";
import RadiosLogo from "./frontcomponents/RadiosLogo";

import RadiosLayout from "./frontcomponents/RadiosLayout";

export default {
	name: "CardFront",
	components: {
		TextSlidersVuex,
		RadiosDecade,
		RadiosLayout,
		RadiosLogo,
	},
	//setup(){
	//},
	data() {
		return {
			frontShowing: true,
			imgFiltersShowing: false,
			canvasPlayerDirty: false,
			canvasLogoDirty: false,
			localLineA: "",
			localPlaceholderA: "Mudville Spiders",
			textLineADirty: false,
			localLineB: "",
			localPlaceholderB: "Casey LeRoy",
			textLineBDirty: false,
			localLineC: "",
			localPlaceholderC: "Dad, Utility Infielder",
			textLineCDirty: false,
			images: {
				playerPic: "/assets/images/leroy.jpg",
				logoPic: "/assets/images/logo.svg",
			},
			cardDesign: {
				cardBrightness: 1,
				cardSepia: 0,
				cardGrayScale: 0,
				borderInnerCurve: 0,
				borderInnerWidth: 3,
				logoPosition: "bottomRight",
			},
		};
	},
	//props: ["bgcf"],
	methods: {
		closeAll() {
			console.log("close all");
			this.imgFiltersShowing = false;
		},
		async encodeImage(event) {
			// maybe i should be using refs maybe here not IDs
			const input = event.target;
			const whichCanvas = input.dataset.whichCanvas;
			const targetCanvas = document.getElementById(whichCanvas);
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
				const fieldname = `${whichCanvas}Dirty`;
				console.log(fieldname);
				this[fieldname] = true;
				//targetCanvas.classList.remove("logo--default", "player--default");
			};
		},
		makeFieldDirty(event) {
			// need to make this caseINsensitive with to uppercase or something
			const fieldToMakeDirty = `textLine${event.target.dataset.line}Dirty`;
			this[fieldToMakeDirty] = true;
		},
		// i could say asycn but ultimately mutations are synchronous
		storeDis(line) {
			const mutationname = `updateLine${line}`;
			const localFieldName = `localLine${line}`;
			this.$store.commit(mutationname, this[localFieldName]);
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
		textLineB: {
			get() {
				return this.$store.state.textLineB;
			},
			set(payload) {
				this.$store.commit("updateLineB", payload);
			},
		},
		textLineC: {
			get() {
				return this.$store.state.textLineC;
			},
			set(payload) {
				this.$store.commit("updateLineC", payload);
			},
		},

		decade: {
			get() {
				return this.$store.state.decadeFilter;
			},
		},
		layoutFront: {
			get() {
				return this.$store.state.layoutFront;
			},
		},
		logoPosition: {
			get() {
				return this.$store.state.logoPosition;
			},
		},
		cssBorderInnerProps() {
			return {
				"--borderinnercurve": `${this.cardDesign.borderInnerCurve}px`,
				"--borderinnerwidth": `${this.cardDesign.borderInnerWidth}px`,
			};
		},
	},
};
</script>

<style lang="scss">
[data-input="range"] {
	--bar-background: royalblue;
	--knob-background: royalblue;
}

// end vars

.cardFront__wrapper--outermost {
	position: relative;
	padding-top: 1.6rem;
	overflow: hidden;

	// TEST TEST TEST
	// min-height: 100vh;
}
.card__container--front {
	position: relative;
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 32.8rem;
	//yes, hard height here because
	height: 50.4rem;
	// test
	margin: 0 auto 4.8rem auto;
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

.imageFilterMenu {
	z-index: 0;
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
	position: relative;
	flex-grow: 1;

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
		width: 60%;
	}
	.cf__h3 {
		width: 40%;
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
			font-variation-settings: "GRAD" var(--fontgrad), "wght" var(--fontwght),
				"wdth" var(--fontwidth), "slnt" var(--fontslant);
			color: var(--calcColorFront);
			padding: 0;
			&::placeholder {
				font: inherit !important;
				font-variation-settings: inherit !important;
				color: inherit !important;
			}
			&[data-dirty="true"] {
				&::placeholder {
					color: transparent !important;
				}
			}
			&:placeholder-shown {
				+ [data-soi] {
					display: none !important;
					visibility: hidden !important;
				}
			}
		}
	}

	&:focus-within {
		input[type="text"] {
			outline: 2px solid royalblue;
		}
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
	//position: relative;
	display: flex;
	flex-grow: 1;
	border-width: var(--borderinnerwidth);
	border-style: solid;
	border-color: var(--calcColorFront);
	border-radius: var(--borderinnercurve);

	// yah this
	//overflow: hidden;
}
.figure--player__label {
	flex-grow: 1;

	// this position relative contirbutes so default player image clipping ion ios no?
	//position: relative;

	border-radius: calc(var(--borderinnercurve) - var(--borderinnerwidth));

	overflow: hidden;
}

.image--player {
	object-fit: cover;
	object-position: center;
	-webkit-tap-highlight-color: transparent;

	//this is fucking weird -- is border radiuus not valid on canvas? i think when it returns canvas it stops caring about curves?

	//border-radius: var(--borderinnercurve) + var(--borderinnerwidth);
	overflow: hidden;

	&:not(.imagePlaceholder) {
		max-width: 100%;
		min-height: 100%;
	}
}

.player--default {
	&[data-canvas-dirty="false"] {
		background-image: url(/assets/images/leroy.jpg);
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center center;
	}
}

.playerImage__fieldset {
	flex-grow: 1;
}

.figure--logo {
	//position: absolute;
	//pointer-events: none;
	width: 7.2rem;
	height: 7.2rem;
	//z-index: 9999;
}

.image--logo {
	// background-image isn't going to work considering i wonT take away form user ability to have transparent logo image.
	width: 7.2rem;
	height: 7.2rem;
	object-fit: cover;
	object-position: center;
	border-radius: var(--logoborderradius);
	-webkit-tap-highlight-color: transparent;

	.topLeft & {
		transform: translate(
			calc(var(--borderinnercurve) / -3.5),
			calc(var(--borderinnercurve) / -3.5)
		);
	}
	.topRight & {
		transform: translate(
			calc(var(--borderinnercurve) / 3.5),
			calc(var(--borderinnercurve) / -3.5)
		);
	}
	.bottomLeft & {
		transform: translate(
			calc(var(--borderinnercurve) / -3.5),
			calc(var(--borderinnercurve) / 3.5)
		);
	}
	.bottomRight & {
		transform: translate(
			calc(var(--borderinnercurve) / 3.5),
			calc(var(--borderinnercurve) / 3.5)
		);
	}
}

.logo--default {
	&[data-canvas-dirty="false"] {
		background-image: url(/assets/images/logo.svg);
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center center;
		box-shadow: inset 0 0 0 0.3rem var(--calcColorFront);
	}
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

.button--imgFilters {
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
	outline: none;
	// gross mix of ionic and my own styles ugh

	&:hover,
	&:focus,
	&:active {
		--background: transparent;
		--box-shadow: none;
		border: none;
		border-radius: 0;
		outline: none;
	}
}
.figure--logoWrapper {
	position: absolute;
	width: 7.2rem;
	height: 7.2rem;
	//width: 50%;
	//height: 50%;
	//z-index: 9999;
	&.topLeft {
		top: 0;
		left: 0;
	}
	&.topRight {
		top: 0;
		right: 0;
	}

	&.bottomLeft {
		bottom: 0;
		left: 0;
	}
	&.bottomRight {
		bottom: 0;
		right: 0;
	}
}
</style>
