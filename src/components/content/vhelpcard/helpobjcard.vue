<template>
  <div class="mask">
    <maskheader>
      <span slot="maskicon"
            class="iconfont icon-love"></span>
      <span slot="masktitle">补助对象</span>
    </maskheader>
    <div class="nanagerintro">
      <slot name="intro"></slot>
    </div>
  </div>

</template>
<script>
import maskheader from "../../commen/maskheader/maskheader"
export default {
  name: "helpobjcard",
  components: {
    maskheader
  }
}
</script>
<style scoped>
/* .maskbox {
  position: fixed;
  background-color: rgba(0, 0, 0, 0.2);
  width: 100vw;
  height: 100vh;
  z-index: 1000;
} */
/* .mask {
  position: fixed;
  background-color: rgba(0, 0, 0, 0.2);
  width: 100vw;
  height: 100vh;
  z-index: 1000;
} */
.mask {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  background-color: white;
  box-shadow: 0px 0px 5px 2px #cfcfcf;
  padding: 10px;
  border-radius: 1rem;
  letter-spacing: 2px;
  z-index: 1000;
  color: #555555;
}
.nanagerintro {
  display: flex;
  margin-top: 10px;
}
.nanagerintro p >>> {
  height: 2rem;
  line-height: 2rem;
}
</style>