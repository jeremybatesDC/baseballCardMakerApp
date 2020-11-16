<template>
  <div class="cardBack__wrapper--outermost">
    <div class="cardBack__controls controls--l2">
      <div class="row space-around height--100">
        <fieldset class="radioBtns__fieldset">
          <legend class="radioBtns__legend text-left">Orientation</legend>
          <div class="radioBtns__wrapper--inner">
            <label class="radioBtns__label">
              <input
                type="radio"
                class="radioBtns__input hidden--visually"
                name=""
                v-model="backOrient"
                value="horizontal"
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
                name=""
                v-model="backOrient"
                value="vertical"
              />
              <span
                ><svg width="32" height="32" viewBox="0 0 32 32">
                  <use xlink:href="#iconorientationvert"></use></svg
              ></span>
            </label>
          </div>
        </fieldset>
        <fieldset class="radioBtns__fieldset">
          <legend class="radioBtns__legend text-left">Gum Stain</legend>
          <div class="radioBtns__wrapper--inner">
            <label class="radioBtns__label">
              <input
                type="radio"
                class="radioBtns__input hidden--visually"
                name="gumradio"
                v-model="gumShowing"
                value="gumShowing"
              />
              <span>Show</span>
            </label>

            <label class="radioBtns__label">
              <input
                type="radio"
                class="radioBtns__input hidden--visually"
                name="gumradio"
                v-model="gumShowing"
                value="gumHidden"
              />
              <span>Hide</span>
            </label>
          </div>
        </fieldset>
      </div>
    </div>

    <div class="card-back" :data-card-back-orientation="backOrient">
      <article :data-gum="gumShowing" class="card-back__article">
        <BackHeader />
        <section class="card-back__section">
          <TableStatsManual />
          <AsideFacts />
        </section>
        <BackFooter />
      </article>
    </div>
  </div>
</template>

<script lang="ts">
//import { onMounted } from "vue";

//import { set } from "idb-keyval";
//import TextSlider from "./InputChildComponents/TextSlider.vue";
import TableStatsManual from "./InputChildComponents/TableStatsManual.vue";
import BackHeader from "./InputChildComponents/BackHeader.vue";
import BackFooter from "./InputChildComponents/BackFooter.vue";
import AsideFacts from "./InputChildComponents/AsideFacts.vue";

export default {
  components: {
    //TextSlider,
    TableStatsManual,
    BackHeader,
    BackFooter,
    AsideFacts,
  },
  //setup() {
  //  setFunc();
  // return { setFunc };
  //},
  data() {
    return {
      //optsBack: {
      backOrient: "horizontal",
      backgroundColor: "#9a8b7c",
      gumShowing: "gumShowing",
      // },
    };
  },
};
</script>

<style lang="scss">
// if can keep square stats table, will allow switch between vert and horz

.card-back {
  display: flex;
  position: relative;
  background-color: var(--bgcb);
  flex-basis: 100%;
  width: 100%;

  // i detest top margins but
  margin: 1.6rem auto 3.2rem auto;
  color: var(--calcColorBack);
  filter: drop-shadow(0 1px 0 #000) drop-shadow(0 -1px 0 #000)
    drop-shadow(1px 0 0 #000) drop-shadow(-1px 0 0 #000);

  &__section {
    // if this part is restricted to vert width, then it'll definitely fit on horz
    display: flex;
    flex-grow: 1;
    align-items: stretch;
    flex-direction: row;
    flex-wrap: wrap-reverse;
    padding: 0;
    background: rgba(0, 0, 0, 0.1);
  }
  &__article {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    justify-content: space-between;
    position: relative;

    //background-color: rgba(#9c2c1a, 0.25);
    // using outline here so that it'll just be clipped on small devices automatically
    outline: 1.6rem solid var(--calcColorBack);
    overflow: hidden;
  }
}

[data-card-back-orientation="horizontal"] {
  max-width: 50.4rem;
  height: 36rem;
}
[data-card-back-orientation="vertical"] {
  max-width: 36rem;
  height: 50.4rem;
}

[data-gum="gumShowing"] {
  &:after {
    // svg gum image maybe
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 10rem;
    height: 30rem;
    background-color: var(--calcColorBack);
    opacity: 0.15;
    border-radius: 3px 5px 7px 9px;
    transform: rotate(-33deg) translateX(-8rem) translateY(-4rem);
    //mix-blend-mode: hard-light;
    filter: blur(2px);
    pointer-events: none;
  }
}
</style>
