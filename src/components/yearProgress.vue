<script setup>
import { storeToRefs } from 'pinia'

import { useStore } from '../stores/dayOfTheYear'
const store = useStore();
const {doy} = storeToRefs(store);
</script>

<template>
  <div class="q-pa-md progress-bar">
    <q-linear-progress size="25px" :value="doy.progress.value" color="primary">
      <div class="absolute-full flex flex-center">
        <q-badge class="text-bold" color="white" text-color="primary" :label="(doy.progress.value * 100).toFixed(2) + '%'"/>
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