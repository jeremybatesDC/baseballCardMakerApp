<template>
	<fieldset class="step__fieldset">
		<label for="hiddenNumInput" class="step__label"
			>Years: <span>{{ numOfYears }}</span></label
		>
		<div class="step__wrapper--inner">
			<button
				type="button"
				class="step__button"
				:data-u-cant-click-me="numOfYears < 1"
				data-minus-field="numOfYears"
				@click="$emit('update:numOfYears', numOfYears - 1)"
				:disabled="numOfYears < 1"
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
				:data-u-cant-click-me="numOfYears > 4"
				data-add-field="numOfYears"
				@click="$emit('update:numOfYears', numOfYears + 1)"
				:disabled="numOfYears > 4"
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
			Stats: <span>{{ numOfStats }}</span>
		</label>
		<div class="step__wrapper--inner">
			<button
				type="button"
				class="step__button"
				:data-u-cant-click-me="numOfStats < 1"
				data-minus-field="numOfStats"
				@click="$emit('update:numOfStats', numOfStats - 1)"
				:disabled="numOfStats < 1"
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
				:data-u-cant-click-me="numOfStats > 4"
				data-add-field="numOfStats"
				@click="$emit('update:numOfStats', numOfStats + 1)"
				:disabled="numOfStats > 4"
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
	name: "StepperStats",
	props: ["numOfYears", "numOfStats"],
	emits: ["update:numOfYears", "update:numOfStats"],
};
</script>
