<template>
	<ion-app>
		<CardFront></CardFront>
	</ion-app>
</template>

<script>
import { IonApp } from "@ionic/vue";
import CardFront from "./components/CardFront";
import { defineComponent } from "vue";

export default defineComponent({
	name: "App",
	components: {
		IonApp,
		CardFront,
	},
});
</script>

<style>
#panelCardFront,
#panelCardBack {
	min-height: 100%;
	background-size: cover;
}
</style>
