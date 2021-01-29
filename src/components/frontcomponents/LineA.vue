<template>
	<h2 class="cf__h2" :style="fontAxes">
		<input
			class=""
			v-model.trim="words"
			type="text"
			placeholder
			maxlength="42"
			spellcheck="false"
		/>
		<!-- much less complex than creating reactive obj i think -->
		<TextSliders
			v-model:fontWght="fontWght"
			v-model:fontWidth="fontWidth"
			v-model:fontSlant="fontSlant"
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
			words: "Mudville Madcats",
			fontWght: 600,
			fontWidth: 125,
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
