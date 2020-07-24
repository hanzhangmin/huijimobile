<template>
  <div class="body">
    <div class="header">
      <Headergoback>
        <span slot="Headertitle">财务/资金</span>
      </Headergoback>
    </div>
    <div class="container">
      <s2 />
    </div>
  </div>
</template>
<script>
import Headergoback from "components/commen/Header/Headergoback"
import s2 from "views/home/paltes/s6zijin"
import {
  request,
  get_vmanagers_list
} from "network/request"
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
  height: 100vh;
  /* overflow: hidden; */
  display: flex;
  flex-direction: column;
}
.header {
  height: 6vh;
  /* border-bottom: 1px solid #cfcfcf; */
  z-index: 100;
}
.container {
  height: 94vh;
  /* overflow: hidden; */
  background-color: #f6f6f6;
}
</style>