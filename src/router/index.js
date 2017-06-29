import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import firstComp from '@/components/FirstComp'
import userComp from '@/components/UserComp'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/users',
      name: 'users',
      component: firstComp
    },
    {
      path: '/user/:userFirstName',
      name: 'userPage',
      component: userComp,
      props: true
    }
  ]
})
