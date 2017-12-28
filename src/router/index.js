import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [{
  path: '/wechat/dialogue',
  components: {
    'default': resolve => require(['../views/wechat.vue'], resolve),
    'subpage': resolve => require(['../views/wechat/dialogue.vue'], resolve)
  }
}, {
  path: '/me/settings',
  components: {
    'default': resolve => require(['../views/me.vue'], resolve),
    'subpage': resolve => require(['../views/me/settings.vue'], resolve)
  }
}, {
  path: '/me/profile',
  components: {
    'default': resolve => require(['../views/me.vue'], resolve),
    'subpage': resolve => require(['../views/me/profile.vue'], resolve)
  }
}]

export default new Router({
  mode: 'history',
  routes,
  // 注意: 这个功能只在 HTML5 history 模式下可用
  scrollBehavior (to, from, savedPosition) {
    return savedPosition || {x: 0, y: 0}
  }
})
