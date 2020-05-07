<template>
  <div class="iconlink">
    <div class="linkicon">
      <slot name="linkicon"></slot>
    </div>
    <div class="linksign">
      <slot name="linksign"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "iconlink",
}
</script>
<style scoped>
.iconlink {
  border-radius: 80px;
  text-align: center;
  height: 80px;
}
.linkicon {
  width: 60px;
  height: 60px;
  border-radius: 60px;
  background-color: rgb(252, 232, 236);
  color: #cf2d28;
  line-height: 60px;
}
.linkicon,
.linksign {
  text-align: center;
}
.linksign {
  color: #555555;
  margin-top: 5px;
  font-size: 16px;
}
</style>