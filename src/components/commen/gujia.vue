<template>
  <div class="gujia">
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
  </div>
</template>
<script>
export default {
  name: "gujia"
}
</script>
<style scoped>
.gujia .item {
  height: 10px;
  width: 0px;
  margin: 2rem 2vw;
  animation: play 0.3s linear;
  background-color: #efefef;
  animation-fill-mode: forwards;
}
@keyframes play {
  0% {
    width: 0px;
  }
  100% {
    width: 96vw;
  }
}
</style>