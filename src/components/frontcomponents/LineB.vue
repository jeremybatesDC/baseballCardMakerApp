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
		<TextSliders
			v-model:fontWght="cardText.textLine2.fontWght"
			v-model:fontWidth="cardText.textLine2.fontWidth"
			v-model:fontSlant="cardText.textLine2.fontSlant"
			:fontWghtMin="150"
			:fontWidthMax="125"
		></TextSliders>
	</h1>
</template>

<script>
import TextSliders from "./../TextSliders";

export default {
	name: "LineB",
	components: { TextSliders },
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
