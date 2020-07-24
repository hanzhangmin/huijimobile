<template>
  <div class="mask">
    <maskheader>
      <span slot="maskicon"
            class="iconfont icon-gonggao"></span>
      <span slot="masktitle">公告栏</span>
    </maskheader>
    <div slot="maskcontainer">
      <h3 class="ggtitle">
        <slot name="ggtitle"></slot>
      </h3>
      <div class="ggdetails">
        <slot name="ggdetails"></slot>
      </div>
      <div class="ggtime">
        <slot name="ggtime"></slot>
      </div>
    </div>
  </div>
</template>
<script>
import maskheader from "../../commen/maskheader/maskheader"
export default {
  name: "bulletinBar",
  props: {
    showBulletin: Boolean
  },
  components: {
    maskheader
  }
}
</script>
<style scoped>
.mask {
  position: fixed;
  left: 50%;
  top: 20%;
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
.ggtitle,
.ggtime {
  margin: 10px 0;
}
.ggtime {
  right: 0px;
  text-align: right;
}
.ggdetails {
  overflow-y: auto;
}
</style>