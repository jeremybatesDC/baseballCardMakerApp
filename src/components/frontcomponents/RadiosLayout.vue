<template>
	<fieldset slot="start" class="radioBtns__fieldset">
		<legend class="radioBtns__legend text-left text-vertical">
			Layout
		</legend>
		<div class="radioBtns__wrapper--inner">
			<!-- CAREFUL OF THIS HACKY MANUAL CHECKED -->
			<label class="radioBtns__label">
				<input
					type="radio"
					checked
					class="radioBtns__input hidden--visually"
					value="oneone"
					name="frontLayout"
					@change="$emit('update:frontLayout', $event.target.value)"
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
					@change="$emit('update:frontLayout', $event.target.value)"
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
					@change="$emit('update:frontLayout', $event.target.value)"
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
	name: "RadiosLayout",
	props: ["frontLayout"],
	emits: ["update:frontLayout"],
};
</script>
