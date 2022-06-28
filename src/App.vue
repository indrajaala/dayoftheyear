<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import dayOfTheYear from './components/dayOfTheYear.vue'
</script>

<template>
  <div class="container bg-amber-1">
    <day-of-the-year/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*padding-top: 20px;*/
}
.container{
  padding-top: 30px;
  height: 100vh;
}
</style>
