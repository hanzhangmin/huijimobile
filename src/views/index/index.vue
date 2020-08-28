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
import mainTabBar from "components/commen/tabbar/Tabbar"
export default {
  name: "index",
  data () {
    return {
      backcolor: "rgba(228,36,21)",
      fontcolor: "white"
    }
  },
  components: {
    mainTabBar,
    Header
  },

}
</script>
<style scoped>
.body {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.header {
  z-index: 100;
}
h1 {
  font-size: 5vw;
  /* font-family: "华文行楷"; */
  /* font-weight: 1px; */
}
.container {
  flex: auto;
  /* height: calc(100vh - 200px); */
}
</style>