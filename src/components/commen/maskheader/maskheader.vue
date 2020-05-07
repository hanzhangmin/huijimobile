<template>
  <div class="maskheader">
    <div class="maskicon">
      <slot name="maskicon"></slot>
    </div>
    <div class="masktitle">
      <slot name="masktitle"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "maskheader"
}
</script>
<style scoped>
.maskheader {
  position: relative;
  height: 2.4rem;
  line-height: 2.4rem;
  display: flex;
  color: #cf2d28;
  padding-left: 20px;
  background-color: white;
  border-bottom: 1px solid #cf2d28;
  font-size: 1.2rem;
}

.masktitle,
.maskicon {
  position: relative;
  border-radius: 1.2rem;
}
.maskicon {
  width: 2.2rem;
  text-align: center;
  height: 2.2rem;
  line-height: 2.2rem;
  background-color: #cf2e2825;
  margin-right: 1rem;
}
</style>