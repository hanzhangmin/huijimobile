<template>
  <div class="body">
    <div class="header">
      <Headergoback>
        <span slot="Headertitle">村务/行政村活动</span>
      </Headergoback>
    </div>
    <div class="container">
      <s2 />
    </div>
  </div>
</template>
<script>
import Headergoback from "components/commen/Header/Headergoback"
import s2 from "views/villageviews/vaffairsactivity"

export default {
  name: "vaffairs",
  components: {
    Headergoback,
    s2
  },
}
</script>
<style scoped>
.body {
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.header {
  height: 6vh;
  border-bottom: 1px solid #cfcfcf;
  z-index: 100;
}
.container {
  flex: auto;
  background-color: #efefef;
}
</style>