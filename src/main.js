import Vue from 'vue'
// import ddb from 'wjs'

import App from './app'
import store from './store'
import router from './router'
import filters from './filters'

Vue.config.devtools = true
Vue.config.productionTip = false // 关闭 Vue 启动时的提示信息

// 同时 use 多个插件，被依赖的插件应放在偏后方
// Vue.use(axios, vuex)

filters(Vue) // 注册全局过滤器
// Vue.prototype.$ddb = ddb // 暴露在 vue 对象中
// window.ddb = ddb // 暴露在窗口对象中，方便其它组件使用

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
