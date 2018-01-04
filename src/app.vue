<template>
  <div id="app">
    <loading></loading>

    <div class="wrapper" :class="{hide: isSubpage}">
      <app-header></app-header>
      <section class="app-content">
        <swiper :options="swiperOption" ref="vswiper">
          <swiper-slide class="view" data-history="wechat"><wechat :show="pageIndex === 0"></wechat></swiper-slide>
          <swiper-slide class="view" data-history="contact"><contact :show="pageIndex === 1"></contact></swiper-slide>
          <swiper-slide class="view" data-history="find"><find :show="pageIndex === 2"></find></swiper-slide>
          <swiper-slide class="view" data-history="me"><me :show="pageIndex === 3"></me></swiper-slide>
        </swiper>
      </section>
      <app-footer :page-index="pageIndex"></app-footer>
    </div>

    <!-- 子页面 -->
    <transition :enter-active-class="enterAnimate" :leave-active-class="leaveAnimate">
      <router-view name="subpage" class="sub-page"></router-view>
    </transition>
  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import {swiper, swiperSlide} from 'vue-awesome-swiper'
  import wechat from './views/wechat'
  import contact from './views/contact'
  import find from './views/find'
  import me from './views/me'
  import loading from './components/loading'
  import appHeader from './components/app-header'
  import appFooter from './components/app-footer'

  export default {
    name: 'app',
    components: {
      swiper,
      swiperSlide,
      wechat,
      contact,
      find,
      me,
      appHeader,
      appFooter,
      loading
    },
    data() {
      return {
        pageName: '',
        pageIndex: 0,
        routerAnimate: false,
        enterAnimate: '', // 页面进入动效
        leaveAnimate: '', // 页面离开动效
        swiperOption: {
          // history: true
          history: {
            key: ''
          }
          // hashNavigation: {
          //   watchState: true
          // }
        }
      }
    },

    computed: {
      isSubpage() {
        return this.$route.path.split('/').length > 2
      },
      swiper() {
        return this.$refs.vswiper.swiper
      }
    },

    watch: {
      // 监听 $route 为店内页设置不同的过渡效果
      '$route' (to, from) {
        const toDepth = to.path.split('/').length
        const fromDepth = from.path.split('/').length

        if (toDepth === 2) {
          this.$store.commit('setPageName', to.name)
        }

        if (toDepth === fromDepth) return // 同一级页面无需设置过渡效果
        this.enterAnimate = toDepth > fromDepth ? 'animated fadeInRight' : 'animated fadeInLeft'
        this.leaveAnimate = toDepth > fromDepth ? 'animated fadeOutLeft' : 'animated fadeOutRight'

        // 从店面页进入店内页，需要对店内页重新设置离开动效，因为他们处于不同 name 的 router-view
        if (toDepth === 3) {
          this.leaveAnimate = 'animated fadeOutRight'
        }
      }
    },

    mounted() {
      // this.swiper.slideTo(3, 1000, false)
      console.log('Page Index:', this.swiper.activeIndex)
      console.log('Page Path:', this.$route.path)
      this.pageIndex = this.swiper.activeIndex
      this.swiper.on('transitionStart', () => {
        console.log('Page Index:', this.swiper.activeIndex)
        console.log('Page Path:', this.$route.path)
        this.pageIndex = this.swiper.activeIndex
      })
    }
  }
</script>

<style>
  @import './assets/css/main.css';
</style>

<style scoped>
  .view {
    min-height: 100vh;
  }
</style>
