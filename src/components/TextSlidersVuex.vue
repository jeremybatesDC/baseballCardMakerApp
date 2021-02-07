<template>
	<span class="wakawaka" :style="fontAxes" :data-text-line="theLine">
		<slot></slot>
		<div data-soi class="soi--textSlider">
			<label class="rangeUI__label">
				<span>Weight: <output :value="localWght"></output></span>
				<input
					type="range"
					:min="fontWghtMin || 100"
					:max="fontWghtMax || 900"
					v-model="localWght"
					@blur="storeDis(`${theLine}wght`)"
				/>
			</label>
			<label class="rangeUI__label">
				<span>Width: <output :value="localWdth"></output></span>
				<input
					type="range"
					:min="fontWidthMin || 75"
					:max="fontWidthMax || 150"
					v-model="localWdth"
					@blur="storeDis(`${theLine}wdth`)"
				/>
			</label>
			<label class="rangeUI__label">
				<span>Slant: <output :value="localSlant"></output></span>
				<input
					type="range"
					min="-10"
					max="0"
					v-model="localSlant"
					@blur="storeDis(`${theLine}slnt`)"
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
			localWght: this.wghtProp,
			localWdth: this.wdthProp,
			localSlant: this.slantProp,
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
				"--wght": this.localWght,
				"--wdth": this.localWdth,
				"--slnt": this.localSlant,
			};
		},
		theLine() {
			return this.whichLine;
		},
	},

	// need a way to handle 4 lines, 12 fileds, without exploding this file...
	methods: {
		// switch case is kind of poor form these days but i want a clear way to accept a whole bunch or args... Prob an array up top then a loop maybe...
		storeDis(xyz) {
			console.log(xyz);
			const mutationname = `update${xyz}`;
			const localFieldName = `local${xyz}`;
			this.$store.commit(mutationname, this[localFieldName]);
		},
	},
};
</script>

<style lang="scss">
.wakawaka {
	display: contents;
}

.cf__h2__input {
	font-variation-settings: "wght" var(--wght), "wdth" var(--wdth),
		"slnt" var(--slnt) !important;
}
</style>
