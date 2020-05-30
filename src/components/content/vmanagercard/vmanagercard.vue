<template>
  <div class="mask">
    <maskheader>
      <span slot="maskicon"
            class="iconfont icon-untitled18"></span>
      <span slot="masktitle">个人档案</span>
    </maskheader>
    <div class="nanagerintro">
      <div class="photo">
        <slot name="photo"></slot>
      </div>
      <div class="intro">
        <slot name="intro"></slot>
      </div>
    </div>
  </div>
</template>
<script>
import maskheader from "../../commen/maskheader/maskheader"
export default {
  name: "vmanagercard",
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
.photo {
  width: 50%;
  height: 100%;
  padding-right: 10px;
  margin: auto;
}
.intro {
  flex: auto;
  line-height: 1.6rem;
}
</style>