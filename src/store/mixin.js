// 利用混合动态设置页面标题
const mixin = {
  props: ['show'],
  mounted() {
    this.update()
  },
  watch: {
    show(v) {
      this.update()
    }
  },
  methods: {
    update() {
      if (!this.show) return
      this.$store.commit('setPageName', this.pageName)
      this.$store.commit('toggleTipsStatus', -1)
    }
  }
}

export default mixin
