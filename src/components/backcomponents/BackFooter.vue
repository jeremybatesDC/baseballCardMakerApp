<template>
  <footer class="cb__footer" :style="textLineCProps">
    <span class="footTextWrap">
      <textarea
        class="cb__footer__textarea"
        rows="2"
        spellcheck="false"
        v-model="footerText"
      ></textarea>
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
//import optsBack from "/json/default-settings-back.json";

export default {
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
  min-height: var(--min-touch-target);
  font-variation-settings: "wght" var(--fontwght), "wdth" var(--fontwidth),
    "slnt" var(--fontslant);
  line-height: 0.8;
  padding-top: 0.4rem;
}

.footTextWrap {
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 0.8rem 0 0 0;
}
</style>
