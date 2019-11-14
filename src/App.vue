<template>
  <div id="app">
    <!--<img alt="Vue logo" src="./assets/logo.jpg" width="120">-->
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <!--<CustomInput label_mes="Адрес для ответа" input_val="nik@0x4e494b.ru"></CustomInput>-->
    <!--<CustomInput label_mes="Тема сообщения" input_val="Сообщение от reestr.extech.ru"></CustomInput>-->
    <!--<CustomTextArea label_mes="Текст сообщения"></CustomTextArea>-->
    <!--<CustomUploadFile label_mes="Прикрепить файлы" v-model="value"></CustomUploadFile>-->
    <!--<CustomTextArea label_mes="Запрос в БД для выбора адресатов"></CustomTextArea>-->
    <!--<custom-button v-bind:dataset="value" value = "отправить" ></custom-button>-->
    <custom-send-mail value_button="Отправить" label_mail_from="Адрес для ответа" label_message_text="текст сообщения" label_mail_theme="Тема сообщения" label_query_select="кастомный запрос" label_attach_file="прикрепить файл"></custom-send-mail>
  </div>
</template>

<script>
  import CustomSendMail from './components/CustomSendMail'
/*import HelloWorld from './components/HelloWorld.vue'*/
// import CustomInput from './components/CustomInput.vue'
// import CustomButton from './components/CustomSend'
// import CustomTextArea from './components/CustomTextArea'
// import CustomUploadFile from './components/CustomUploadFile'
//fixme -no pass data from app to child components
export default {
  name: 'app',
  props: ['value'],
  components: {
    CustomSendMail
    // CustomInput,
    // CustomButton,
    // CustomTextArea,
    // CustomUploadFile
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
