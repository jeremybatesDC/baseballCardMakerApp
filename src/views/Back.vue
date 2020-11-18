<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        back L2 controls
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">

    <ion-input placeholder="Enter Input"></ion-input>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonInput, IonPage, IonToolbar, IonContent } from '@ionic/vue';

export default  {
  name: 'Back',
  components: { IonInput, IonToolbar, IonContent, IonPage }
}
</script>