<template>
	<h2 class="cf__h2" :style="fontAxes">
		<input
			class=""
			v-model.trim.lazy="words"
			type="text"
			placeholder
			maxlength="42"
			spellcheck="false"
		/>
		<!-- much less complex than creating reactive obj i think -->
		<TextSliders
			v-model:fontWght.lazy="fontWght"
			v-model:fontWidth.lazy="fontWidth"
			v-model:fontSlant.lazy="fontSlant"
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
			//words: "Mudville Madcats",
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
		words: {
			get() {
				return this.$store.state.kwijibo;
			},
			set(payload) {
				this.$store.commit("update", payload);
				console.log(this.$store.state.kwijibo);
			},
		},
	},
};
</script>
