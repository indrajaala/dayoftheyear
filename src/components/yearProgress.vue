<script setup>
import {dayOfTheYear} from '../stores/dayOfTheYear';
import { storeToRefs} from 'pinia';
const store = dayOfTheYear();
const {progress} = storeToRefs(store);
</script>

<template>
  <div class="q-pa-md progress-bar">
    <q-linear-progress size="25px" :value="progress" color="primary">
      <div class="absolute-full flex flex-center">
        <q-badge class="text-bold" color="white" text-color="primary" :label="(progress * 100).toFixed(2) + '%'"/>
      </div>
    </q-linear-progress>
  </div>
</template>

<style scoped>
.progress-bar {
  width: 30%;
  margin: auto;
}

@media only screen and (max-width: 600px) {
  .progress-bar {
    width: 80%;
  }
}
</style>