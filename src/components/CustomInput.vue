<template>
    <div id="CustomInput">
        <label for="input1">Адрес для ответа: </label>
        <input id="input1" type="text"
               v-model="inputText">
        <custom-button value = "отправить"></custom-button>
        <p>Input Text: {{ inputText }}</p>
    </div>
</template>

<script>

  import CustomButton from './CustomSend';
  export default {
    name: 'CustomInput',
    components: {CustomButton},
    data: function() {
      return {
        inputText: 'reestr@extech.ru'
      };
    }
  }
</script>