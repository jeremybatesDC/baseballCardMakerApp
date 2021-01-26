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
		<!-- much less complex than creating reactive obj i think -->
		<TextSliders
			v-model:fontWght="cardText.textLine1.fontWght"
			v-model:fontWidth="cardText.textLine1.fontWidth"
			v-model:fontSlant="cardText.textLine1.fontSlant"
			:fontWghtMin="150"
			:fontWidthMax="150"
		></TextSliders>
	</h2>
</template>

<script>
import TextSliders from "./../TextSliders";

export default {
	name: "LineA",
	components: { TextSliders },
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
