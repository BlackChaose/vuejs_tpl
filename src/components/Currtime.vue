<template>
    <div id="Currtime">
        <p>{{ seconds }} seconds have elapsed since you opened the page.</p>
    </div>
</template>

<script>
  export default {
    name: 'Currtime',
    data: function() {
return {
      seconds: 0
    };
},
    created() {
      setInterval( () => {
        this.seconds ++;
      }, 1000);
    }
  }
</script>
