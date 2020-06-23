<template>
  <Tabbar>
    <div slot="Tabbar">
      <Tabitem path="/index/home"
               :activeColor="activeColor">
        <span class="iconfont icon-shouye2"
              slot="Tabitem_icon"></span>
        <span slot="Tabitem_sign">首页</span>
      </Tabitem>
      <Tabitem path="/index/feedback"
               :activeColor="activeColor">
        <span class="iconfont icon-fankuixinxi"
              slot="Tabitem_icon"></span>
        <span slot="Tabitem_sign">意见建议</span>
      </Tabitem>
      <Tabitem path="/index/profile"
               :activeColor="activeColor">
        <span class="iconfont icon-wode4"
              slot="Tabitem_icon"></span>
        <span slot="Tabitem_sign">我的</span>
      </Tabitem>
    </div>
  </Tabbar>
</template>
<script>
import Tabbar from "../../commen/tabbar/Tabbar"
import Tabitem from "../../commen/tabbar/Tabitem"
export default {
  name: "mainTabBar",
  components: {
    Tabbar,
    Tabitem
  },
  data () {
    return {
      activeColor: "#cf2d28"
    }
  },
}
</script>
<style>
</style>
