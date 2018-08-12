// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Header from './components/Header'
import Postlist from './components/Postlist'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App, Header, Postlist},
  template: `
    <div>
      <Header></Header>
      <Postlist></Postlist>
    </div>
    
  `
})