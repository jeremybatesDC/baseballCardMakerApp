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
					v-model="layoutBack"
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
					v-model="layoutBack"
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
	computed: {
		layoutBack: {
			get() {
				return this.$store.state.layoutBack;
			},
			set(payload) {
				this.$store.commit("updateLayoutBack", payload);
			},
		},
	},
};
</script>
