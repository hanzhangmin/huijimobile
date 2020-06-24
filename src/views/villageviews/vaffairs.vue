<template>
  <div class="body">
    <div class="header">
      <Headergoback>
        <span slot="Headertitle">户口迁移</span>
      </Headergoback>
    </div>
    <div class="container">
      <vafrouterbar></vafrouterbar>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>
<script>
import Headergoback from "components/commen/Header/Headergoback"
import vafrouterbar from "components/content/vrouterbar/vaffairsrouterbar"

export default {
  name: "vaffairs",
  components: {
    Headergoback,
    vafrouterbar
  },
  created () {
    // this.$loading.hide()
    // this.$loading.show();
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
</style>