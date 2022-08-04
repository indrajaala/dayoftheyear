<script setup>
import {dayOfTheYear} from '../stores/dayOfTheYear';
import {storeToRefs} from 'pinia';

const store = dayOfTheYear();

const {date, doy} = storeToRefs(store);
const {setToday} = store;
setToday();
console.log('the date is', date)
</script>

<template>
  <div class="selectDate">
    <div class="select-label row justify-center">
      <p>select date:</p>
      <q-btn @click="setToday()" class="refresh-button q-ma-lg" round color="primary" icon="refresh"/>
    </div>
  </div>
  <div class="q-pa-md">
    <div class="q-gutter-md row items-start">
      <q-date v-model="date" class="q-mx-auto"/>
    </div>
    <p class="q-mt-md">the day of the year is <span class="doy text-blue-8 text-bold">{{ doy }}</span></p>

  </div>
</template>

<style scoped>

p {
  font-size: 1.5rem;
}

.refresh-button {
  margin-top: -5px;
  margin-left: 100px;
}
</style>