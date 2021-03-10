<template>
	<fieldset class="radioBtns__fieldset">
		<legend class="radioBtns__legend text-left text-vertical">
			Layout
		</legend>
		<div class="radioBtns__wrapper--inner">
			<label class="radioBtns__label">
				<input
					type="radio"
					class="radioBtns__input hidden--visually"
					value="oneone"
					name="frontLayout"
					v-model="layoutFront"
				/>
				<span
					><svg width="32" height="32" viewBox="0 0 32 32">
						<use xlink:href="#iconlayoutoneone"></use></svg
				></span>
			</label>

			<label class="radioBtns__label">
				<input
					type="radio"
					class="radioBtns__input hidden--visually"
					value="zerotwo"
					name="frontLayout"
					v-model="layoutFront"
				/>
				<span
					><svg viewBox="0 0 32 32" width="32" height="32">
						<use xlink:href="#iconlayoutzerotwo"></use></svg
				></span>
			</label>

			<label class="radioBtns__label">
				<input
					type="radio"
					class="radioBtns__input hidden--visually"
					value="twozero"
					name="frontLayout"
					v-model="layoutFront"
				/>
				<span
					><svg viewBox="0 0 32 32" width="32" height="32">
						<use xlink:href="#iconlayouttwozero"></use></svg
				></span>
			</label>
		</div>
	</fieldset>
</template>

<script>
export default {
	computed: {
		layoutFront: {
			get() {
				return this.$store.state.layoutFront;
			},
			set(payload) {
				this.$store.commit("updateLayoutFront", payload);
			},
		},
	},
};
</script>
