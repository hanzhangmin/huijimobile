<template>
  <div class="Tabbar">
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
</template>
<script>
import Tabitem from "../../commen/tabbar/Tabitem"
export default {
  name: 'Tabbar',
  components: {
    Tabitem
  },
  data () {
    return {
      activeColor: "#cf2d28"
    }
  },
}
</script>
<style scoped>
.Tabbar {
  position: fixed;
  display: flex;
  justify-content: center;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background-color: white;
  border-top: 1px solid #efefef;
  padding-top: 8px;
  overflow: hidden;
  z-index: 100;
}
a {
  flex: 1;
  color: rgb(128, 128, 128);
}
</style>