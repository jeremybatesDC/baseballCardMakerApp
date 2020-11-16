<template>
  <header class="cb__header" :style="textLineAProps">
    <div class="row row--topmost space-between">
      <!-- i dont think label is necessarily correct here -->
      <label class="backHeader__label--topmost">
        <h1 class="cb__h1">
          <input
            type="text"
            class=""
            v-model="playerName"
            placeholder="Firstname Lastname"
            spellcheck="false"
          />
          <div data-soi class="soi--textSlider" hidden>
            <label class="rangeUI__label">
              <span>Weight: <output :value="textLineA.fontWght"></output></span>

              <input
                class="rangeUI__input"
                v-model.number="textLineA.fontWght"
                type="range"
                min="100"
                max="900"
              />
            </label>
            <label class="rangeUI__label">
              <span>Width: <output :value="textLineA.fontWidth"></output></span>
              <input
                class="rangeUI__input"
                v-model.number="textLineA.fontWidth"
                type="range"
                min="75"
                max="150"
              />
            </label>

            <label class="rangeUI__label">
              <span>Slant: <output :value="textLineA.fontSlant"></output></span>
              <input
                class="rangeUI__input"
                v-model.number="textLineA.fontSlant"
                type="range"
                min="-10"
                max="0"
              />
            </label>
          </div>
        </h1>
      </label>
      <label class="backHeader__label--topmost">
        <span>
          <input type="text" v-model="defaultFacts.info.info_3" />
        </span>
      </label>
    </div>

    <!-- hard to loop since distinct lists may help... Although... -->
    <div class="row row--stacked space-between">
      <span class="">
        <!-- nested row -->
        <div class="row row--stripe stripe--dark space-between">
          <label class="stripe__label">
            <input
              class="stripe__input"
              type="email"
              v-model="defaultFacts.info.info_0"
            />
          </label>

          <label class="stripe__label">
            <input
              class="stripe__input"
              type="text"
              v-model="defaultFacts.info.info_1"
            />
          </label>
        </div>
        <div class="row row--bottommost space-between">
          <label>
            <input class="" type="text" v-model="defaultFacts.info.info_4" />
          </label>
          <label>
            <input
              class="text-center"
              type="text"
              v-model="defaultFacts.info.info_5"
            />
          </label>
          <label>
            <input class="" type="text" v-model="defaultFacts.info.info_6" />
          </label>
        </div>
      </span>
    </div>
  </header>
</template>

<script>
import defaultFacts from "/json/default-facts.json";
//import optsBack from "/json/default-settings-back.json";
export default {
  data() {
    return {
      defaultFacts,
      playerName: "Leroy Casey",
      textLineA: {
        fontWght: 800,
        fontWidth: 90,
        fontSlant: -10,
      },
    };
  },
  // can be used if App exposes via provide provide()
  //inject: ["allDataReactive"],
  computed: {
    textLineAProps() {
      return {
        "--fontwght": this.textLineA.fontWght,
        "--fontwidth": this.textLineA.fontWidth,
        "--fontslant": this.textLineA.fontSlant,
      };
    },
  },
  //created() {
  //  console.log(this.allDataReactive);
  //},
};
</script>

<style lang="scss">
.backHeader__label--topmost {
  &:first-of-type {
    width: 66.6666%;
    &:focus-within {
      [data-soi] {
        visibility: visible;
      }
    }
  }
  &:nth-of-type(2) {
    width: 33.3333%;
    input {
      // not sure why iOS was haing trouble with this
      width: 100%;
    }
  }
}

.cb__header {
  display: flex;
  flex-direction: column;

  padding: 0 1.6rem;
  input {
    font-variation-settings: "wght" 400, "wdth" 75, "slnt" 0;
    text-transform: uppercase;
  }
  label {
    display: flex;
    flex-direction: column;
    font-size: 1.6rem;

    align-items: center;
    justify-content: center;
    &:last-child {
      align-items: flex-end;
      input[type="text"] {
        text-align: right;
        padding-right: 0;
      }
    }
  }
}

.row {
  &--topmost {
    label {
      &--topmost {
        h1,
        input[type="text"] {
          display: flex;
        }
      }
      + label {
        span {
          display: flex;
        }
      }
    }
    // wait what about type email?
    input[type="text"] {
      height: var(--min-touch-target);
    }
    .rangeUI__label {
      span {
        width: 100%;
      }
    }
  }
  &--stacked {
    height: 5.4rem;

    span {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
    }
    label {
      flex-grow: 1;
    }

    input {
      color: inherit;
      width: 100%;
      height: calc(var(--min-touch-target-height-half) + 0.8rem);
      font-size: 1.6rem;
      padding: 0;
    }
  }
  &--stripe {
    height: 2.4rem;
    padding: 0;
    flex-wrap: nowrap;
    background: var(--calcColorBack);
    color: var(--bgcb);
    box-shadow: 1.6rem 0 var(--calcColorBack), -1.6rem 0 var(--calcColorBack);
  }
  &--bottommost {
    height: 3.2rem;
  }
}

.cb__h1 {
  display: flex;
  flex-grow: 1;
  font-size: 2.4rem;
  padding-bottom: 0;

  width: 100%;
  input[type="text"] {
    height: var(--min-touch-target);
    font-variation-settings: "wght" var(--fontwght), "wdth" var(--fontwidth),
      "slnt" var(--fontslant);
    padding-top: 0;
    padding-bottom: 0;
    width: 100%;
    &:focus {
      background-color: var(--bgcb);
    }
  }
}
</style>
