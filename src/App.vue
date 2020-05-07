<template>
  <div id="app">
    <!-- <keep-alive>
        <router-view></router-view>
      </keep-alive> -->
    <keep-alive exclude="vadetail,zzactivity,zzhdintro,stylist,dyfzlist1,pdfloader,pdfloadernew,xjintro,ziyuanlist,zichanlist,zijinintro,zichanintro,ziyuanintro,feedbackno,feedbackyes,fddno,fddyes">
      <router-view></router-view>
      <!--这里是会被缓存的组件-->
    </keep-alive>
  </div>
</template>
<script>
export default {
  name: 'App',
  mounted () {
    // 如果支持 popstate 一般移动端都支持了
    if (window.history && window.history.pushState) {
      // 往历史记录里面添加一条新的当前页面的url
      history.pushState(null, null, document.URL);
      // 给 popstate 绑定一个方法 监听页面刷新
      window.addEventListener('popstate', this.backChange, false);//false阻止默认事件
    } else {

    }
  },
  destroyed () {
    window.removeEventListener('popstate', this.backChange, false);//false阻止默认事件
  },
  methods: {
    backChange () {
      const that = this;
      // console.log("监听到了");
      // alert("监听到了")
    }
  },
}
</script>
<style>
@import "assets/css/all.css";
@import "assets/iconfont/iconfont.css";
</style>
