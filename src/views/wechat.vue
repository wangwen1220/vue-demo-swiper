<template>
  <!-- 微信组件 -->
  <div id="wechat">
    <ul class="wechat-list">
        <!-- props 传递消息对象 baseMsgObj -->
        <msg v-for="baseMsgObj in $store.state.msgList.baseMsg" :item="baseMsgObj" class="list-row line-bottom" :key="baseMsgObj.mid"></msg>
    </ul>
  </div>
</template>

<script>
  import msg from '../components/msg'
  import mixin from '../store/mixin.js'
  export default {
    components: {
      msg
    },
    mixins: [mixin],
    data () {
      return {
        pageName: '微信'
      }
    }
  }
</script>

<style>
  @import '../assets/css/wechat.css';
</style>
