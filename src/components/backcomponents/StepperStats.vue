<template>
	<fieldset class="step__fieldset">
		<label for="hiddenNumInput" class="step__label"
			>Years: <span>{{ numYears }}</span></label
		>
		<div class="step__wrapper--inner">
			<button
				type="button"
				class="step__button"
				:disabled="numYears < 1"
				@click="decrementYears"
			>
				<svg
					viewBox="0 0 32 32"
					width="12"
					height="12"
					fill="none"
					stroke="currentcolor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="4"
				>
					<use xlink:href="#iconminus"></use>
				</svg>
			</button>

			<button
				type="button"
				class="step__button"
				:disabled="numYears > 4"
				@click="incrementYears"
			>
				<svg
					viewBox="0 0 32 32"
					width="12"
					height="12"
					fill="none"
					stroke="currentcolor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="4"
				>
					<use xlink:href="#iconplus"></use>
				</svg>
			</button>
		</div>
	</fieldset>
	<fieldset class="step__fieldset">
		<label for="hiddenStatsNumInput" class="step__label">
			Stats: <span>{{ numStats }}</span>
		</label>
		<div class="step__wrapper--inner">
			<button
				type="button"
				class="step__button"
				:disabled="numStats < 1"
				@click="decrementStats"
			>
				<svg
					viewBox="0 0 32 32"
					width="12"
					height="12"
					fill="none"
					stroke="currentcolor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="4"
				>
					<use xlink:href="#iconminus"></use>
				</svg>
			</button>

			<button
				type="button"
				class="step__button"
				:disabled="numStats > 4"
				@click="incrementStats"
			>
				<svg
					viewBox="0 0 32 32"
					width="12"
					height="12"
					fill="none"
					stroke="currentcolor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="4"
				>
					<use xlink:href="#iconplus"></use>
				</svg>
			</button>
		</div>
	</fieldset>
</template>

<script>
export default {
	computed: {
		numStats: {
			get() {
				return this.$store.state.numOfStats;
			},
		},
		numYears: {
			get() {
				return this.$store.state.numOfYears;
			},
		},
	},
	methods: {
		decrementYears() {
			this.$store.commit("decrementYears");
		},
		incrementYears() {
			this.$store.commit("incrementYears");
		},
		decrementStats() {
			this.$store.commit("decrementStats");
		},
		incrementStats() {
			this.$store.commit("incrementStats");
		},
	},
};
</script>
