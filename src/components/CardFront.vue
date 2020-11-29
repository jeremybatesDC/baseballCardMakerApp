<template>
  <ion-page>
    <ion-header>
      <!--<ion-segment @ionChange="segmentChanged($event)" value="cardfront">
        <ion-segment-button value="cardfront">
          <ion-label>Card Front</ion-label>
        </ion-segment-button>
        <ion-segment-button value="cardback">
          <ion-label>Card Back</ion-label>
        </ion-segment-button>
      </ion-segment>-->

      <ion-toolbar color="primary">
        <div class="tabsGood">
          <div role="tablist" aria-label="Card Side">
            <button
              role="tab"
              aria-selected="true"
              aria-controls="panelCardFront"
              id="triggerFront"
              aria-label="Front"
              @click="chngTbz"
            >
              Card Front
            </button>
            <span class="showOnlyForSelectedTab">
              <label
                class="colorPicker__label colorPicker__label--front colorPicker__label--textOverlap align-self-center"
              >
                <span>Front Color</span>
                <input class="colorPicker__input" type="color" v-model="bgcf" />
              </label>
              <label
                for="playerPic"
                class="filePicker__label filePicker__label--addPic"
                aria-label="Upload Image"
              >
                <svg
                  viewBox="0 0 32 32"
                  width="32"
                  height="32"
                  fill="none"
                  stroke="currentcolor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                >
                  <use xlink:href="#iconportraitadd"></use>
                </svg>
                <span> Add<br />Pic</span>
              </label>
              <label
                for="logoPic"
                class="filePicker__label filePicker__label--addLogo"
                aria-label="Upload Logo Image"
              >
                <svg
                  viewBox="0 0 32 32"
                  width="32"
                  height="32"
                  fill="none"
                  stroke="currentcolor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                >
                  <use xlink:href="#iconlogoadd"></use>
                </svg>
                <span>Add<br />Logo</span>
              </label>
            </span>
            <button
              role="tab"
              aria-selected="false"
              aria-controls="panelCardBack"
              id="triggerBack"
              aria-label="Back"
              @click="chngTbz"
            >
              Card Back
            </button>
            <span class="showOnlyForSelectedTab">
              <fieldset class="step__fieldset">
                <label for="hiddenNumInput" class="step__label"
                  >Years: <span>{{ numOfYears }}</span></label
                >
                <div class="step__wrapper--inner">
                  <button
                    type="button"
                    class="step__button"
                    :data-u-cant-click-me="numOfYears < 1"
                    data-minus-field="numOfYears"
                    @click="minus1year"
                  >
                    <svg
                      viewBox="0 0 32 32"
                      width="12"
                      height="12"
                      fill="none"
                      stroke="currentcolor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="4"
                    >
                      <use xlink:href="#iconminus"></use>
                    </svg>
                  </button>
                  <input
                    id="hiddenYearsNumInput"
                    type="number"
                    class="hidden--visually"
                    min="0"
                    max="5"
                  />
                  <!--<output class="step__output">{{ numOfYears }}</output>-->
                  <button
                    type="button"
                    class="step__button"
                    :data-u-cant-click-me="numOfYears > 4"
                    data-add-field="numOfYears"
                    @click="add1year"
                  >
                    <svg
                      viewBox="0 0 32 32"
                      width="12"
                      height="12"
                      fill="none"
                      stroke="currentcolor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="4"
                    >
                      <use xlink:href="#iconplus"></use>
                    </svg>
                  </button>
                </div>
              </fieldset>
              <fieldset class="step__fieldset">
                <label for="hiddenStatsNumInput" class="step__label">
                  Stats: <span>{{ numOfStats }}</span>
                </label>
                <div class="step__wrapper--inner">
                  <button
                    type="button"
                    class="step__button"
                    :data-u-cant-click-me="numOfStats < 1"
                    data-minus-field="numOfStats"
                    @click="minus1stat"
                  >
                    <svg
                      viewBox="0 0 32 32"
                      width="12"
                      height="12"
                      fill="none"
                      stroke="currentcolor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="4"
                    >
                      <use xlink:href="#iconminus"></use>
                    </svg>
                  </button>
                  <input
                    id="hiddenStatsNumInput"
                    type="number"
                    class="hidden--visually"
                    min="0"
                    max="5"
                  />
                  <!--<output class="step__output"></output>-->

                  <button
                    type="button"
                    class="step__button"
                    :data-u-cant-click-me="numOfStats > 4"
                    data-add-field="numOfStats"
                    @click="add1stat"
                  >
                    <svg
                      viewBox="0 0 32 32"
                      width="12"
                      height="12"
                      fill="none"
                      stroke="currentcolor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="4"
                    >
                      <use xlink:href="#iconplus"></use>
                    </svg>
                  </button>
                </div>
              </fieldset>
              <label
                class="colorPicker__label colorPicker__label--back colorPicker__label--textOverlap"
              >
                <span>Back Color</span>
                <input
                  class="colorPicker__input"
                  type="color"
                  v-model="bgcb"
                /> </label
            ></span>
          </div>
        </div>
        <div class="row">
          <fieldset slot="start" class="radioBtns__fieldset">
            <legend class="radioBtns__legend text-left">Layout</legend>
            <div class="radioBtns__wrapper--inner">
              <label class="radioBtns__label">
                <input
                  type="radio"
                  class="radioBtns__input hidden--visually"
                  v-model="cardDesign.cardLayout"
                  value="one-one"
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
                  v-model="cardDesign.cardLayout"
                  value="zero-two"
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
                  v-model="cardDesign.cardLayout"
                  value="two-zero"
                />
                <span
                  ><svg viewBox="0 0 32 32" width="32" height="32">
                    <use xlink:href="#iconlayouttwozero"></use></svg
                ></span>
              </label>
            </div>
          </fieldset>
          <label slot="start" class="rangeUI__label">
            <span>Border Curve </span>
            <ion-range
              min="0"
              max="24"
              v-model.number="cardDesign.borderInnerCurve"
            ></ion-range>
          </label>
        </div>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div id="panelCardFront" role="tabpanel" aria-labelledby="triggerFront">
        <!--<CardFront />-->
        front stuff
      </div>
      <div
        id="panelCardBack"
        role="tabpanel"
        aria-labelledby="triggerBack"
        hidden
      >
        <!--<CardBack :data-years="numOfYears" :data-stats="numOfStats" />-->
        Back stuff
      </div>

      <div
        class="cardFront__wrapper--outermost"
        :style="[cssCardDesignProps, cssLogoProps, cssBorderInnerProps]"
      >
        <div
          class="card__container--front"
          :class="[cardDesign.cardLayout, cardDesign.playerImageBleedOrBoxed]"
        >
          <div class="text__line--first row">
            <h2 class="cf__h2" :style="cssTextLine1Props">
              <ion-input
                class=""
                v-model.trim="cardText.textLine1.teamName"
                type="text"
                placeholder
                maxlength="42"
                spellcheck="false"
              ></ion-input>

              <!-- hidden -->
              <div data-soi class="soi--textSlider">
                <label class="rangeUI__label">
                  <span
                    >Weight:
                    <output :value="cardText.textLine1.fontWght"></output
                  ></span>
                  <ion-range
                    min="100"
                    max="900"
                    v-model.number="cardText.textLine1.fontWght"
                  ></ion-range>
                </label>
                <label class="rangeUI__label">
                  <span
                    >Width:
                    <output :value="cardText.textLine1.fontWidth"></output
                  ></span>
                  <ion-range
                    min="75"
                    max="150"
                    v-model.number="cardText.textLine1.fontWidth"
                  ></ion-range>
                </label>
                <label class="rangeUI__label">
                  <span
                    >Slant:
                    <output :value="cardText.textLine1.fontSlant"></output
                  ></span>
                  <ion-range
                    min="-10"
                    max="0"
                    v-model.number="cardText.textLine1.fontSlant"
                  ></ion-range>
                </label>
              </div>
            </h2>
          </div>

          <div
            :class="
              `row--middle--forDesign row ${cardDesign.logoPosition} ${cardDesign.playerImageFilterEffect}`
            "
          >
            <figure class="figure--player">
              <label class="figure--player__label" for="inputTriggerFocusUI_0">
                <canvas id="canvasPlayer" class="image--player"></canvas>
                <img
                  width="328"
                  height="416"
                  loading="lazy"
                  class="image--player imagePlaceholder"
                  :src="images.playerPic"
                  alt="This default player looks great!"
                />
              </label>
            </figure>

            <!-- make rounded corner optional -->
            <!-- using css filter drop shadow could work -->
            <figure
              class="figure--logo"
              v-show="cardDesign.logoPosition !== 'hideLogo'"
            >
              <canvas id="canvasLogo" class="image--logo"> </canvas>
              <img
                loading="lazy"
                class="image--logo imagePlaceholder"
                :src="images.logoPic"
                alt="This default logo looks terrific!"
              />
            </figure>
          </div>

          <div class="text__line--second row">
            <h1 :style="cssTextLine2Props" class="cf__h1">
              <input
                class=""
                v-model.trim="cardText.textLine2.playerName"
                type="text"
                placeholder
                maxlength="48"
                spellcheck="false"
              />
              <div data-soi class="soi--textSlider" hidden>
                <label class="rangeUI__label">
                  <span
                    >Weight:
                    <output :value="cardText.textLine2.fontWght"></output
                  ></span>

                  <input
                    class="rangeUI__input"
                    v-model.number="cardText.textLine2.fontWght"
                    type="range"
                    min="100"
                    max="900"
                  />
                </label>
                <label class="rangeUI__label">
                  <span
                    >Width:
                    <output :value="cardText.textLine2.fontWidth"></output
                  ></span>
                  <input
                    class="rangeUI__input"
                    v-model.number="cardText.textLine2.fontWidth"
                    type="range"
                    min="75"
                    max="150"
                  />
                </label>

                <label class="rangeUI__label">
                  <span
                    >Slant:
                    <output :value="cardText.textLine2.fontSlant"></output
                  ></span>
                  <input
                    class="rangeUI__input"
                    v-model.number="cardText.textLine2.fontSlant"
                    type="range"
                    min="-10"
                    max="0"
                  />
                </label>
              </div>
            </h1>
            <h3 :style="cssTextPlayerPositionProps" class="cf__h3">
              <input
                class=""
                v-model.trim="cardText.textPlayerPosition.playerPosition"
                type="text"
                placeholder
                maxlength="48"
                spellcheck="false"
              />
              <div data-soi class="soi--textSlider" hidden>
                <label class="rangeUI__label">
                  <span
                    >Weight:
                    <output
                      :value="cardText.textPlayerPosition.fontWght"
                    ></output
                  ></span>

                  <input
                    class="rangeUI__input"
                    v-model.number="cardText.textPlayerPosition.fontWght"
                    type="range"
                    min="100"
                    max="900"
                  />
                </label>
                <label class="rangeUI__label">
                  <span
                    >Width:
                    <output
                      :value="cardText.textPlayerPosition.fontWidth"
                    ></output
                  ></span>
                  <input
                    class="rangeUI__input"
                    v-model.number="cardText.textPlayerPosition.fontWidth"
                    type="range"
                    min="75"
                    max="150"
                  />
                </label>

                <label class="rangeUI__label">
                  <span
                    >Slant:
                    <output
                      :value="cardText.textPlayerPosition.fontSlant"
                    ></output
                  ></span>
                  <input
                    class="rangeUI__input"
                    v-model.number="cardText.textPlayerPosition.fontSlant"
                    type="range"
                    min="-10"
                    max="0"
                  />
                </label>
              </div>
            </h3>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonInput,
  IonPage,
  IonRange,
  IonToolbar,
  IonContent,
  //IonSegmentButton,
} from "@ionic/vue";

export default {
  name: "CardFront",
  components: {
    IonInput,
    IonRange,
    IonToolbar,
    IonContent,
    IonPage,
    //IonSegmentButton,
  },
  data() {
    return {
      images: {
        playerPic: "/assets/images/leroy.jpg",
        logoPic: "/assets/images/logo.svg",
      },
      cardDesign: {
        playerImageBleedOrBoxed: "relative",
        bgcf: "#ffffff",
        cardLayout: "one-one",
        cardBrightness: 1,
        cardSepia: 0,
        cardGrayScale: 0,
        playerImageFilterEffect: "noFilterEffect",
        borderInnerCurve: 0,
        borderInnerWidth: 3,
        logoPosition: "bottomRight",

        logo: {
          position: "bottomRight",
        },
      },
      cardText: {
        textLine1: {
          teamName: "Mudville Madcats",
          fontWght: 600,
          fontWidth: 125,
          fontSlant: 0,
        },
        textLine2: {
          playerName: "Leroy Casey",
          fontWght: 200,
          fontWidth: 100,
          fontSlant: 0,
        },
        textPlayerPosition: {
          playerPosition: "Dad, Pitcher",
          fontWght: 200,
          fontWidth: 100,
          fontSlant: -5,
        },
      },
    };
  },
  methods: {
    segmentChanged(ev) {
      console.log("Segment changed", ev);
    },
    chngTbz(e) {
      document.body
        .querySelector('[aria-selected="true"]')
        .setAttribute("aria-selected", false);
      e.target.setAttribute("aria-selected", true);
      document.body
        .querySelector('[role="tabpanel"]:not([hidden])')
        .setAttribute("hidden", true);
      document
        .getElementById(e.target.getAttribute("aria-controls"))
        .removeAttribute("hidden");
    },
    add1year(e) {
      if (this.numOfYears < this.maxYears) {
        return (this.numOfYears += 1);
      }
    },
    minus1year(e) {
      if (this.numOfYears > this.minYears) {
        return (this.numOfYears -= 1);
      }
    },
    add1stat(e) {
      if (this.numOfStats < this.maxStats) {
        return (this.numOfStats += 1);
      }
    },
    minus1stat(e) {
      if (this.numOfStats > this.minStats) {
        return (this.numOfStats -= 1);
      }
    },
  },
  computed: {
    cssTextLine1Props() {
      return {
        "--fontwght": this.cardText.textLine1.fontWght,
        "--fontwidth": this.cardText.textLine1.fontWidth,
        "--fontslant": this.cardText.textLine1.fontSlant,
      };
    },
  },
};
</script>

<style lang="scss">
.card__container--front {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 32.8rem;
  //yes, hard height here because
  height: 50.4rem;
  margin: 0 auto;
  //padding: 0 1.6rem;
  color: var(--calcColorFront, #000);
  background-color: var(--bgcf, #fefefe);
  box-shadow: -1.6rem 0 var(--bgcf, #fefefe), 1.6rem 0 var(--bgcf, #fefefe);
  //border: 1px solid rgba(0, 0, 0, 0.3333);
  // may need this again...
  //overflow: hidden;
  z-index: 0;
}

.cardFront__controls {
  position: relative;

  .filePicker__label {
    flex-grow: 0;
    width: var(--min-touch-target);
    height: var(--min-touch-target);
  }
  // i donT like this but...
  .rangeUI__label {
    margin-left: 1.6rem;
  }
}

.playerImage__controls {
  height: 100%;
}

.one-one {
  justify-content: space-between;
  input {
    &[type="text"] {
      height: var(--min-touch-target);
    }
  }
  .row--middle--forDesign {
    order: 0;
  }
  .text__line--first {
    [data-soi] {
      top: var(--min-touch-target);
      bottom: auto;
    }
  }

  .text__line--second {
    [data-soi] {
      top: auto;
      bottom: var(--min-touch-target);
    }
  }
}
.zero-two {
  justify-content: flex-end;
  padding-top: 1.6rem;
  padding-bottom: 0;
  input {
    &[type="text"] {
      height: 2.4rem;
    }
  }
  .row--middle--forDesign {
    order: -1;
  }

  .text__line--first {
    padding-top: 0.8rem;
    [data-soi] {
      top: auto;
      bottom: 6.4rem;
    }
  }
  .text__line--second {
    padding-bottom: 0.8rem;
    [data-soi] {
      top: auto;
      bottom: 6.4rem;
    }
  }
}
.two-zero {
  justify-content: flex-start;
  padding-top: 0;
  padding-bottom: 1.6rem;
  input {
    &[type="text"] {
      height: 2.4rem;
    }
  }
  .row--middle--forDesign {
    order: 1;
  }

  .text__line--first {
    padding-top: 0.8rem;
    [data-soi] {
      top: 6.4rem;
      bottom: auto;
    }
  }
  .text__line--second {
    padding-bottom: 0.8rem;
    [data-soi] {
      top: 6.4rem;
      bottom: auto;
    }
  }
}

.row--middle--forDesign {
  display: flex;
  //position: var(--playerimagebleedorboxed);
  position: relative;
  flex-grow: 1;
  border-width: var(--borderinnerwidth);
  border-style: solid;
  border-color: var(--calcColorFront);
  border-radius: var(--borderinnercurve);

  &.topLeft {
    justify-content: flex-start;
    align-items: flex-start;
  }
  &.topRight {
    justify-content: flex-end;

    align-items: flex-start;
  }
  &.bottomLeft {
    justify-content: flex-start;
    align-items: flex-end;
  }
  &.bottomRight {
    justify-content: flex-end;
    align-items: flex-end;
  }
}

.text__line--second {
  justify-content: space-between;
  align-items: center;
  .cf__h1 {
    width: 66.6666%;
  }
  .cf__h3 {
    width: 33.3333%;
  }
}

.cf__h1,
.cf__h2,
.cf__h3 {
  display: flex;
  input {
    &[type="text"] {
      display: flex;
      min-width: 0;
      font-variation-settings: "wght" var(--fontwght), "wdth" var(--fontwidth),
        "slnt" var(--fontslant);
      padding: 0;
    }
  }

  &:focus-within {
    [data-soi] {
      visibility: visible;
    }
  }
}

.cf__h1 {
  font-size: 2.2rem;
}
.cf__h2 {
  font-size: 1.8rem;
  display: flex;
  flex-grow: 1;
}

.cf__h3 {
  font-size: 1.6rem;
  text-align: right;
  input {
    text-align: right;
  }
}

.figure--player {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  border-radius: calc(var(--borderinnercurve) - var(--borderinnerwidth));
  overflow: hidden;
  //.static & {
  //  border-radius: 0;
  //  z-index: -1;
  //}
}
.figure--player__label {
  flex-grow: 1;
  position: relative;
  overflow: hidden;
}

.image--player {
  object-fit: cover;
  object-position: center;
  border-radius: calc(var(--borderinnercurve) - var(--borderinnerwidth));
  -webkit-tap-highlight-color: transparent;

  &:not(.imagePlaceholder) {
    max-width: 100%;
    min-height: 100%;
  }
}

.playerImage__fieldset {
  flex-grow: 1;
}

.figure--logo {
  position: absolute;
  pointer-events: none;
  width: 7.2rem;
  height: 7.2rem;
}

.image--logo {
  // background-image isn't going to work considering i wonT take away form user ability to have transparent logo image.
  width: 7.2rem;
  height: 7.2rem;
  object-fit: cover;
  object-position: center;
  border-radius: var(--logoborderradius);
  -webkit-tap-highlight-color: transparent;

  .topLeft & {
    transform: translate(
      calc(var(--borderinnercurve) / -3.5),
      calc(var(--borderinnercurve) / -3.5)
    );
  }
  .topRight & {
    transform: translate(
      calc(var(--borderinnercurve) / 3.5),
      calc(var(--borderinnercurve) / -3.5)
    );
  }
  .bottomLeft & {
    transform: translate(
      calc(var(--borderinnercurve) / -3.5),
      calc(var(--borderinnercurve) / 3.5)
    );
  }
  .bottomRight & {
    transform: translate(
      calc(var(--borderinnercurve) / 3.5),
      calc(var(--borderinnercurve) / 3.5)
    );
  }
}

.imagePlaceholder {
  position: absolute;
  top: 0;
  left: 0;
  //width: 100%;
  //height: 100%;
  object-fit: cover;

  &.image--logo {
    box-shadow: inset 0 0 0 1.6rem var(--calcColorFront);
  }
}

[role="tablist"] {
  display: flex;
  justify-content: space-between;
  background-color: royalblue;
}

[role="tab"] {
  font-size: 2rem;
  line-height: 0.8;
  font-variation-settings: var(--text-big-bold);
  display: flex;

  //flex-grow: 1;

  align-items: center;
  justify-content: center;
  width: var(--touch-target-large);
  height: var(--touch-target-large);
  padding: 0;
  text-transform: uppercase;
  // in case ever have more than just 2 tabs
  &:not(:first-child) {
    //box-shadow: -1px 0 #000;
    order: 99;
  }
  &[aria-selected="true"] {
    background: royalblue;
    color: #fff;
    pointer-events: none;
  }
  &[aria-selected="false"] {
    background: var(--grey-for-controls);
    //color: #fff;
    //pointer-events: none;
  }
}

.showOnlyForSelectedTab {
  display: none;
  align-items: center;
  //flex-shrink: 0;
  // after flex-grow 1 OR width 100% here, there is some gap thatS letting a tap click through and zoom on iOS... grrr
  //flex-grow: 1;
  //width: 100%;
  background-color: royalblue;
  [aria-selected="true"] + & {
    display: flex;
  }
  &:last-of-type {
    justify-content: flex-end;
  }
}
</style>
