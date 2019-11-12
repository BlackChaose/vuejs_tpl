<template>
  <div id="app">
    <!--<img alt="Vue logo" src="./assets/logo.jpg" width="120">-->
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <CustomInput label_mes="Адрес для ответа" input_val="nik@0x4e494b.ru"></CustomInput>
    <CustomInput label_mes="Тема сообщения" input_val="Сообщение от reestr.extech.ru"></CustomInput>
    <CustomTextArea label_mes="Текст сообщения"></CustomTextArea>
    <custom-button v-bind:dataset="inputText" value = "отправить"></custom-button>
  </div>
</template>

<script>
/*import HelloWorld from './components/HelloWorld.vue'*/
import CustomInput from './components/CustomInput.vue'
import CustomButton from './components/CustomSend'
import CustomTextArea from './components/CustomTextArea'

export default {
  name: 'app',
  components: {
    CustomInput,
    CustomButton,
    CustomTextArea
  }
}
</script>

<style>
#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
}
</style>
