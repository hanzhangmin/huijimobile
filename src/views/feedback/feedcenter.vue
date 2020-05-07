<template>
  <div class="body">
    <div class="header">
      <Headergobr>
        <span slot="Headertitle">意见建议</span>
        <span slot="Headerright"
              class="iconfont icon-fankuitianxie"
              @click.stop="gofeedback"></span>
      </Headergobr>
    </div>
    <div class="container">
      <fdrouterbar></fdrouterbar>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>
<script>
import Headergobr from "components/commen/Header/Headergobr"
import fdrouterbar from "components/content/vrouterbar/fdrouterbar"

export default {
  name: "feedcenter",
  components: {
    Headergobr,
    fdrouterbar
  },
  methods: {
    gofeedback () {
      this.$router.push("/index/feedback")
    }
  },
}
</script>
<style scoped>
.body {
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #efefef;
}
.header {
  height: 6vh;
  border-bottom: 1px solid #cfcfcf;
  z-index: 100;
}
.container {
  margin-top: 5px;
  margin-bottom: 2.5rem;
}
.icon-fankuitianxie {
  color: #cf2d28;
}
</style>