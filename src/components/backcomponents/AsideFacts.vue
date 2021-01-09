<template>
	<aside class="stats__aside" :style="textLineBProps">
		<blockquote class="aside__blockquote">
			<span class="aside__wrapper--outer">
				<h3 class="aside__h3">
					<input type="text" v-model="asideHeadline" />
				</h3>
				<span class="aside__wrapper--inner">
					<div class="row align-center height--100">
						<div class="col">
							<div class="grow-wrap" :data-replicated-value="asideText">
								<textarea
									class="aside__textarea"
									v-model="asideText"
									maxlength="280"
									spellcheck="false"
								></textarea>
							</div>
						</div>
					</div>

					<div data-soi class="soi--textSlider" hidden>
						<label class="rangeUI__label">
							<span>Weight: <output :value="textLineB.fontWght"></output></span>

							<input
								class="rangeUI__input"
								v-model.number="textLineB.fontWght"
								type="range"
								min="100"
								max="900"
							/>
						</label>
						<label class="rangeUI__label">
							<span>Width: <output :value="textLineB.fontWidth"></output></span>
							<input
								class="rangeUI__input"
								v-model.number="textLineB.fontWidth"
								type="range"
								min="75"
								max="150"
							/>
						</label>

						<label class="rangeUI__label">
							<span>Slant: <output :value="textLineB.fontSlant"></output></span>
							<input
								class="rangeUI__input"
								v-model.number="textLineB.fontSlant"
								type="range"
								min="-10"
								max="0"
							/>
						</label>
					</div>
				</span>
			</span>
		</blockquote>
	</aside>
</template>

<script>
//import { IonTextarea } from "@ionic/vue";

export default {
	//components: {
	//	IonTextarea,
	//},
	data() {
		return {
			asideHeadline: "CAREER HIGHLIGHTS",
			asideText: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
			//dataReplicatedValue: "",
			textLineB: {
				fontWght: 200,
				fontWidth: 90,
				fontSlant: 0,
			},
		};
	},
	computed: {
		textLineBProps() {
			return {
				"--fontwght": this.textLineB.fontWght,
				"--fontwidth": this.textLineB.fontWidth,
				"--fontslant": this.textLineB.fontSlant,
			};
		},
	},
};
</script>

<style lang="scss">
.stats__aside {
	--textareaheight: auto;
	--textareapadding: 0;
	--headlineheight: 2.4rem;
	--widthforasidetextcontrols: 100%;
	--minwidthforasidetextcontrols: 100%;
	--asidetop: 4.4rem;
	--asideright: 0;
	--asidebottom: auto;
	--asideleft: auto;
	--boxshadowaside: 100px 0 rgba(0, 0, 0, 0.667), -100px 0 rgba(0, 0, 0, 0.667);

	@media (min-width: 400px) {
		--textareaheight: calc(100% - 6.4rem);
		--textareapadding: 0 1rem;
		--headlineheight: 4.4rem;
		--widthforasidetextcontrols: 100%;
		--minwidthforasidetextcontrols: 32rem;
		--asidetop: 0;
		--asideright: calc(100% + 1.6rem);
		--asidebottom: 0;
		--asideleft: auto;
		--boxshadowaside: 1.2rem 0 rgba(0, 0, 0, 0.667),
			-2.4rem 0 rgba(0, 0, 0, 0.667);
	}
}

.stats__aside {
	display: flex;
	flex-grow: 1;
	flex-basis: 25%;
	min-height: 5.4rem;
	input[type="text"] {
		display: block;
		font-size: 1.6rem;
		//width: 100%;
		text-align: center;
		font-variation-settings: var(--text-short-wide);
	}
}

.aside__wrapper--outer {
	display: block;
	height: 100%;
}

.aside__wrapper--inner {
	display: block;
	position: relative;

	height: calc(100% - (2 * var(--headlineheight)));
	[data-soi] {
		position: absolute;
		width: var(--widthforasidetextcontrols);
		min-width: var(--minwidthforasidetextcontrols);
		top: var(--asidetop);
		right: var(--asideright);
		bottom: var(--asidebottom);
		left: var(--asideleft);
		padding-right: 0;
		padding-left: 0;
		box-shadow: var(--boxshadowaside);
		.rangeUI__label {
			&:first-of-type {
				padding-left: 0.4rem;
				padding-right: 1rem;
			}
			&:last-of-type {
				padding-left: 1rem;
				padding-right: 0.4rem;
			}
		}
	}
	&:focus-within {
		[data-soi] {
			visibility: visible;
		}
	}
}

.aside__blockquote {
	display: block;
	position: relative;
	width: 100%;
	height: auto;
	padding: 0 1.6rem 0 1.6rem;
	margin: 0;
	background-color: rgba(0, 0, 0, 0.05);
}

.aside__h3 {
	//position: absolute;
	top: 0;
	left: 0;
	display: block;
	font-size: 1.6rem;
	width: 100%;
	//padding-top: 0.4rem;
	font-variation-settings: var(--text-shortest-wide);

	input[type="text"] {
		// width here is needed prob becuase of nested absolute positioning
		width: 100%;
		min-height: var(--headlineheight);
		text-align: left;
	}
}

// absolute needs to be on the text-area element to keep it from growing I have found
[name="asideTextArea"] {
	position: absolute;
	top: 50%;
	left: 0;
	width: 100%;
	height: var(--textareaheight);
	min-height: var(--touch-target-large);
	transform: translateY(-50%);
	// padding here based on width helps avoid media queries
	// can i do a min-max CLAMP here somewhere?
	margin: 0;
	padding: 0;
	//padding-bottom: 1.6rem;
	overflow: hidden;
	text-overflow: ellipsis;
	font-size: 1.6rem;
	font-variation-settings: "wght" var(--fontwght), "wdth" var(--fontwidth),
		"slnt" var(--fontslant);
	line-height: 0.8;
	.textarea-wrapper {
		min-height: var(--textareaheight);
	}
	textarea[name="asideTextArea"] {
		// brute force baby
		height: 100%;
		padding: 0;
	}
}

.grow-wrap {
	display: grid;
}
.grow-wrap::after {
	/* Note the weird space! Needed to preventy jumpy behavior */
	content: attr(data-replicated-value) " ";
	/* This is how textarea text behaves */
	white-space: pre-wrap;
	/* Hidden from view, clicks, and screen readers */
	visibility: hidden;
}
.grow-wrap > textarea {
	/* Firefox shows scrollbar on growth, you can hide like this. */
	overflow: hidden;
}
.grow-wrap > textarea,
.grow-wrap::after {
	word-break: break-word;
	font-size: 1.6rem;
	font-variation-settings: var(--text-tight);
	line-height: 0.8;
	max-height: 15.4rem;
	padding: 0.8rem 0 0 0;
	/* Place on top of each other */
	grid-area: 1 / 1 / 2 / 2;
}
</style>
