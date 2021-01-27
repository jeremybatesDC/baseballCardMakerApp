<template>
	<h3 :style="fontAxes" class="cf__h3">
		<input
			class=""
			v-model.trim="words"
			type="text"
			placeholder
			maxlength="48"
			spellcheck="false"
		/>
		<TextSliders
			v-model:fontWght="fontWght"
			v-model:fontWidth="fontWidth"
			v-model:fontSlant="fontSlant"
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
			words: "Dad, Pitcher",
			fontWght: 250,
			fontWidth: 85,
			fontSlant: -5,
		};
	},
	computed: {
		fontAxes() {
			return {
				"--fontwght": this.fontWght,
				"--fontwidth": this.fontWidth,
				"--fontslant": this.fontSlant,
			};
		},
	},
};
</script>
