<template>
    <div id="custom_text_area">
        <label for="message_text_id"> {{ label_mes }} </label>
        <textarea id="message_text_id" name="message_text" rows="8" cols="55" v-model="dataset_text_area">
        </textarea>
    </div>
</template>

<script>
  export default {
    name: 'CustomTextArea',
    props: ['label_mes'],
    data: function(){
      return { 'dataset_text_area': undefined }
    }
  };
</script>

<style>
    #custom_text_area{
        overflow: hidden;
        overflow-wrap: break-word;
        resize: horizontal;
        height: 150px
    }
</style>