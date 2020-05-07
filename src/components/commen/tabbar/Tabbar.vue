<template>
  <div class="Tabbar">
    <slot name="Tabbar"></slot>
  </div>
</template>
<script>
export default {
  name: 'Tabbar'
}
</script>
<style scoped>
.Tabbar {
  position: fixed;
  height: 49px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background-color: white;
  box-shadow: 0px -2px 4px 2px white;
  display: flex;
  z-index: 1;
}
.Tabbar div {
  width: 100%;
  display: flex;
}
</style>