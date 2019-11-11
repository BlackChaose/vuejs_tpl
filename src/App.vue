<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.jpg" width="120">
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <Currtime></Currtime>
    <CustomInput></CustomInput>
  </div>
</template>

<script>
/*import HelloWorld from './components/HelloWorld.vue'*/
import Currtime from './components/Currtime.vue'
import CustomInput from './components/CustomInput.vue'

export default {
  name: 'app',
  components: {
   /* HelloWorld,*/
    Currtime,
    CustomInput
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
