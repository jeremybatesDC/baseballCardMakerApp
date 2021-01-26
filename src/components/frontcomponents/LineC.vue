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
		<TextSliders
			v-model:fontWght="cardText.textLine3.fontWght"
			v-model:fontWidth="cardText.textLine3.fontWidth"
			v-model:fontSlant="cardText.textLine3.fontSlant"
			:fontWidthMax="90"
			:fontWghtMin="150"
		></TextSliders>
	</h3>
</template>

<script>
import TextSliders from "./../TextSliders";

export default {
	name: "LineC",
	components: { TextSliders },
	data() {
		return {
			cardText: {
				textLine3: {
					playerPosition: "Dad, Pitcher",
					fontWght: 250,
					fontWidth: 85,
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
