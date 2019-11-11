<template>
    <div id="CustomSend">
        <button id="btn1" @click="senddata"> {{ value }}</button>
    </div>
</template>

<script>
  export default {
    name: 'CustomButton',
    props: ['value' ],
    methods: {
      senddata: function () {
        fetch('/massmail/ajax_massmail.php', {
          method: 'post',
          headers: {
            'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
          },
          body: 'foo=bar&lorem=ipsum&'
        })
      }
    }
  };
</script>
<style>
    #CustomSend {
        display: inline-block;
    }
</style>