<template>
	<span
		class="wakawaka wakawaka--textSlidersVuex"
		:style="fontAxes"
		:data-text-line="theLine"
		:data-placeholder="placeholderProp"
	>
		<slot></slot>
		<div data-soi class="soi--textSlider">
			<label class="rangeUI__label">
				<span>Weight: <output :value="localgrad"></output></span>
				<input
					type="range"
					:min="fontGradMin || -1"
					:max="fontGradMax || 1"
					step=".1"
					v-model.number="localgrad"
				/>
				<!-- 	@blur="storeDis(`GRAD`)" -->
			</label>

			<!--<label class="rangeUI__label">
				<span>OLDWeight: <output :value="localwght"></output></span>
				<input
					type="range"
					:min="fontWghtMin || 100"
					:max="fontWghtMax || 900"
					v-model.number="localwght"
				/>
			</label>-->
			<label class="rangeUI__label">
				<span>Width: <output :value="localwdth"></output></span>
				<input
					type="range"
					:min="fontWidthMin || 75"
					:max="fontWidthMax || 150"
					v-model.number="localwdth"
				/>
			</label>
			<label class="rangeUI__label">
				<span>Slant: <output :value="localslnt"></output></span>
				<input type="range" min="-10" max="0" v-model.number="localslnt" />

				<!-- 					@blur="storeDis('slnt')"  -->
			</label>
		</div>
	</span>
</template>

<script>
export default {
	// ATTACH the INPUTS' v-model to a COMPUTED. like thisLine
	data() {
		return {
			localgrad: this.gradProp,
			localwght: this.wghtProp,
			localwdth: this.wdthProp,
			localslnt: this.slantProp,
		};
	},
	props: [
		"whichLine",
		"gradProp",
		"wghtProp",
		"wdthProp",
		"slantProp",
		"fontWghtMin",
		"fontWghtMax",
		"placeholderProp",
	],
	computed: {
		fontAxes() {
			return {
				"--grad": this.localgrad,
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
	&--textSlidersVuex {
		font-variation-settings: "GRAD" var(--grad), "wght" var(--wght),
			"wdth" var(--wdth), "slnt" var(--slnt) !important;

		&:after {
			[data-dirty="false"] & {
				content: attr(data-placeholder);
				display: flex;
				position: absolute;
				top: 50%;
				transform: translateY(-50%);
				width: 100%;
				height: 100%;
				align-items: center;
				pointer-events: none;
				user-select: none;
				z-index: -9;
			}
		}
		//&:focus-within {
		//	&:after {
		//		content: "";
		//	}
		//}
	}
}

.textControlledBySliders {
	font-variation-settings: "GRAD" var(--grad), "wght" var(--wght),
		"wdth" var(--wdth), "slnt" var(--slnt) !important;
}
</style>
