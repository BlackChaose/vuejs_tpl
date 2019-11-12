<template>
    <div id="CustomSend">
        <button id="btn1" @click="senddata"> {{ value }}</button>
    </div>
</template>

<script>
  /* eslint-disable */
  export default {
    name: 'CustomButton',
    props: ['value','dataset'],
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
          body: JSON.stringify({"query_data":{ data: this.dataset, message: 'req mes!'}}),
      });
        const json = await response.json();
      }
    }
  };
  /* eslint-enable */
</script>

<style>
    #CustomSend {
        display: inline-block;
    }
</style>