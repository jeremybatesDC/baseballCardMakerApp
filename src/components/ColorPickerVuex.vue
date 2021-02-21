<template>
<span class="wakawaka" :style="" >
	<label
		class="colorPicker__label colorPicker__label--front colorPicker__label--textOverlap align-self-center"
	>
		<span>Front Color</span>
		<input
			id="colorPickerFront"
			class="colorPicker__input"
			type="color"
			v-model="localcolor"
			@blur="storeDis(localcolor)"
		/>
		<!--@blur="storeDis(localcolor)"-->
	</label>

</template>

<script>
export default {
	// ATTACH the INPUTS' v-model to a COMPUTED. like thisLine
	data() {
		return {
			localcolor: this.colorProp,
		};
	},
	props: ["colorProp"],
	computed: {
	
	},

	// need a way to handle 4 lines, 12 fileds, without exploding this file...
	methods: {
		storeDis(locColor) {
			// const MUTATION NAME SO IT TAKES FRONT OR BACK
			const mutationName = "updateBgColorBack";

			const localFieldName = `local${locColor}`;
			this.$store.commit(mutationName, this[locColor]);
		},
	},
};
</script>

<style lang="scss">


.wakawaka {
	display: contents;
}

</style>
