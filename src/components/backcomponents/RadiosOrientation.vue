<template>
	<fieldset class="radioBtns__fieldset">
		<legend class="radioBtns__legend text-left text-vertical">
			Layout
		</legend>
		<div class="radioBtns__wrapper--inner">
			<label class="radioBtns__label">
				<!-- HACKY MANUAL CHECKED -->
				<input
					type="radio"
					checked
					class="radioBtns__input hidden--visually"
					name="backOrient"
					value="horizontal"
					@change="$emit('update:backOrient', $event.target.value)"
				/>
				<span
					><svg width="32" height="32" viewBox="0 0 32 32">
						<use xlink:href="#iconorientationhorz"></use></svg
				></span>
			</label>

			<label class="radioBtns__label">
				<input
					type="radio"
					class="radioBtns__input hidden--visually"
					name="backOrient"
					value="vertical"
					@change="$emit('update:backOrient', $event.target.value)"
				/>
				<span
					><svg width="32" height="32" viewBox="0 0 32 32">
						<use xlink:href="#iconorientationvert"></use></svg
				></span>
			</label>
		</div>
	</fieldset>
</template>

<script>
export default {
	name: "RadiosOrientation",
	//components: {  },
	//data() {
	//	return {
	//
	//	};
	//},
	props: ["backOrient"],
	emits: ["update:backOrient"],
	//computed: {},
};
</script>
