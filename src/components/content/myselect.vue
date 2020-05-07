<template>
  <div class="myselect">
    <slot name="select1"></slot>
    <select></select>
    <slot name="select2"></slot>
    <select></select>
  </div>
</template>
<script>
export default {
  name: "myselect"
}
</script>
<style scoped>
.myselect {
  text-align: center;
}
select {
  appearance: none;
  border: none;
  padding: 5px;
  margin: 5px;
  border-radius: 5px;
  background: white;
}
</style>