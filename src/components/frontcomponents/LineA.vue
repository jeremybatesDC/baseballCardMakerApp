<template>
	<h2 class="cf__h2" :style="cssTextLine1Props">
		<input
			class=""
			v-model.trim="cardText.textLine1.teamName"
			type="text"
			placeholder
			maxlength="42"
			spellcheck="false"
		/>

		<div data-soi class="soi--textSlider">
			<label class="rangeUI__label">
				<span
					>Weight: <output :value="cardText.textLine1.fontWght"></output
				></span>
				<input
					type="range"
					min="100"
					max="900"
					v-model.number="cardText.textLine1.fontWght"
				/>
			</label>
			<label class="rangeUI__label">
				<span
					>Width: <output :value="cardText.textLine1.fontWidth"></output
				></span>
				<input
					type="range"
					min="75"
					max="150"
					v-model.number="cardText.textLine1.fontWidth"
				/>
			</label>
			<label class="rangeUI__label">
				<span
					>Slant: <output :value="cardText.textLine1.fontSlant"></output
				></span>
				<input
					type="range"
					min="-10"
					max="0"
					v-model.number="cardText.textLine1.fontSlant"
				/>
			</label>
		</div>
	</h2>
</template>

<script>
export default {
	name: "yourMom",
	//components: {},
	data() {
		return {
			cardText: {
				textLine1: {
					teamName: "Mudville Madcats",
					fontWght: 600,
					fontWidth: 125,
					fontSlant: 0,
				},
			},
		};
	},
	computed: {
		cssTextLine1Props() {
			return {
				"--fontwght": this.cardText.textLine1.fontWght,
				"--fontwidth": this.cardText.textLine1.fontWidth,
				"--fontslant": this.cardText.textLine1.fontSlant,
			};
		},
	},
};
</script>

<style lang="scss"></style>
