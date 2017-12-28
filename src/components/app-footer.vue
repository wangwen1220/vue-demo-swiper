<template>
  <footer class="app-footer">
    <div id="wx-nav">
      <nav>
        <router-link to="/" tag="dl" :class="{on: pageName == '微信'}" exact>
          <dt class="iconfont icon-wechat">
            <i v-if="$store.state.newMsgCount" class="new-msg-count">{{$store.state.newMsgCount}}</i>
          </dt>
          <dd>微信</dd>
        </router-link>
        <router-link to="#contact" tag="dl" :class="{on: pageName === '通讯录'}">
          <dt class="iconfont icon-contact"></dt>
          <dd>通讯录</dd>
        </router-link>
        <router-link to="/find" tag="dl" :class="{on: pageName === '发现'}">
          <dt class="iconfont icon-find" >
          <i class="new-msg-dot"></i>
          </dt>
          <dd>发现</dd>
        </router-link>
        <router-link to="/me" tag="dl" :class="{on: pageName === '我'}">
          <dt class="iconfont icon-me"></dt>
          <dd>我</dd>
        </router-link>
      </nav>
    </div>
  </footer>
</template>

<script>
  export default {
    computed: {
      pageName() {
        console.log(this.$store.state.currentPageName)
        return this.$store.state.currentPageName
      }
    },
    mounted() {
      for (let i in this.$store.state.msgList.baseMsg) {
        if (this.$store.state.msgList.baseMsg[i].read === false && this.$store.state.msgList.baseMsg[i].quiet === false) {
          this.$store.commit('addNewMsg')
        }
      }
    }
  }
</script>

<style>
  @import '../assets/css/wx-nav.css';
</style>
