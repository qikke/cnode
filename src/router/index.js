import Vue from 'vue'
import Router from 'vue-router'
import Artical from '../components/Artical'
import Postlist from '../components/Postlist'
import User from '../components/User'


Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'root',
      path: '/',
      components: {
        main: Postlist
      }
    },
    {
      name: 'post_content',
      path: '/topic:id',
      components: {
        main: Artical
      }
    },
    {
      name: 'user',
      path: '/user:name',
      components: {
        main: User
      }
    }
  ]
})
