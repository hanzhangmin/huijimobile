
<template>
  <div class="mask">
    <maskheader>
      <span slot="maskicon"
            class="iconfont icon-nav_dangqundangan"></span>
      <span slot="masktitle">党员发展信息</span>
    </maskheader>
    <div class="nanagerintro">
      <slot name="intro"></slot>
    </div>
  </div>
</template>
<script>
import maskheader from "../../commen/maskheader/maskheader"
export default {
  name: "dycard",
  components: {
    maskheader
  }
}
</script>
<style scoped>
.mask {
  position: absolute;
  left: 50%;
  top: 10%;
  transform: translateX(-50%);
  z-index: 100;
  width: 90%;
  background-color: white;
  box-shadow: 0px 0px 5px 2px #cfcfcf;
  padding: 10px;
  border-radius: 1rem;
  letter-spacing: 2px;
  color: #555555;
}
.nanagerintro {
  display: flex;
  margin-top: 10px;
}
.nanagerintro p >>> {
  margin: 0.5rem 0px;
}
</style>