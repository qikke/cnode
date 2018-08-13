// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Header from './components/Header'
import Postlist from './components/Postlist'
import Axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$http = Axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App, Header, Postlist},
  template: `
    <div>
      <Header></Header>
      <main>
        <router-view name="main"></router-view>
      </main>
    </div>
  `
})


