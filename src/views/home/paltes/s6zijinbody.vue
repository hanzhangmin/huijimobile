<template>
  <div class="body">
    <div class="header">
      <Headergoback>
        <span slot="Headertitle">资金</span>
      </Headergoback>
    </div>
    <div class="container">
      <zijinrouterbar></zijinrouterbar>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>
<script>
import Headergoback from "components/commen/Header/Headergoback"
import zijinrouterbar from "components/content/vrouterbar/zijinrouterbar"
export default {
  name: "zijinbody",
  components: {
    Headergoback,
    zijinrouterbar
  },
  created () {
    console.log(this.$route.query);
    // this.zid = Number(this.$route.query.zid)
    sessionStorage.setItem('zid', this.$route.query.zid)
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