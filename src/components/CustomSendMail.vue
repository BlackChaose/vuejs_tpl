<template>
    <div id="CustomSendMail">
        <form id="form_mailer_1" enctype="multipart/form-data" method="post">
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
            <input id="input_attach_file" type="file" name="attached_file" @change="addFiles" multiple>
            <br>
            <label for="query_select" :bind="label_query_select">{{ label_query_select }}</label>
            <textarea id="query_select" name="select_text" rows="8" cols="55" v-model="select_text"></textarea>
            <br>
            <button id="btn1" @click="senddata"> {{ value_button }}</button>
            <br>
        </form>
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
        un_attach_file: [],
        mail_from: 'nik@0x4e494b.ru',
        mail_theme: 'questions',
        message_text: 'some text',
        select_text: 'Select * from tables',
      };
    },
    methods: {
      addFiles: async function (e) {
        e.preventDefault();
        const formData = new FormData();
        const inputFiles = document.getElementById('input_attach_file');
        formData.append('title', 'attachments to the message');
        for (let i=0; i < inputFiles.files.length; i++) {
          formData.append('attachment', inputFiles.files[i]);
        }


        const response = await fetch('/massmail/ajax_massmail.php', {
          method: 'post',
          mode: 'same-origin',
          cache: 'no-cache',
          credentials: 'same-origin',
          redirect: 'follow',
          referrer: 'no-referrer',
          body: formData,
        });
        try {
          const json = await response.json();
        }
        catch  (error) {
          console.log('There has been a problem with your fetch operation: ', error.message);
        }
      },
      senddata: async function (e) {
        e.preventDefault();
        //this.un_attach_file = new FormData(document.getElementById('form_mailer_1'));

        const inputFiles = document.getElementById('input_attach_file');
        const fileObject = inputFiles.files[0];
        console.log(fileObject);
        if(fileObject) {
          const newObject = {
            'lastModified': fileObject.lastModified,
            'lastModifiedDate': fileObject.lastModifiedDate,
            'name': fileObject.name,
            'size': fileObject.size,
            'type': fileObject.type,
          };
          JSON.stringify(newObject);
          this.un_attach_file = newObject;
        }
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
          body: JSON.stringify({
            'query_data': {
                attach_file: this.un_attach_file,
                mail_f: this.mail_from,
                mail_t: this.mail_theme,
                message: this.message_text,
                select: this.select_text,
              }
          }),
        });
        const json = await response.json();
      }
    }
  };
  /* eslint-enable */
</script>

<style>

</style>