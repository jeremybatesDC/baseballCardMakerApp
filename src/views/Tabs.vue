<template>
  <ion-page>
    <ion-tabs>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="front" href="/tabs/front">
          <ion-label>Front</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="back" href="/tabs/back">
          <ion-label>Back</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonLabel,
  IonPage,
} from "@ionic/vue";

export default {
  name: "Tabs",
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonPage },
  //setup() {
  //  return {
  //
  //  }
  //}
};
</script>
