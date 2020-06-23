<template>
  <div class="body">
    <div class="header">
      <Header :backcolor="backcolor"
              :fontcolor="fontcolor">
        <h1 slot="Header_title">郑州市惠济区村(居)务监督平台</h1>
      </Header>
    </div>
    <div class="container">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <div>
      <mainTabBar />
    </div>
  </div>
</template>
<script>
import Header from "components/commen/Header/Header"
import mainTabBar from "components/content/mainTabBar/mainTabBar"
export default {
  name: "index",
  data () {
    return {
      backcolor: "#cf2d28",
      fontcolor: "white"
    }
  },
  components: {
    mainTabBar,
    Header
  },
  created () {
    this.$loading.show() // 显示loading
  },
}
</script>
<style scoped>
.body {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #efefef;
}
.header {
  z-index: 100;
}
h1 {
  font-size: 5vw;
  font-family: "黑体";
  /* font-weight: 1px; */
}
.container {
  flex: auto;
  margin-top: 6vh;
  margin-bottom: 60px;
}
</style>