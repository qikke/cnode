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


Vue.filter('timeTransform', function (value) {
  // 2018-08-11T11:31:51.799Z
  let oldTime = new Date(value)
  let currTime = new Date()
  let diffTime = currTime - oldTime
  let minutes = diffTime / 1000 / 60
  let hours = minutes / 60
  let days = hours / 24
  let months = days / 30
  let years = months / 12

  if (years >= 1) {
    return (years | 0) + '年前'
  } else if (months > 1) {
    return (months | 0) + '月前'
  } else if (days > 1) {
    return (days | 0) + '天前'
  } else if (hours > 1) {
    return (hours | 0) + '小时前'
  } else if (minutes > 1) {
    return (minutes | 0) + '分钟前'
  } else {
    return '刚刚'
  }
})

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




