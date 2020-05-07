<template>
  <div class='maskright'
       v-show="isshowmr">
    <slot name="maskbody"></slot>
  </div>
</template>
<script>
export default {
  name: "maskright",
  props: {
    isshowmr: Boolean
  }
}
</script>
<style scoped>
.maskright {
  position: fixed;
  top: 20vh;
  right: 10px;
  border-radius: 10px;
  box-shadow: 0px 0px 5px 5px #eeeeee;
  padding: 20px;
  background-color: white;
  z-index: 100;
}
</style>