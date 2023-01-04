<template>
  <img alt="Vue logo" src="../assets/logo.png">

  <counter />
  <counter-squared />
  <counter-buttons />
  <color-code-input />
  
</template>

<script>
export default {
  name: 'App',
  components: {
    'counter': require('@/components/cCounter.vue').default,
    'counter-squared': require('@/components/cCounterSquared.vue').default,
    'counter-buttons': require('@/components/cButtons.vue').default,
    'color-code-input': require('@/components/cColorCode.vue').default,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
div{
  margin: 20px 0;
  font-size: 40px;
}
button{
  font-size: 20px;
  width: 100px;
  margin: 0 10px;
}
</style>
