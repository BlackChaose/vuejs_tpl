<template>
    <div id="CustomInput" class="text">
        <label for="input_attach_file">{{ label_mes }} </label>
        <input id="input_attach_file" type="file" name="attached_file"       v-bind:value="value"
               v-on:input="$emit('input', $event.target.value)">
    </div>
</template>

<script>
  //fixme:
  export default {
    name: 'CustomInput',
    props: ['label_mes', 'input_val', 'value'],
    data: function () {
      return {
        files: null
      };
    }
  };
</script>