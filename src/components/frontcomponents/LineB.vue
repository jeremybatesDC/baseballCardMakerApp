<template>
	<h1 :style="fontAxes" class="cf__h1">
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
		words: {
			get() {
				return this.$store.state.textLineB;
			},
			set(payload) {
				this.$store.commit("updateLineB", payload);
			},
		},
	},
};
</script>
