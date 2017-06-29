<template>
  <div>
      <title-comp title="This is my Vue.js test page"> </title-comp>
      <ul>
         <li v-for="user in showOnly(users)">
            <router-link
               :to="{ name: 'userPage', params: { userFirstName: user.firstName }}">
                 <span :class="{test: user.contacted}">{{ user.firstName }}</span>
            </router-link>
            <button v-on:click="deleteUser(user)">X</button>
         </li>
      </ul>

      </br>
      </br>
      <p>Create new user: </p>
      <label>First Name: </label>
      <input type="text" v-model="newUser.firstName" placeholder="Enter first name"/>
      <br>

      <label>Last Name: </label>
      <input type="text" v-model="newUser.lastName" placeholder="Enter last name"/>
      <br>

      <label>Show: </label>
      <input type="checkbox" v-model="newUser.show" />

      <br>
      <br>

      <button v-on:click="createUser">Create</button>




  </div>
</template>

<script>
import titleComp from './TitleComp'
export default {
  name: 'first-comp',
  components: {titleComp},
  data () {
    return {
      msg: 'This is my first vue component',
      users: [
                {firstName: 'John', lastName: 'Doe', show: true, contacted: false},
                {firstName: 'Jane', lastName: 'Smith', show: false, contacted: false}
      ],
      newUser: {}

    }
  },
  methods: {
    createUser: function () {
      this.users.push({firstName: this.newUser.firstName, lastName: this.newUser.lastName, show: this.newUser.show, contacted: false})
    },
    deleteUser: function (user) {
      // this.users.splice(user, 1)
      user.contacted = true
    },
    showOnly: function (users) {
      return users.filter(function (user) {
        return user.show
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  button {
    color: white;
    background-color: black;
  }
  .test {
    text-decoration: line-through;
  }


</style>
