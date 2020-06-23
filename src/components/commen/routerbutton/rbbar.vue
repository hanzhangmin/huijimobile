<template>
  <div class="rbbar">
    <slot name="rbbar"></slot>
  </div>
</template>
<script>
export default {
  name: "rbbar"
}
</script>
<style scoped>
.rbbar div >>> {
  text-align: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
}
</style>