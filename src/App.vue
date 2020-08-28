<template>
  <div id="app">
    <keep-alive exclude="vadetail,zzhdintro,stylist,dyfzlist1,pdfloader,pdfloadernew,xjintro,ziyuanlist,zichanlist,zijinintro,zichanintro,ziyuanintro,feedbackno,feedbackyes,fddno,fddyes">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>
export default {
  name: 'App',
  methods: {
    backChange () {
      const that = this;
    },
    afterunloadFn (e) {
      console.log("刷新了");
      if (this.hasstore === "" || this.hasstore === undefined || this.hasstore === null) {
        alert("登录失效，请重新登录！")
        this.$router.replace("/login")
      }
    }
  },
  mounted () {
    // 如果支持 popstate 一般移动端都支持了
    if (window.history && window.history.pushState) {
      // 往历史记录里面添加一条新的当前页面的url
      history.pushState(null, null, document.URL);
      // 给 popstate 绑定一个方法 监听页面刷新
      window.addEventListener('popstate', this.backChange, false);//false阻止默认事件
    } else {

    }
    window.addEventListener('afterunloadFn', e => this.afterunloadFn(e))
  },
  destroyed () {
    window.removeEventListener('popstate', this.backChange, false);//false阻止默认事件
    window.removeEventListener('afterunloadFn', this.afterunloadFn, false);//false阻止默认事件
  },
  activated () {
    window.addEventListener('afterunloadFn', e => this.afterunloadFn(e))
  },
}
</script>
<style>
@import "assets/css/all.css";
@import "assets/iconfont/iconfont.css";
</style>
