<template>
  <main :style="[colorContrastVarsFront, colorContrastVarsBack]">
    <div class="tabsGood">
      <div role="tablist" aria-label="Card Side">
        <!--<div class="tab__wrapper">-->
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
        <!--</div>
        <div class="tab__wrapper">-->
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
        <!--</div>-->
      </div>
      <div id="panelCardFront" role="tabpanel" aria-labelledby="triggerFront">
        <CardFront />
      </div>
      <div
        id="panelCardBack"
        role="tabpanel"
        aria-labelledby="triggerBack"
        hidden
      >
        <CardBack :data-years="numOfYears" :data-stats="numOfStats" />
      </div>
    </div>
  </main>
</template>

<script>
import { get } from "idb-keyval";

import CardFront from "./components/CardFront.vue";
import CardBack from "./components/CardBack.vue";
//import { onMounted } from "vue";

async function registerServiceWorker() {
  console.log("restore service worker");
  //navigator.serviceWorker.register("/sw.js");
}

async function checkForLocalData() {
  // missing val undfined
  get("testFieldFromWebWorker2").then((val) => {
    if (val) {
      console.log(
        "yes there is local data to use so pull those values into vm instance ok using setFunc?"
      );
    } else {
      console.log(
        "no, thereS no local data to use, so load defaults importing from json"
      );
    }
  });
}

// i can make this smaller. Also I'm creating side effects. On prupose I guess but be careful
// this can fire so fast that maybe it would be good to have 2 different functions. That way thereS no if fork.

// resist urge to carve up this function in name of golf
// reason is this is a very clear pure function and can be repurposed
function hexToRGB(hex) {
  return [
    parseInt("0x" + hex[1] + hex[2]),
    parseInt("0x" + hex[3] + hex[4]),
    parseInt("0x" + hex[5] + hex[6]),
  ];
}

export default {
  components: {
    CardFront,
    CardBack,
  },
  setup() {
    registerServiceWorker();
    checkForLocalData();
    //setFunc();
    return {
      registerServiceWorker,
      checkForLocalData,
      hexToRGB,
    };
  },

  data() {
    return {
      frontshowing: true,
      bgcf: "#ffffff",
      bgcb: "#9a8b7c",
      minYears: 0,

      maxYears: 5,
      minStats: 0,
      maxStats: 5,
      numOfYears: 5,
      numOfStats: 5,
    };
  },
  methods: {
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
    // can we combine into single function? try composition API here
    colorContrastVarsFront() {
      let theRGB = hexToRGB(this.bgcf);
      return {
        "--bgcf": `rgb(${theRGB[0]},${theRGB[1]},${theRGB[2]})`,
        "--redfront": theRGB[0],
        "--greenfront": theRGB[1],
        "--bluefront": theRGB[2],
      };
    },
    colorContrastVarsBack() {
      let theRGB = hexToRGB(this.bgcb);
      return {
        "--bgcb": `rgb(${theRGB[0]},${theRGB[1]},${theRGB[2]})`,
        "--redback": theRGB[0],
        "--greenback": theRGB[1],
        "--blueback": theRGB[2],
      };
    },
  },
};
</script>

<style lang="scss">
body {
  font-size: 1.6rem;
  background-color: #eee;
}

main {
  --rfront: calc(var(--redfront) * 0.2126);
  --gfront: calc(var(--greenfront) * 0.7152);
  --bfront: calc(var(--bluefront) * 0.0722);
  --sumfront: calc(var(--rfront) + var(--gfront) + var(--bfront));
  --perceived-lightness-front: calc(var(--sumfront) / 255);

  --calcColorFront: hsl(
    0,
    0%,
    calc(
      (var(--perceived-lightness-front) - var(--contrast-threshold-for-card)) *
        -10000000%
    )
  );
  --rback: calc(var(--redback) * 0.2126);
  --gback: calc(var(--greenback) * 0.7152);
  --bback: calc(var(--blueback) * 0.0722);
  --sumback: calc(var(--rback) + var(--gback) + var(--bback));
  --perceived-lightness-back: calc(var(--sumback) / 255);

  --calcColorBack: hsl(
    0,
    0%,
    calc(
      (var(--perceived-lightness-back) - var(--contrast-threshold-for-card)) *
        -10000000%
    )
  );

  overflow: hidden;
}

//#panelCardFront{
//
//}
//
//#panelCardBack{
//
//}

h1,
h2,
h3 {
  input {
    width: 100%;
  }
}

.controls--l2 {
  //height: 7.2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.8rem;
}

legend {
  font-family: inherit;
  text-align: center;
  font-size: 1.6rem;
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
