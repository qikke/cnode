import Vue from 'vue'
import Router from 'vue-router'
import Artical from '../components/Artical'
import Postlist from '../components/Postlist'


Vue.use(Router)

export default new Router({
  routes: [{
    name: 'root',
    path: '/',
    components: {
      main: Postlist
    }
  }, {
    name: 'post_content',
    path: '/topic:id',
    components: {
      main: Artical
    }
  },
  ]
})
