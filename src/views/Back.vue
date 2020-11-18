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
      textLineC: {
        fontWght: 200,
        fontWidth: 90,
        fontSlant: -5,
      },
    }
  }
}
</script>