<template>
	<div data-soi class="soi--textSlider">
		<label class="rangeUI__label">
			<span>Weight: <output :value="fontWght"></output></span>
			<ion-range min="100" max="900" v-model.number="fontWght"></ion-range>
		</label>
		<label class="rangeUI__label">
			<span>Width: <output :value="fontWidth"></output></span>
			<ion-range min="75" max="150" v-model.number="fontWidth"></ion-range>
		</label>
		<label class="rangeUI__label">
			<span>Slant: <output :value="fontSlant"></output></span>
			<ion-range min="-10" max="0" v-model.number="fontSlant"></ion-range>
		</label>
	</div>
</template>

<script>
export default {
	props: ["fontWght", "fontWidth", "fontSlant"],
};
</script>

<style lang="scss"></style>
