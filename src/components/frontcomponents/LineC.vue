<template>
	<h3 :style="cssTextLine3Props" class="cf__h3">
		<input
			class=""
			v-model.trim="cardText.textLine3.playerPosition"
			type="text"
			placeholder
			maxlength="48"
			spellcheck="false"
		/>
		<div data-soi class="soi--textSlider">
			<label class="rangeUI__label">
				<span
					>Weight: <output :value="cardText.textLine3.fontWght"></output
				></span>

				<input
					class="rangeUI__input"
					v-model.number="cardText.textLine3.fontWght"
					type="range"
					min="100"
					max="900"
				/>
			</label>
			<label class="rangeUI__label">
				<span
					>Width: <output :value="cardText.textLine3.fontWidth"></output
				></span>
				<input
					class="rangeUI__input"
					v-model.number="cardText.textLine3.fontWidth"
					type="range"
					min="75"
					max="150"
				/>
			</label>

			<label class="rangeUI__label">
				<span
					>Slant: <output :value="cardText.textLine3.fontSlant"></output
				></span>
				<input
					class="rangeUI__input"
					v-model.number="cardText.textLine3.fontSlant"
					type="range"
					min="-10"
					max="0"
				/>
			</label>
		</div>
	</h3>
</template>

<script>
//import { IonRange } from "@ionic/vue";

export default {
	name: "LineC",
	//components: { IonRange },
	data() {
		return {
			cardText: {
				textLine3: {
					playerPosition: "Dad, Pitcher",
					fontWght: 200,
					fontWidth: 100,
					fontSlant: -5,
				},
			},
		};
	},
	computed: {
		cssTextLine3Props() {
			return {
				"--fontwght": this.cardText.textLine3.fontWght,
				"--fontwidth": this.cardText.textLine3.fontWidth,
				"--fontslant": this.cardText.textLine3.fontSlant,
			};
		},
	},
};
</script>

<style lang="scss"></style>
