<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        front L2 controls
      </ion-toolbar>
    </ion-header>
    <ion-content>
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
             width="328" height="416"
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
} from "@ionic/vue";

export default {
  name: "Front",
  components: { IonInput, IonRange, IonToolbar, IonContent, IonPage },
  data() {
    return {
      images: {
        playerPic: "/assets/images/LeroyColorGood.webp",
        logoPic: "/assets/images/logo.svg",
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
  color: var(--calcColorFront);
  background-color: var(--bgcf, red);
  box-shadow: -1.6rem 0 var(--bgcf, red), 1.6rem 0 var(--bgcf, red);
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
  display:flex;
  input {
    &[type="text"] {
      display:flex;
      min-width: 0;
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
  //background-color: var(--cardbackgroundcolor);
 
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
</style>
