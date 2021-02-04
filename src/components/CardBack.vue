<template>
	<div :style="[colorContrastVarsBack]" data-back>
		<div class="controls--l1">
			<div class="row">
				<StepperStats />
				<label
					class="colorPicker__label colorPicker__label--back colorPicker__label--textOverlap"
				>
					<span>Back Color</span>
					<input
						class="colorPicker__input"
						type="color"
						v-model="cardBackSettings.backgroundColor"
					/>
				</label>
			</div>
		</div>
		<div class="controls--l2 l2--back">
			<div class="row space-around height--100">
				<RadiosOrientation />
				<RadiosGum />
			</div>
		</div>
		<div class="cardBack__wrapper--outermost">
			<div
				class="card__container card-back"
				:data-card-back-orientation="orientation"
			>
				<article :data-gum="gum" class="card-back__article">
					<BackHeader />
					<section class="card-back__section">
						<TableStats />
						<AsideFacts />
					</section>
					<BackFooter />
				</article>
			</div>
		</div>
	</div>
</template>

<script>
//import { set } from "idb-keyval";
import TableStats from "./backcomponents/TableStats.vue";
import BackHeader from "./backcomponents/BackHeader.vue";
import BackFooter from "./backcomponents/BackFooter.vue";
import AsideFacts from "./backcomponents/AsideFacts.vue";
import RadiosOrientation from "./backcomponents/RadiosOrientation";
import RadiosGum from "./backcomponents/RadiosGum";
import StepperStats from "./backcomponents/StepperStats";

function hexToRGB(hex) {
	return [
		parseInt("0x" + hex[1] + hex[2]),
		parseInt("0x" + hex[3] + hex[4]),
		parseInt("0x" + hex[5] + hex[6]),
	];
}

export default {
	name: "CardBack",
	components: {
		TableStats,
		BackHeader,
		BackFooter,
		AsideFacts,
		RadiosOrientation,
		RadiosGum,
		StepperStats,
	},
	data() {
		return {
			cardBackSettings: {
				//backOrient: "horizontal",
				backgroundColor: "#9a8b7c",
				//gumShowing: "gumShowing",
			},
		};
	},
	props: ["backOrient", "numOfYears", "numOfStats"],
	computed: {
		gum: {
			get() {
				return this.$store.state.gumShowing;
			},
		},
		orientation: {
			get() {
				return this.$store.state.layoutBack;
			},
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
};
</script>

<style lang="scss">
// if can keep square stats table, will allow switch between vert and horz

.card-back {
	display: flex;
	position: relative;
	background-color: var(--bgcb);
	flex-basis: 100%;
	width: 100%;
	margin: 0 auto;
	color: var(--calcColorBack);
	filter: drop-shadow(0 1px 0 #000) drop-shadow(0 -1px 0 #000)
		drop-shadow(1px 0 0 #000) drop-shadow(-1px 0 0 #000);

	&__section {
		// if this part is restricted to vert width, then it'll definitely fit on horz
		display: flex;
		flex-grow: 1;
		align-items: stretch;
		flex-direction: row;

		padding: 0;
		background: rgba(0, 0, 0, 0.1);

		[data-card-back-orientation="horizontal"] & {
			flex-wrap: nowrap;
			//align-items: stretch;
		}

		[data-card-back-orientation="vertical"] & {
			flex-wrap: wrap-reverse;
			//align-items: stretch;
		}
	}
	&__article {
		display: flex;
		flex-grow: 1;
		flex-direction: column;
		justify-content: space-between;
		position: relative;

		//background-color: rgba(#9c2c1a, 0.25);
		// using outline here so that it'll just be clipped on small devices automatically
		outline: 1.6rem solid var(--calcColorBack);
		overflow: hidden;
	}
}

[data-card-back-orientation="horizontal"] {
	max-width: 50.4rem;
	height: 36rem;
}
[data-card-back-orientation="vertical"] {
	max-width: 36rem;
	height: 50.4rem;
}

[data-gum="gumShowing"] {
	&:after {
		// svg gum image maybe
		content: "";
		position: absolute;
		top: 0;
		right: 0;
		width: 10rem;
		height: 30rem;
		background-color: var(--calcColorBack);
		opacity: 0.15;
		border-radius: 3px 5px 7px 9px;
		transform: rotate(-33deg) translateX(-8rem) translateY(-4rem);
		//mix-blend-mode: hard-light;
		filter: blur(2px);
		pointer-events: none;
	}
}
</style>
