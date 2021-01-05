<template>
	<div class="cardBack__wrapper--outermost">
		<div class="card-back" :data-card-back-orientation="backOrient">
			<article :data-gum="gumShowing" class="card-back__article">
				<BackHeader />
				<section class="card-back__section">
					<TableStatsManual :numOfYears="numOfYears" :numOfStats="numOfStats" />
					<AsideFacts />
				</section>
				<BackFooter />
			</article>
		</div>
	</div>
</template>

<script lang="ts">
//import { onMounted } from "vue";

//import { set } from "idb-keyval";
//import TextSlider from "./InputChildComponents/TextSlider.vue";
import TableStatsManual from "./backcomponents/TableStatsManual.vue";
import BackHeader from "./backcomponents/BackHeader.vue";
import BackFooter from "./backcomponents/BackFooter.vue";
import AsideFacts from "./backcomponents/AsideFacts.vue";

export default {
	components: {
		//TextSlider,
		TableStatsManual,
		BackHeader,
		BackFooter,
		AsideFacts,
	},
	props: ["gumShowing", "backOrient", "numOfYears", "numOfStats"],
	//setup() {
	//  setFunc();
	// return { setFunc };
	//},
	data() {
		return {
			//optsBack: {
			//backOrient: "horizontal",
			//backgroundColor: "#9a8b7c",
			//gumShowing: "gumShowing",
			// },
		};
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
		}

		[data-card-back-orientation="vertical"] & {
			flex-wrap: wrap-reverse;
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
