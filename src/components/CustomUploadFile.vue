<template>
    <div id="CustomInput" class="text">
        <label for="input1">{{ label_mes }} </label>
        <input id="input1" type="text"
               v-model="inputText">
    </div>
</template>

<script>

  export default {
    name: 'CustomInput',
    props: ['label_mes','input_val'],
    data: function(){
      return { 'inputText': this.input_val }
    },

  }
</script>