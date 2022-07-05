<script setup>
import {ref} from 'vue'
import dayOfTheYear from '../composables/doy'

const today = () => {
  return new Date().toISOString().substring(0, 10).replaceAll('-', '/')
}
const date = ref(today());
const doy = dayOfTheYear(date);
</script>

<template>
  <h1 class="text-blue text-bold">Day of the year</h1>
  <div class="selectDate">
    <p>select date:</p>
    <div class="q-pa-md">
      <div class="q-gutter-md row items-start">
        <q-date v-model="date" class="q-mx-auto"/>
      </div>
    </div>
  </div>
  <p>the day of the year is <span class="doy text-blue-8 text-bold">{{ doy }}</span></p>
</template>

<style scoped>
h1 {
  font-size: 3rem;
}

p {
  font-size: 1.5rem;
}
</style>
