<template>
	<span class="wakawaka" :style="fontAxes">
		<slot></slot>
		<div data-soi class="soi--textSlider">
			<label class="rangeUI__label">
				<span>Weight: <output :value="localAwght"></output></span>
				<input
					type="range"
					:min="fontWghtMin || 100"
					:max="fontWghtMax || 900"
					v-model="localAwght"
					@blur="storeLocalAwght"
				/>
			</label>
			<!--<label class="rangeUI__label">
			<span>Width: <output :value="fontWidth"></output></span>
			<input
				type="range"
				:min="fontWidthMin || 75"
				:max="fontWidthMax || 150"
				:value="fontWidth"
			/>
		</label>
		<label class="rangeUI__label">
			<span>Slant: <output :value="fontSlant"></output></span>
			<input type="range" min="-10" max="0" :value="fontSlant" />
		</label>-->
		</div>
	</span>
</template>

<script>
export default {
	data() {
		return {
			localAwght: 600,
		};
	},
	props: ["fontWghtMin", "fontWghtMax"],
	computed: {
		fontAxes() {
			return {
				"--localAwght": this.localAwght,
				//"--fontwidth": this.fontWidth,
				//"--fontslant": this.fontSlant,
			};
		},
	},
	methods: {
		storeLocalAwght() {
			this.$store.commit("updateAwght", this.localAwght);
		},
	},
};
</script>

<style lang="scss">
.wakawaka {
	display: contents;
}

.cf__h2__input {
	font-variation-settings: "wght" var(--localAwght) !important;
	//	"wdth" var(--fontwidth),"slnt" var(--fontslant) !important;
}
</style>
