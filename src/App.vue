<template>
  <ion-app>
    <!--<ion-router-outlet />-->
    <CardFront></CardFront>
  </ion-app>
</template>

<script>
import { IonApp /*, IonRouterOutlet */ } from "@ionic/vue";
import CardFront from "./components/CardFront";
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  components: {
    IonApp,
    CardFront,
    //IonRouterOutlet
  },
});
</script>
