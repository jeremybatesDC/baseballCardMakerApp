<template>
	<h3 :style="fontAxes" class="cf__h3">
		<input
			class=""
			v-model.trim.lazy="words"
			type="text"
			placeholder
			maxlength="48"
			spellcheck="false"
		/>
		<TextSliders
			v-model:fontWght.number="fontWght"
			v-model:fontWidth.number="fontWidth"
			v-model:fontSlant.number="fontSlant"
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
		words: {
			get() {
				return this.$store.state.textLineC;
			},
			set(payload) {
				this.$store.commit("updateLineC", payload);
			},
		},
	},
};
</script>
