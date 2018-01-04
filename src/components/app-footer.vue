<template>
  <footer class="app-footer">
    <div id="wx-nav">
      <nav>
        <dl :class="{on: pageIndex == 0}" @click="slideTo(0)">
          <dt class="iconfont icon-wechat">
            <i v-if="$store.state.newMsgCount" class="new-msg-count">{{$store.state.newMsgCount}}</i>
          </dt>
          <dd>微信</dd>
        </dl>
        <dl :class="{on: pageIndex === 1}" @click="slideTo(1)">
          <dt class="iconfont icon-contact"></dt>
          <dd>通讯录</dd>
        </dl>
        <dl :class="{on: pageIndex === 2}" @click="slideTo(2)">
          <dt class="iconfont icon-find" >
          <i class="new-msg-dot"></i>
          </dt>
          <dd>发现</dd>
        </dl>
        <dl :class="{on: pageIndex === 3}" @click="slideTo(3)">
          <dt class="iconfont icon-me"></dt>
          <dd>我</dd>
        </dl>
      </nav>
    </div>
  </footer>
</template>

<script>
  export default {
    props: ['pageIndex'],
    computed: {
      swiper() {
        return this.$parent.$refs.vswiper.swiper
      }
    },
    mounted() {
      for (let i in this.$store.state.msgList.baseMsg) {
        if (this.$store.state.msgList.baseMsg[i].read === false && this.$store.state.msgList.baseMsg[i].quiet === false) {
          this.$store.commit('addNewMsg')
        }
      }
    },
    watch: {
      pageIndex(v) {
        console.log(v)
      }
    },
    methods: {
      slideTo(index) {
        this.swiper.slideTo(index, 300, false)
      }
    }
  }
</script>

<style>
  @import '../assets/css/wx-nav.css';
</style>
