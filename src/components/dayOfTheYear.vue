<script setup>
import {ref} from 'vue'
import dayOfTheYear from '../composables/doy'

const today = () => {
  return new Date().toISOString().substring(0, 10).replaceAll('-', '/')
}
const date = ref(today());
const {doy, progress} = dayOfTheYear(date);


</script>

<template>
  <h1 class="text-blue text-bold">Day of the year</h1>
  <div class="selectDate">
    <div class="select-label row justify-center">
      <p>select date:</p>
      <q-btn @click="date=today()" class="refresh-button q-ma-lg" round color="primary" icon="refresh" />
    </div>
    <div class="q-pa-md">
      <div class="q-gutter-md row items-start">
        <q-date v-model="date" class="q-mx-auto"/>
      </div>

    </div>
  </div>
  <p>the day of the year is <span class="doy text-blue-8 text-bold">{{ doy }}</span></p>
  <div class="q-pa-md progress-bar">
    <q-linear-progress size="25px" :value="progress" color="primary">
      <div class="absolute-full flex flex-center">
        <q-badge class="text-bold" color="white" text-color="primary" :label="(progress * 100).toFixed(2) + '%'" />
      </div>
    </q-linear-progress>
  </div>
</template>

<style scoped>
h1 {
  font-size: 3rem;
}

p {
  font-size: 1.5rem;
}

/*.select-label{*/
/*  display: flex;*/
/*  justify-content: space-between;*/
/*  align-items: center;*/
/*}*/
.refresh-button{
  margin-top: -5px;
  margin-left: 100px;
}
.progress-bar{
  width: 30%;
  margin: auto;
}

@media only screen and (max-width: 600px) {
.progress-bar{
  width: 80%;
}
}
</style>
