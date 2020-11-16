<template>
  <div class="stats__wrapper--outer" @focusin="putCursorAtEnd">
    <form class="stats__form">
      <table class="stats__table">
        <!--<caption>Career Stats</caption>-->
        <thead>
          <tr data-row="0">
            <th scope="col" data-col="0">
              <label>
                <input type="text" v-model.trim="fields.year" maxlength="9" />
              </label>
            </th>
            <th scope="col" data-col="1">
              <label>
                <input
                  type="text"
                  v-model.trim="fields.homeCity"
                  data-col="1"
                  maxlength="9"
                />
              </label>
            </th>
            <th scope="col" data-col="2">
              <label>
                <input type="text" v-model.trim="fields.field0" maxlength="9" />
              </label>
            </th>
            <th scope="col" data-col="3">
              <label>
                <input type="text" v-model.trim="fields.field1" maxlength="9" />
              </label>
            </th>
            <th scope="col" data-col="4">
              <label>
                <input type="text" v-model.trim="fields.field2" maxlength="9" />
              </label>
            </th>
            <th scope="col" data-col="5">
              <label>
                <input type="text" v-model.trim="fields.field3" maxlength="9" />
              </label>
            </th>
            <th scope="col" data-col="6">
              <label>
                <input type="text" v-model.trim="fields.field4" maxlength="9" />
              </label>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr data-row="1">
            <!-- making first col a TH scope row -->
            <th scope="row" data-col="0">
              <input
                type="tel"
                inputmode="decimal"
                v-model="seasons.yr0.year"
                size="4"
                maxlength="4"
              />
            </th>
            <td data-col="1">
              <input
                type="tel"
                inputmode="decimal"
                v-model.trim="seasons.yr0.homeCity"
                size="4"
                maxlength="4"
              />
            </td>
            <td data-col="2">
              <input
                type="tel"
                inputmode="decimal"
                v-model.number="seasons.yr0.stats.stat0"
                size="5"
                maxlength="5"
                placeholder="0"
              />
            </td>

            <td data-col="3">
              <input
                type="tel"
                inputmode="decimal"
                v-model.number="seasons.yr0.stats.stat1"
                size="5"
                maxlength="5"
                placeholder="0"
              />
            </td>
            <td data-col="4">
              <input
                type="tel"
                inputmode="decimal"
                v-model.number="seasons.yr0.stats.stat2"
                size="5"
                maxlength="5"
                placeholder="0"
              />
            </td>
            <td data-col="5">
              <input
                type="tel"
                inputmode="decimal"
                v-model.number="seasons.yr0.stats.stat3"
                size="5"
                maxlength="5"
                placeholder="0"
              />
            </td>
            <td data-col="6">
              <input
                type="tel"
                inputmode="decimal"
                v-model.number="seasons.yr0.stats.stat4"
                size="5"
                maxlength="5"
                placeholder="0"
              />
            </td>
          </tr>
          <tr data-row="2">
            <th scope="row" data-col="0">
              <input
                type="tel"
                inputmode="decimal"
                v-model="seasons.yr1.year"
                data-col="0"
                size="4"
                maxlength="4"
              />
            </th>
            <td data-col="1">
              <input
                type="tel"
                inputmode="decimal"
                v-model.trim="seasons.yr1.homeCity"
                data-col="1"
                size="4"
                maxlength="4"
              />
            </td>
            <td data-col="2">
              <input
                type="tel"
                inputmode="decimal"
                v-model.number="seasons.yr1.stats.stat0"
                size="5"
                maxlength="5"
                placeholder="0"
              />
            </td>

            <td data-col="3">
              <input
                type="tel"
                inputmode="decimal"
                v-model.number="seasons.yr1.stats.stat1"
                size="5"
                maxlength="5"
                placeholder="0"
              />
            </td>
            <td data-col="4">
              <input
                type="tel"
                inputmode="decimal"
                v-model.number="seasons.yr1.stats.stat2"
                size="5"
                maxlength="5"
                placeholder="0"
              />
            </td>
            <td data-col="5">
              <input
                type="tel"
                inputmode="decimal"
                v-model.number="seasons.yr1.stats.stat3"
                size="5"
                maxlength="5"
                placeholder="0"
              />
            </td>
            <td data-col="6">
              <input
                type="tel"
                inputmode="decimal"
                v-model.number="seasons.yr1.stats.stat4"
                size="5"
                maxlength="5"
                placeholder="0"
              />
            </td>
          </tr>
          <tr data-row="3">
            <th scope="row" data-col="0">
              <input
                type="tel"
                inputmode="decimal"
                v-model="seasons.yr2.year"
                data-col="0"
                size="4"
                maxlength="4"
              />
            </th>
            <td data-col="1">
              <input
                type="tel"
                inputmode="decimal"
                v-model.trim="seasons.yr2.homeCity"
                data-col="1"
                size="4"
                maxlength="4"
              />
            </td>
            <td data-col="2">
              <input
                type="tel"
                inputmode="decimal"
                v-model.number="seasons.yr2.stats.stat0"
                size="5"
                maxlength="5"
                placeholder="0"
              />
            </td>

            <td data-col="3">
              <input
                type="tel"
                inputmode="decimal"
                v-model.number="seasons.yr2.stats.stat1"
                size="5"
                maxlength="5"
                placeholder="0"
              />
            </td>
            <td data-col="4">
              <input
                type="tel"
                inputmode="decimal"
                v-model.number="seasons.yr2.stats.stat2"
                size="5"
                maxlength="5"
                placeholder="0"
              />
            </td>
            <td data-col="5">
              <input
                type="tel"
                inputmode="decimal"
                v-model.number="seasons.yr2.stats.stat3"
                size="5"
                maxlength="5"
                placeholder="0"
              />
            </td>
            <td data-col="6">
              <input
                type="tel"
                inputmode="decimal"
                v-model.number="seasons.yr2.stats.stat4"
                size="5"
                maxlength="5"
                placeholder="0"
              />
            </td>
          </tr>
          <tr data-row="4">
            <th scope="row" data-col="0">
              <input
                type="tel"
                inputmode="decimal"
                v-model="seasons.yr3.year"
                data-col="0"
                size="4"
                maxlength="4"
              />
            </th>
            <td data-col="1">
              <input
                type="tel"
                inputmode="decimal"
                v-model.trim="seasons.yr3.homeCity"
                data-col="1"
                size="4"
                maxlength="4"
              />
            </td>
            <td data-col="2">
              <input
                type="tel"
                inputmode="decimal"
                v-model.number="seasons.yr3.stats.stat0"
                size="5"
                maxlength="5"
                placeholder="0"
              />
            </td>

            <td data-col="3">
              <input
                type="tel"
                inputmode="decimal"
                v-model.number="seasons.yr3.stats.stat1"
                size="5"
                maxlength="5"
                placeholder="0"
              />
            </td>
            <td data-col="4">
              <input
                type="tel"
                inputmode="decimal"
                v-model.number="seasons.yr3.stats.stat2"
                size="5"
                maxlength="5"
                placeholder="0"
              />
            </td>
            <td data-col="5">
              <input
                type="tel"
                inputmode="decimal"
                v-model.number="seasons.yr3.stats.stat3"
                size="5"
                maxlength="5"
                placeholder="0"
              />
            </td>
            <td data-col="6">
              <input
                type="tel"
                inputmode="decimal"
                v-model.number="seasons.yr3.stats.stat4"
                size="5"
                maxlength="5"
                placeholder="0"
              />
            </td>
          </tr>
          <tr data-row="5">
            <th scope="row" data-col="0">
              <input
                type="tel"
                inputmode="decimal"
                v-model="seasons.yr4.year"
                data-col="0"
                size="4"
                maxlength="4"
              />
            </th>
            <td data-col="1">
              <input
                type="tel"
                inputmode="decimal"
                v-model.trim="seasons.yr4.homeCity"
                data-col="1"
                size="4"
                maxlength="4"
              />
            </td>
            <td data-col="2">
              <input
                type="tel"
                inputmode="decimal"
                v-model.number="seasons.yr4.stats.stat0"
                size="5"
                maxlength="5"
                placeholder="0"
              />
            </td>

            <td data-col="3">
              <input
                type="tel"
                inputmode="decimal"
                v-model.number="seasons.yr4.stats.stat1"
                size="5"
                maxlength="5"
                placeholder="0"
              />
            </td>
            <td data-col="4">
              <input
                type="tel"
                inputmode="decimal"
                v-model.number="seasons.yr4.stats.stat2"
                size="5"
                maxlength="5"
                placeholder="0"
              />
            </td>
            <td data-col="5">
              <input
                type="tel"
                inputmode="decimal"
                v-model.number="seasons.yr4.stats.stat3"
                size="5"
                maxlength="5"
                placeholder="0"
              />
            </td>
            <td data-col="6">
              <input
                type="tel"
                inputmode="decimal"
                v-model.number="seasons.yr4.stats.stat4"
                size="5"
                maxlength="5"
                placeholder="0"
              />
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr data-row="6">
            <th scope="row" data-col="0">TOTALS</th>
            <td data-col="1">&nbsp;</td>
            <!-- a bit too imperative but it is good that we are not doing a v-if in a v-for-->
            <td scope="col" data-col="2">
              <output class="tfoot__output--totals">{{
                tabulate("sum", "stat0")
              }}</output>
            </td>
            <td scope="col" data-col="3">
              <output class="tfoot__output--totals">{{
                tabulate("sum", "stat1")
              }}</output>
            </td>
            <td scope="col" data-col="4">
              <output class="tfoot__output--totals">{{
                tabulate("avg", "stat2")
              }}</output>
            </td>
            <td scope="col" data-col="5">
              <output class="tfoot__output--totals">{{
                tabulate("sum", "stat3")
              }}</output>
            </td>
            <td scope="col" data-col="6">
              <output class="tfoot__output--totals">{{
                tabulate("sum", "stat4")
              }}</output>
            </td>
          </tr>
        </tfoot>
      </table>
    </form>
  </div>
</template>
<script>
//import defaultStats from "/json/default-stats.json";

function putCursorAtEnd(event) {
  event.target.setSelectionRange(99, 99);
}

export default {
  setup() {
    return { putCursorAtEnd };
  },
  data() {
    return {
      //defaultStats,
      fields: {
        year: "Year",
        homeCity: "City",
        field0: "Races",
        field1: "Miles",
        field2: "Speed",
        field3: "Falls",
        field4: "Beers",
      },
      seasons: {
        yr0: {
          year: "2015",
          homeCity: "DC",
          stats: {
            stat0: 11,
            stat1: 905,
            stat2: 29,
            stat3: 12,
            stat4: 112,
          },
        },
        yr1: {
          year: "2016",
          homeCity: "NYC",
          stats: {
            stat0: 25,
            stat1: 1005,
            stat2: 28.5,
            stat3: 6,
            stat4: 118,
          },
        },
        yr2: {
          year: "2017",
          homeCity: "SF",
          stats: {
            stat0: 1,
            stat1: 4,
            stat2: 8.5,
            stat3: 1,
            stat4: 398,
          },
        },
        yr3: {
          year: "2018",
          homeCity: "SF",
          stats: {
            stat0: 102,
            stat1: 9876,
            stat2: 42,
            stat3: 11,
            stat4: 77,
          },
        },
        yr4: {
          year: "2019",
          homeCity: "LA",
          stats: {
            stat0: 29,
            stat1: 3201,
            stat2: 101,
            stat3: 0,
            stat4: 27,
          },
        },
      },
    };
  },

  methods: {
    tabulate(sumOrAvg, statCol) {
      const rdcrSum = (acum, curVal) => {
        return parseFloat(acum) + parseFloat(curVal);
      };
      const rdcrAvg = ({ avg, n }, curVal) => {
        return {
          avg: (curVal + n * avg) / (n + 1),
          n: n + 1,
        };
      };

      // keep integating -- yes, i could store as variable.
      // But i think this is an opportunity for a super slick single pass
      // can this be simpler? Mark the column. Then maybe filter easy
      // but iM going back to the model for this

      let colArray = Object.keys(this.seasons).map((item, i) => {
        return Number(this.seasons[`yr${i}`].stats[statCol]);
      });

      if (sumOrAvg === "sum") {
        return (
          // only using one of 4 allowed args and confident can combine these ifs
          // and just do single pass
          colArray.reduce(rdcrSum)
        );
      } else if (sumOrAvg === "avg") {
        const initialVals = { avg: 0, n: 0 };

        return parseFloat(colArray.reduce(rdcrAvg, initialVals).avg).toFixed(1);
      }
    },
  },
};
</script>

<style lang="scss">
.stats__wrapper--outer {
  --tablewrapheight: 100%;
  --tableheight: 100%;
  @media (min-width: 400px) {
    --tablewrapheight: calc(100% - 6.4rem);
    --tableheight: 100%;
  }
}

thead,
tbody {
  [data-col="0"] {
    width: 4ch;
  }
  [data-col="1"] {
    width: 4ch;
    white-space: nowrap;
    overflow: visible;
  }
}

.stats__wrapper--outer {
  display: flex;
  flex-grow: 1;
  align-items: center;
  // this needs to be put in a variable duh
  //width: 30rem;
  min-width: 30rem;
  padding: 0 1.6rem;
  //padding-right: 1.6rem;
}

.stats__form {
  width: 100%;
  height: var(--tablewrapheight);
}

.stats__table {
  width: 100%;
  max-width: calc(100vw - 3.2rem);
  height: var(--tableheight);
  margin: 0 auto;
  font-size: 1.6rem;
  // i just learned that line-height of exactly 1 gets rejected by brower on inputs and then falls back on a larger value of normal (1.2 i think)
  // so, a value of 1.1 actually results in a shorter line height than 1
  line-height: 1.1;
  font-family: inherit;

  text-align: right;

  // need to address making this fit on portrait
  //overflow: hidden;
}

thead {
  background: rgba(0, 0, 0, 0.05);
  //box-shadow: 0 1px #000;
  th {
    position: relative;
    height: 2.4rem;
    padding: 0;
    vertical-align: middle;
    label {
      height: 2.4rem;
      position: relative;
    }
    input {
      height: 2.4rem;
      //max-width: 4.5rem;
      text-align: right;
    }
    &:first-child,
    &:nth-child(2) {
      input {
        text-align: left;
      }
    }
  }
}
// some ths are in tbody and tfoot
th {
  label {
    display: flex;

    input[type="text"] {
      font-variation-settings: "wght" 300, "wdth" 75, "slnt" 0;
      line-height: 1.1;
      display: flex;
      // removing this absolute positioinig has bad effects on iOS (didn't see in chrome dev tools)
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      text-transform: uppercase;
    }
  }
}
tbody {
  //box-shadow: 0 1px #000;
  font-variation-settings: "wght" 300, "wdth" 75, "slnt" 0;
  background: rgba(255, 255, 255, 0.1);

  td,
  th {
    padding: 0;
    box-shadow: 0 1px rgba(0, 0, 0, 0.25);
    //width: 0.1px;
    //max-width: 0.1px;
    white-space: nowrap;
    &:first-child,
    &:nth-child(2) {
      text-align: left;

      input {
        text-align: left;
      }
    }
  }
  input {
    padding: 0;
    text-align: right;
    font-variant-numeric: lining-nums tabular-nums;
    &[type="tel"] {
      &::placeholder {
        color: var(--calcColorBack);
      }
    }
  }
}
tfoot {
  font-variation-settings: "wght" 300, "wdth" 75, "slnt" 0;
  background: rgba(0, 0, 0, 0.05);
  td,
  th {
    padding: 0.1rem 0 0.1rem 0.1rem;
  }
  th {
    &:first-child {
      text-align: left;
    }
  }
  output {
    font-variant-numeric: lining-nums tabular-nums;
  }
}

[data-stats="0"] {
  [data-col="2"],
  [data-col="3"],
  [data-col="4"],
  [data-col="5"],
  [data-col="6"] {
    display: none;
  }
}

[data-stats="1"] {
  [data-col="3"],
  [data-col="4"],
  [data-col="5"],
  [data-col="6"] {
    display: none;
  }
}
[data-stats="2"] {
  [data-col="4"],
  [data-col="5"],
  [data-col="6"] {
    display: none;
  }
}

[data-stats="3"] {
  [data-col="5"],
  [data-col="6"] {
    display: none;
  }
}

[data-stats="4"] {
  [data-col="6"] {
    display: none;
  }
}

[data-years="0"] {
  [data-row="1"],
  [data-row="2"],
  [data-row="3"],
  [data-row="4"],
  [data-row="5"],
  [data-row="6"] {
    display: none;
  }
}

[data-years="1"] {
  [data-row="2"],
  [data-row="3"],
  [data-row="4"],
  [data-row="5"],
  [data-row="6"] {
    display: none;
  }
}

[data-years="2"] {
  [data-row="3"],
  [data-row="4"],
  [data-row="5"] {
    display: none;
  }
}

[data-years="3"] {
  [data-row="4"],
  [data-row="5"] {
    display: none;
  }
}

[data-years="4"] {
  [data-row="5"] {
    display: none;
  }
}
</style>
