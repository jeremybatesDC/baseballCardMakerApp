<template>
	<span class="wakawaka" :style="fontAxes" :data-text-line="theLine">
		<slot></slot>
		<div data-soi class="soi--textSlider">
			<label class="rangeUI__label">
				<span>Weight: <output :value="localwght"></output></span>
				<input
					type="range"
					:min="fontWghtMin || 100"
					:max="fontWghtMax || 900"
					v-model.number="localwght"
					@blur="storeDis(`wght`)"
				/>
			</label>
			<label class="rangeUI__label">
				<span>Width: <output :value="localwdth"></output></span>
				<input
					type="range"
					:min="fontWidthMin || 75"
					:max="fontWidthMax || 150"
					v-model.number="localwdth"
					@blur="storeDis(`wdth`)"
				/>
			</label>
			<label class="rangeUI__label">
				<span>Slant: <output :value="localslnt"></output></span>
				<input
					type="range"
					min="-10"
					max="0"
					v-model.number="localslnt"
					@blur="storeDis('slnt')"
				/>
			</label>
		</div>
	</span>
</template>

<script>
export default {
	// ATTACH the INPUTS' v-model to a COMPUTED. like thisLine
	data() {
		return {
			localwght: this.wghtProp,
			localwdth: this.wdthProp,
			localslnt: this.slantProp,
		};
	},
	props: [
		"whichLine",
		"wghtProp",
		"wdthProp",
		"slantProp",
		"fontWghtMin",
		"fontWghtMax",
	],
	computed: {
		fontAxes() {
			return {
				"--wght": this.localwght,
				"--wdth": this.localwdth,
				"--slnt": this.localslnt,
			};
		},
		theLine() {
			return this.whichLine;
		},
	},

	// need a way to handle 4 lines, 12 fileds, without exploding this file...
	methods: {
		storeDis(lineXfieldY) {
			const mutationname = `update${this.theLine}${lineXfieldY}`;
			const localFieldName = `local${lineXfieldY}`;
			this.$store.commit(mutationname, this[localFieldName]);
		},
	},
};
</script>

<style lang="scss">
.wakawaka {
	display: contents;
}

.textControlledBySliders {
	font-variation-settings: "wght" var(--wght), "wdth" var(--wdth),
		"slnt" var(--slnt) !important;
}
</style>
