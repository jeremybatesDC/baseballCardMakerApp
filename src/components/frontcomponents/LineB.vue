<template>
	<h1 :style="fontAxes" class="cf__h1">
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
			words: "Casey LeRoy",
			fontWght: 200,
			fontWidth: 100,
			fontSlant: 0,
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
