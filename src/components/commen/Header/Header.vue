<template>
  <div class="Header"
       :style="{'background-color':backcolor,'color':fontcolor}">
    <div class="Header_left">
      <slot name="Header_left"></slot>
    </div>
    <div class="Header_title">
      <slot name="Header_title"></slot>
    </div>
    <div class="Header_right">
      <slot name="Header_right"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Header',
  props: {
    backcolor: {
      type: String,
      default: "#cf2d28"
    },
    fontcolor: {
      type: String,
      default: "#ffffff"
    }
  }
}
</script>
<style scoped>
.Header {
  position: fixed;
  width: 100%;
  display: flex;
  height: 6vh;
  line-height: 6vh;
  /* border: 1px solid #cccccc; */
  /* background-color: #cf2d28; */
}
.Header div {
  font-size: 5vw;
  text-align: center;
}
.Header .Header_left,
.Header .Header_right {
  width: 6vh;
}
.Header .Header_title {
  flex: auto;
}
</style>