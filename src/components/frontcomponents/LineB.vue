<template>
	<h1 :style="cssTextLine2Props" class="cf__h1">
		<input
			class=""
			v-model.trim="cardText.textLine2.playerName"
			type="text"
			placeholder
			maxlength="48"
			spellcheck="false"
		/>
		<div data-soi class="soi--textSlider">
			<label class="rangeUI__label">
				<span
					>Weight: <output :value="cardText.textLine2.fontWght"></output
				></span>

				<input
					class="rangeUI__input"
					v-model.number="cardText.textLine2.fontWght"
					type="range"
					min="100"
					max="900"
				/>
			</label>
			<label class="rangeUI__label">
				<span
					>Width: <output :value="cardText.textLine2.fontWidth"></output
				></span>
				<input
					class="rangeUI__input"
					v-model.number="cardText.textLine2.fontWidth"
					type="range"
					min="75"
					max="150"
				/>
			</label>

			<label class="rangeUI__label">
				<span
					>Slant: <output :value="cardText.textLine2.fontSlant"></output
				></span>
				<input
					class="rangeUI__input"
					v-model.number="cardText.textLine2.fontSlant"
					type="range"
					min="-10"
					max="0"
				/>
			</label>
		</div>
	</h1>
</template>

<script>
//import { IonRange } from "@ionic/vue";

export default {
	name: "LineB",
	//components: { IonRange },
	data() {
		return {
			cardText: {
				textLine2: {
					playerName: "Casey LeRoy",
					fontWght: 200,
					fontWidth: 100,
					fontSlant: 0,
				},
			},
		};
	},
	computed: {
		cssTextLine2Props() {
			return {
				"--fontwght": this.cardText.textLine2.fontWght,
				"--fontwidth": this.cardText.textLine2.fontWidth,
				"--fontslant": this.cardText.textLine2.fontSlant,
			};
		},
	},
};
</script>

<style lang="scss"></style>
