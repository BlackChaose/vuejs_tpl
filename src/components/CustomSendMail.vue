<template>
    <div id="CustomSendMail">
        <label for="input_mail_from" :bind="label_mail_from">{{ label_mail_from }}</label>
        <input id="input_mail_from" name="input_from" type="text" v-model="mail_from">
        <br>
        <label for="input_mail_theme" :bind="label_mail_theme">{{ label_mail_theme }}</label>
        <input id="input_mail_theme" name="input_theme" type="text" v-model="mail_theme">
        <br>
        <label for="message_text_id" :bind="label_message_text">{{ label_message_text }}</label>
        <textarea id="message_text_id" name="message_text" rows="8" cols="55" v-model="message_text"></textarea>
        <br>
        <label for="input_attach_file" :bind="label_attach_file">{{ label_attach_file }} </label>
        <input id="input_attach_file" type="file" name="attached_file" :bind="un_attach_file">
        <br>
        <label for="query_select" :bind="label_query_select">{{ label_query_select }}</label>
        <textarea id="query_select" name="select_text" rows="8" cols="55" v-model="select_text"></textarea>
        <br>
        <button id="btn1"  @click="senddata"> {{ value_button }}</button>
        <br>
    </div>
</template>

<script>
    //FIX BUG!
    /* eslint-disable */
  export default {
    name: 'CustomSendMail',
    props: ['dataset', 'label_mail_from', 'label_mail_theme', 'label_message_text', 'label_query_select', 'label_attach_file', 'value_button'],
    data: function () {
      return {
        un_attach_file: null,
        mail_from: null,
        mail_theme: null,
        message_text: null,
        select_text: null,
      };
    },
    methods: {
      senddata: async function () {

        const response = await fetch('/massmail/ajax_massmail.php', {
          method: 'post',
          mode: 'same-origin',
          cache: 'no-cache',
          credentials: 'same-origin',
          headers: {
            /*'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'*/
            'Content-Type': 'application/json'
          },
          redirect: 'follow',
          referrer: 'no-referrer',
          body: JSON.stringify({"query_data":{ data: this.data, message: 'req mes!'}}),
        });
        const json = await response.json();
      }
    }
  };
    /* eslint-enable */
</script>

<style>

</style>