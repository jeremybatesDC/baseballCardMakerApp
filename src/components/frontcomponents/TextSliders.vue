<template>
	<div data-soi class="soi--textSlider">
		<label class="rangeUI__label">
			<span>Weight: <output :value="fontWght"></output></span>
			<input
				type="range"
				min="100"
				max="900"
				:value="fontWght"
				@input="$emit('update:fontWght', $event.target.value)"
			/>
		</label>
		<label class="rangeUI__label">
			<span>Width: <output :value="fontWidth"></output></span>
			<input
				type="range"
				min="75"
				max="150"
				:value="fontWidth"
				@input="$emit('update:fontWidth', $event.target.value)"
			/>
		</label>
		<label class="rangeUI__label">
			<span>Slant: <output :value="fontSlant"></output></span>
			<input
				type="range"
				min="-10"
				max="0"
				:value="fontSlant"
				@input="$emit('update:fontSlant', $event.target.value)"
			/>
		</label>
	</div>
</template>

<script>
export default {
	props: ["fontWght", "fontWidth", "fontSlant"],
	emits: ["update:fontWght", "update:fontWidth", "update:fontSlant"],
	//props: ["fontWght", "fontWidth", "fontSlant"],
};
</script>

<style lang="scss"></style>
