<template>
	<fieldset class="radioBtns__fieldset">
		<legend class="radioBtns__legend text-left text-vertical">
			Gum
		</legend>
		<div class="radioBtns__wrapper--inner">
			<label class="radioBtns__label">
				<!-- hacky checked -->
				<input
					type="radio"
					class="radioBtns__input hidden--visually"
					name="gumradio"
					value="gumShowing"
					v-model="gum"
				/>
				<span>SHOW</span>
			</label>

			<label class="radioBtns__label">
				<input
					type="radio"
					class="radioBtns__input hidden--visually"
					name="gumradio"
					value="gumHidden"
					v-model="gum"
				/>
				<span>HIDE</span>
			</label>
		</div>
	</fieldset>
</template>

<script>
export default {
	computed: {
		gum: {
			get() {
				return this.$store.state.gumShowing;
			},
			set(payload) {
				this.$store.commit("updateGumShowing", payload);
			},
		},
	},
};
</script>
