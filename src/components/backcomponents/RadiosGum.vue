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
					checked
					class="radioBtns__input hidden--visually"
					name="gumradio"
					value="gumShowing"
					@change="$emit('update:gumShowing', $event.target.value)"
				/>
				<span>Show</span>
			</label>

			<label class="radioBtns__label">
				<input
					type="radio"
					class="radioBtns__input hidden--visually"
					name="gumradio"
					value="gumHidden"
					@change="$emit('update:gumShowing', $event.target.value)"
				/>
				<span>Hide</span>
			</label>
		</div>
	</fieldset>
</template>

<script>
export default {
	name: "RadiosGum",
	props: ["gumShowing"],
	emits: ["update:gumShowing"],
	inject: ["gum"],
	mounted() {
		console.log(this.gum);
		console.log(this);
	},
};
</script>
