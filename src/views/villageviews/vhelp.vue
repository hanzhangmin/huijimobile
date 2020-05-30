<template>
  <div class="body">
    <div class="header">
      <Headergoback>
        <span slot="Headertitle">村补助</span>
      </Headergoback>
    </div>
    <div class="container">
      <routerbutton></routerbutton>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>
<script>
import Headergoback from "components/commen/Header/Headergoback"
import routerbutton from "components/content/vrouterbar/vhelprouterbar"
export default {
  name: "vaffairs",
  components: {
    Headergoback,
    routerbutton
  },
  created () {
    this.$loading.show()
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