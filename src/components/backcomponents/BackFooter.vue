<template>
	<footer class="cb__footer" :style="textLineCProps">
		<span class="footTextWrap">
			<div class="row align-center height--100">
				<div class="col">
					<div class="grow-wrap" :data-replicated-value="footerText">
						<textarea
							class="cb__footer__textarea"
							v-model="footerText"
							maxlength="280"
							spellcheck="false"
							@keydown.enter.prevent
							@paste="removeLineBreaks()"
						></textarea>
						<output class="charCounter">{{ 280 - footerText.length }}</output>
					</div>
				</div>
			</div>
		</span>
		<div data-soi class="soi--textSlider" hidden>
			<label class="rangeUI__label">
				<span>Weight: <output :value="textLineC.fontWght"></output></span>

				<input
					class="rangeUI__input"
					v-model.number="textLineC.fontWght"
					type="range"
					min="100"
					max="900"
				/>
			</label>
			<label class="rangeUI__label">
				<span>Width: <output :value="textLineC.fontWidth"></output></span>
				<input
					class="rangeUI__input"
					v-model.number="textLineC.fontWidth"
					type="range"
					min="75"
					max="150"
				/>
			</label>

			<label class="rangeUI__label">
				<span>Slant: <output :value="textLineC.fontSlant"></output></span>
				<input
					class="rangeUI__input"
					v-model.number="textLineC.fontSlant"
					type="range"
					min="-10"
					max="0"
				/>
			</label>
		</div>
	</footer>
</template>

<script>
//import { nextTick } from "vue";
import { removeBreaks } from "./../../globalScripts/removeBreaks.ts";

export default {
	setup() {
		return { removeBreaks };
	},
	data() {
		return {
			footerText:
				"Did you know? Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
			textLineC: {
				fontWght: 200,
				fontWidth: 90,
				fontSlant: -5,
			},
		};
	},
	methods: {
		// might not actually want this to be async
		async removeLineBreaks(event) {
			//this.$nextTick(() => {
			// this triggers a browser permission request
			// console.log(navigator.clipboard.readText());
			//});

			//const clipboardContent = event.clipboardData;
			//console.log(clipboardContent);

			setTimeout(() => {
				let fText = this.footerText;
				fText = fText.replace(/\r/g, "");
				fText = fText.replace(/\n/g, "");
				this.footerText = fText;
			}, 1);
		},
	},
	computed: {
		textLineCProps() {
			return {
				"--fontwght": this.textLineC.fontWght,
				"--fontwidth": this.textLineC.fontWidth,
				"--fontslant": this.textLineC.fontSlant,
			};
		},
	},
};
</script>

<style lang="scss">
.cb__footer {
	display: flex;
	flex-direction: column;
	position: relative;
	font-size: 1.6rem;
	padding: 0 1.6rem;

	&:focus-within {
		[data-soi] {
			visibility: visible;
			top: auto;
			bottom: var(--min-touch-target);
		}
	}
}

.cb__footer__textarea {
	//min-height: var(--min-touch-target);
	line-height: 0.8;
	//padding-top: 0.4rem;
}

.footTextWrap {
	display: flex;
	flex-direction: column;
	position: relative;
	//padding: 0.8rem 0 0 0;
}
</style>
