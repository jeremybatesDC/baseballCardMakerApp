<template>
	<fieldset class="radioBtns__fieldset radioBtns__fieldset--decadeFilters">
		<legend class="radioBtns__legend radioBtns__legend--decadeFilters">
			Filters
		</legend>
		<div class="radioBtns__wrapper--inner radioBtns__wrapper--decadeFilters">
			<label class="radioBtns__label radioBtns__label--decadeFilters">
				<!-- hacky manual checked -->
				<input
					checked
					type="radio"
					class="radioBtns__input hidden--visually"
					name="playerImageFilterEffect"
					value="noFilterEffect"
					v-model="decade"
				/>
				<span>NONE</span>
			</label>

			<label class="radioBtns__label radioBtns__label--decadeFilters">
				<input
					type="radio"
					class="radioBtns__input hidden--visually"
					name="playerImageFilterEffect"
					value="filter1940s"
					v-model="decade"
				/>
				<span class="decadeFilters__span">1940s</span>
			</label>

			<label class="radioBtns__label radioBtns__label--decadeFilters">
				<input
					type="radio"
					class="radioBtns__input hidden--visually"
					name="playerImageFilterEffect"
					value="filter1950s"
					v-model="decade"
				/>
				<span class="decadeFilters__span">1950s</span>
			</label>

			<label class="radioBtns__label radioBtns__label--decadeFilters">
				<input
					type="radio"
					class="radioBtns__input hidden--visually"
					name="playerImageFilterEffect"
					value="filter1960s"
					v-model="decade"
				/>
				<span class="decadeFilters__span">1960s</span>
			</label>
			<label class="radioBtns__label radioBtns__label--decadeFilters">
				<input
					type="radio"
					class="radioBtns__input hidden--visually"
					name="playerImageFilterEffect"
					value="filter1970s"
					v-model="decade"
				/>
				<span class="decadeFilters__span">1970s</span>
			</label>
		</div>
	</fieldset>
</template>

<script>
export default {
	computed: {
		decade: {
			get() {
				return this.$store.state.decadeFilter;
			},
			set(payload) {
				this.$store.commit("updateDecadeFilter", payload);
			},
		},
	},
};
</script>
