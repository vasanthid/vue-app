<template>
  <div>
    <h1> This is <b>{{userFirstName}}</b>'s page </h1>
    <router-link to="/users">Go back to users</router-link>
  </div>
</template>
<script>
   export default {
     name: 'user-comp',
     props: ['userFirstName']

   }
</script>
<style scoped>
</style>
