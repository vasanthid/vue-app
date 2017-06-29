<template>
  <div>
      <h1>{{title}}</h1>
  </div>
</template>
<script>
  export default {
    name: 'title-comp',
    props: {
      title: {
        type: String,
        default: 'default title'
      }
    },
    data () {
      return {

      }
    }
  }
</script>
<style scoped>
  h1 {
    color: red;
  }
</style>
