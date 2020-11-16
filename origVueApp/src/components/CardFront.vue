<template>
  <div
    class="cardFront__wrapper--outermost"
    :style="[cssCardDesignProps, cssLogoProps, cssBorderInnerProps]"
  >
    <div class="cardFront__controls controls--l2">
      <div class="row space-around height--100">
        <fieldset class="radioBtns__fieldset">
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

        <label class="rangeUI__label">
          <span
            >Border Curve
            <!-- : <output :value="""></output> -->
          </span>

          <input
            class="rangeUI__input"
            v-model.number="cardDesign.borderInnerCurve"
            type="range"
            min="0"
            max="24"
          />
        </label>
      </div>
    </div>
    <!-- end controls-->
    <div
      class="card__container--front"
      :class="[cardDesign.cardLayout, cardDesign.playerImageBleedOrBoxed]"
    >
      <!--<svg width="360" height="504">
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          filter="url(#roughpaper)"
          fill="none"
        ></rect>
      </svg>-->
      <div class="text__line--first row">
        <h2 :style="cssTextLine1Props" class="cf__h2">
          <input
            class=""
            v-model.trim="cardText.textLine1.teamName"
            type="text"
            placeholder
            maxlength="42"
            spellcheck="false"
          />

          <div data-soi class="soi--textSlider" hidden>
            <label class="rangeUI__label">
              <span
                >Weight: <output :value="cardText.textLine1.fontWght"></output
              ></span>

              <input
                class="rangeUI__input"
                v-model.number="cardText.textLine1.fontWght"
                type="range"
                min="100"
                max="900"
              />
            </label>
            <label class="rangeUI__label">
              <span
                >Width: <output :value="cardText.textLine1.fontWidth"></output
              ></span>
              <input
                class="rangeUI__input"
                v-model.number="cardText.textLine1.fontWidth"
                type="range"
                min="75"
                max="150"
              />
            </label>

            <label class="rangeUI__label">
              <span
                >Slant: <output :value="cardText.textLine1.fontSlant"></output
              ></span>
              <input
                class="rangeUI__input"
                v-model.number="cardText.textLine1.fontSlant"
                type="range"
                min="-10"
                max="0"
              />
            </label>
          </div>
        </h2>
      </div>
      <div
        :class="`row--middle--forDesign row ${cardDesign.logoPosition} ${cardDesign.playerImageFilterEffect}`"
      >
        <figure class="figure--player">
          <label class="figure--player__label" for="inputTriggerFocusUI_0">
            <!--  width="320"  height="408"-->
            <canvas id="canvasPlayer" class="image--player"></canvas>
            <img
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
                >Weight: <output :value="cardText.textLine2.fontWght"></output
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
                >Width: <output :value="cardText.textLine2.fontWidth"></output
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
                >Slant: <output :value="cardText.textLine2.fontSlant"></output
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
                <output :value="cardText.textPlayerPosition.fontWght"></output
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
                <output :value="cardText.textPlayerPosition.fontWidth"></output
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
                <output :value="cardText.textPlayerPosition.fontSlant"></output
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
      <input
        id="inputTriggerFocusUI_0"
        class="checkbox--forReveal hidden--visually"
        type="checkbox"
      />

      <!-- QuasiModal (heh)-->
      <div class="playerImage__controls" data-soi>
        <div class="col">
          <div class="row row--full-width">
            <input
              id="playerPic"
              ref="playerPic"
              name="playerPic"
              data-which-canvas="canvasPlayer"
              data-canvas-width="640"
              class="hidden--visually filePicker__input"
              type="file"
              accept="image/*"
              @input="encodeImage"
            />

            <input
              id="logoPic"
              ref="logoPic"
              name="logoPic"
              data-which-canvas="canvasLogo"
              data-canvas-width="144"
              class="hidden--visually filePicker__input"
              type="file"
              accept="image/*"
              @input="encodeImage"
            />
          </div>
          <div class="row space-between row--full-width">
            <fieldset class="radioBtns__fieldset">
              <legend class="radioBtns__legend">Filters</legend>
              <div class="radioBtns__wrapper--inner">
                <label class="radioBtns__label">
                  <input
                    type="radio"
                    class="radioBtns__input hidden--visually"
                    v-model="cardDesign.playerImageFilterEffect"
                    value="noFilterEffect"
                  />
                  <span>None</span>
                </label>

                <label class="radioBtns__label">
                  <input
                    type="radio"
                    class="radioBtns__input hidden--visually"
                    v-model="cardDesign.playerImageFilterEffect"
                    value="filterbw"
                  />
                  <span>B&amp;W</span>
                </label>

                <label class="radioBtns__label">
                  <input
                    type="radio"
                    class="radioBtns__input hidden--visually"
                    v-model="cardDesign.playerImageFilterEffect"
                    value="filtersepia"
                  />
                  <span>Sepia</span>
                </label>

                <label class="radioBtns__label">
                  <input
                    type="radio"
                    class="radioBtns__input hidden--visually"
                    v-model="cardDesign.playerImageFilterEffect"
                    value="filtervintage"
                  />
                  <span>1920</span>
                </label>
                <label class="radioBtns__label">
                  <input
                    type="radio"
                    class="radioBtns__input hidden--visually"
                    v-model="cardDesign.playerImageFilterEffect"
                    value="filterfaded"
                  />
                  <span>Faded</span>
                </label>
              </div>
            </fieldset>

            <fieldset class="radioBtns__fieldset">
              <legend class="radioBtns__legend">Logo</legend>
              <div class="radioBtns__wrapper--inner">
                <label class="radioBtns__label">
                  <input
                    type="radio"
                    class="radioBtns__input hidden--visually"
                    v-model="cardDesign.logoPosition"
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

                <label class="radioBtns__label">
                  <input
                    type="radio"
                    class="radioBtns__input hidden--visually"
                    v-model="cardDesign.logoPosition"
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

                <label class="radioBtns__label">
                  <input
                    type="radio"
                    class="radioBtns__input hidden--visually"
                    v-model="cardDesign.logoPosition"
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

                <label class="radioBtns__label">
                  <input
                    type="radio"
                    class="radioBtns__input hidden--visually"
                    v-model="cardDesign.logoPosition"
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

                <label class="radioBtns__label">
                  <input
                    type="radio"
                    class="radioBtns__input hidden--visually"
                    v-model="cardDesign.logoPosition"
                    value="hideLogo"
                    aria-label="Bottom Right"
                  />
                  <span> HIDE </span>
                </label>
              </div>
            </fieldset>
          </div>
          <label
            for="inputTriggerFocusUI_0"
            class="omniClose__label omniClose__label--inside"
          ></label>
        </div>
      </div>
      <!-- end QuasiModal-->
      <label
        class="omniClose__label omniClose__label--outside"
        for="inputTriggerFocusUI_0"
      ></label>
    </div>

    <!-- end card -->
  </div>
</template>

<script>
//import opts from "/json/default-settings.json";
//import TextSlider from "./TextSlider.vue";

// remember to try inline worker
//const webWorkerEncode = new Worker("./workers/web-worker-encode.js", {
//  type: "module",
//});

//import { onMounted, onUpdated } from "vue";

const webWorkerIDB = new Worker("./workers/web-worker-idb.js", {
  type: "module",
});

// needs context -- how does a function called in a life-cycle hook within setup acces the data?
async function setFunc() {}

async function loadInitalPlaceHolderImages() {
  console.log(
    "ok how load inital images? I can solve this cleanly. I guess just draw a canvas right? I can draw it on setup."
  );
}

export default {
  //setup() {
  //
  //},
  data() {
    return {
      images: {
        playerPic: "/images/LeroyColorGood.webp",
        logoPic: "/images/logo.svg",
      },
      cardDesign: {
        playerImageBleedOrBoxed: "relative",
        cardBackgroundColor: "#ffffff",
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
  computed: {
    cssCardDesignProps() {
      return {
        "--cardbackgroundcolor": this.cardDesign.cardBackgroundColor,
        "--cardsepia": `${this.cardDesign.cardSepia}%`,
        "--cardbrightness": this.cardDesign.cardBrightness,
        "--cardgrayscale": `${this.cardDesign.cardGrayScale}%`,
        "--cardlayout": this.cardDesign.cardLayout,
        "--playerimagebleedorboxed": this.cardDesign.playerImageBleedOrBoxed,
      };
    },
    cssTextLine1Props() {
      return {
        "--fontwght": this.cardText.textLine1.fontWght,
        "--fontwidth": this.cardText.textLine1.fontWidth,
        "--fontslant": this.cardText.textLine1.fontSlant,
      };
    },
    cssTextLine2Props() {
      return {
        "--fontwght": this.cardText.textLine2.fontWght,
        "--fontwidth": this.cardText.textLine2.fontWidth,
        "--fontslant": this.cardText.textLine2.fontSlant,
      };
    },
    cssTextPlayerPositionProps() {
      return {
        "--fontwght": this.cardText.textPlayerPosition.fontWght,
        "--fontwidth": this.cardText.textPlayerPosition.fontWidth,
        "--fontslant": this.cardText.textPlayerPosition.fontSlant,
      };
    },
    cssLogoProps() {
      return {
        "--logoposition": this.cardDesign.logoPosition,
      };
    },
    cssBorderInnerProps() {
      return {
        "--borderinnercurve": `${this.cardDesign.borderInnerCurve}px`,
        "--borderinnerwidth": `${this.cardDesign.borderInnerWidth}px`,
      };
    },
  },
  methods: {
    async encodeImage(event) {
      // maybe i should be using refs maybe here not IDs
      const input = event.target;
      const targetCanvas = document.getElementById(input.dataset.whichCanvas);
      const ctx = targetCanvas.getContext("2d");
      const reader = new FileReader();
      const image = new Image();
      const userFile = input.files[0];
      // need print resolution, and 2x really seems to address quality issues
      // can i use optional chaining // nullish coalscing or whatever i mean to say here?
      if (input.files && userFile) {
        reader.readAsDataURL(userFile);
      }
      reader.onload = async (event) => {
        image.src = event.target.result;
      };
      image.onload = async (event) => {
        const oc = document.createElement("canvas");
        const octx = oc.getContext("2d");
        targetCanvas.width = input.dataset.canvasWidth;
        targetCanvas.height = targetCanvas.width * (image.height / image.width);
        oc.width = targetCanvas.width;
        oc.height = targetCanvas.height;
        octx.drawImage(image, 0, 0, oc.width, oc.height);
        ctx.drawImage(oc, 0, 0, oc.width, oc.height, 0, 0, oc.width, oc.height);

        // refactor
        targetCanvas.nextElementSibling.setAttribute("hidden", "true");
      };
    },

    saveDataLocally(whatToSave) {
      // should this just set, as opposed to sending to worker to
      // can i destructure? stringfiy? Spelling this out a 3rd time seems crazy to me
      webWorkerIDB.postMessage({
        cardText: {
          textLine1: {
            fontWght: this.cardText.textLine1.fontWght,
            fontWidth: this.cardText.textLine1.fontWidth,
            fontSlant: this.cardText.textLine1.fontSlant,
          },
        },
      });
      webWorkerIDB.onmessage = (event) => {
        console.log("received message is: ", event.data);
      };
    },
    //legacyEncode(){
    //      validateImage();

    //        webWorkerEncode.postMessage(usrfile);
    //        this.$emit("input", usrfile);
    //        webWorkerEncode.onmessage = (theMessage) => {
    //          insertImgFunc(theMessage.data, theField);
    //        };
    //}
  },

  created() {
    // might not even want to use watch for desired data flow -- still learning/thinking

    this.$watch(
      "cardText",
      () => {
        console.log("cardTextWatchHandler");
      },
      {
        deep: true,
      }
    );
    this.$watch(
      "cardDesign",
      () => {
        console.log("hey");
      },
      {
        deep: true,
      }
    );
    this.$watch(
      "images",
      () => {
        this.saveDataLocally(this.$data);
      },
      {
        deep: true,
      }
    );
  },
  mounted() {
    // need a ref
    // this.encodeImage(HMMMM);
    console.log(
      "here i want to encode images currently in model... at present am only doing that via clik input handlers, which then need event targets yo see where Im going with this"
    );
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
  color: var(--calcColorFront);
  background-color: var(--bgcf);
  box-shadow: -1.6rem 0 var(--bgcf), 1.6rem 0 var(--bgcf);
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
  position: var(--playerimagebleedorboxed);
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
  input {
    &[type="text"] {
      font-variation-settings: "wght" var(--fontwght), "wdth" var(--fontwidth),
        "slnt" var(--fontslant);
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
    text-align: inherit;
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
  //&::before {
  //  content: "yo";
  //  position: absolute;
  //  z-index: -1;
  //}
}

.image--player {
  //background-color: var(--cardbackgroundcolor);
  max-width: 100%;
  min-height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: calc(var(--borderinnercurve) - var(--borderinnerwidth));
  -webkit-tap-highlight-color: transparent;
  // there is a way to make this accessible
  //&:before {
  //  content: "Add Image";
  //  position: absolute;
  //  top: 0;
  //  left: 0;
  //}
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
  width: 100%;
  height: 100%;
  object-fit: cover;

  &.image--logo {
    box-shadow: inset 0 0 0 1.6rem var(--calcColorFront);
  }
}
</style>
