<template>
	<fieldset class="radioBtns__fieldset radioBtns__fieldset--logoPosition">
		<legend class="radioBtns__legend radioBtns__legend--logoPosition">
			Logo
		</legend>
		<div class="radioBtns__wrapper--inner radioBtns__wrapper--logoPosition">
			<label class="radioBtns__label--logoPosition">
				<input
					type="radio"
					class="radioBtns__input hidden--visually"
					v-model="logoPosition"
					value="topLeft"
					aria-label="Top Left"
				/>
				<span>
					<svg
						width="32"
						height="32"
						viewBox="0 0 32 32"
						class="icon__foursquare icon__foursquare--topLeft"
					>
						<use xlink:href="#iconlogotopleft"></use>
					</svg>
				</span>
			</label>

			<label class="radioBtns__label--logoPosition">
				<input
					type="radio"
					class="radioBtns__input hidden--visually"
					v-model="logoPosition"
					value="topRight"
					aria-label="Top Right"
				/>
				<span
					><svg
						width="32"
						height="32"
						viewBox="0 0 32 32"
						class="icon__foursquare icon__foursquare--topRight"
					>
						<use xlink:href="#iconlogotopright"></use>
					</svg>
				</span>
			</label>

			<label class="radioBtns__label--logoPosition">
				<input
					type="radio"
					class="radioBtns__input hidden--visually"
					v-model="logoPosition"
					value="bottomLeft"
					aria-label="Bottom Left"
				/>
				<span
					><svg
						width="32"
						height="32"
						viewBox="0 0 32 32"
						class="icon__foursquare icon__foursquare--bottomLeft"
					>
						<use xlink:href="#iconlogobotleft"></use>
					</svg>
				</span>
			</label>

			<label class="radioBtns__label--logoPosition">
				<input
					type="radio"
					class="radioBtns__input hidden--visually"
					v-model="logoPosition"
					value="bottomRight"
					aria-label="Bottom Right"
				/>
				<span
					><svg
						width="32"
						height="32"
						viewBox="0 0 32 32"
						class="icon__foursquare icon__foursquare--bottomRight"
					>
						<use xlink:href="#iconlogobotright"></use>
					</svg>
				</span>
			</label>

			<label class="radioBtns__label--logoPosition">
				<input
					type="radio"
					class="radioBtns__input hidden--visually"
					v-model="logoPosition"
					value="hideLogo"
					aria-label="Bottom Right"
				/>
				<span> HIDE </span>
			</label>
		</div>
	</fieldset>
</template>

<script>
export default {
	computed: {
		logoPosition: {
			get() {
				return this.$store.state.logoPosition;
			},
			set(payload) {
				this.$store.commit("updateLogoPosition", payload);
			},
		},
	},
};
</script>
