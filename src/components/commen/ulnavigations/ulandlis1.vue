<template>
  <div class="ulandlis">
    <div class="liicon">
      <slot name="liicon"></slot>
    </div>
    <div class="liintro">
      <slot name="liintro"></slot>
    </div>
    <div class="lidetails">
      <slot name="lidetails"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "ulandlis1"
}
</script>
<style scoped>
.ulandlis {
  background-color: #ffffff;
  /* margin: 10px 10px; */
  display: flex;
  height: 3rem;
  line-height: 3rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}
.liintro {
  flex: auto;
  color: #555555;
  font-size: 1rem;
  letter-spacing: 2px;
  white-space: nowrap;
  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
}
.liicon,
.lidetails {
  width: 3rem;
  text-align: center;
}
</style>