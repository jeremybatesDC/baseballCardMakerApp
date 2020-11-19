<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        back L2 controls
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
    <ion-range min="-200" max="200" :value="textLineC.fontWght">
        <!--<ion-label slot="start">-200</ion-label>
        <ion-label slot="end">200</ion-label>-->
      </ion-range>

<div class="card-back" :data-card-back-orientation="backOrient">
      <article :data-gum="gumShowing" class="card-back__article">
        <!--<BackHeader />-->
        <section class="card-back__section">
          <!--<TableStatsManual />-->
          <!--<AsideFacts />-->
        </section>
        <!--<BackFooter />-->
      </article>
    </div>



    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { /*IonInput,*/ IonPage, IonRange, IonToolbar, IonContent } from '@ionic/vue';
//import BackFooter from '../components/BackFooter.vue';


export default  {
  name: 'Back',
  components: { /*IonInput,*/ IonRange, IonToolbar, IonContent, IonPage, /*BackFooter*/ },
  data(){
    return {
       backOrient: "horizontal",
      backgroundColor: "#9a8b7c",
      gumShowing: "gumShowing",
      textLineC: {
        fontWght: 200,
        fontWidth: 90,
        fontSlant: -5,
      },
    }
  }
}
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