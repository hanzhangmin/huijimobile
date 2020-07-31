<template>
  <div class="Card5">
    <div class="c5_left">
      <slot name="img"></slot>
    </div>
    <div class="c5_center">
      <div>
        <slot name="name"></slot>
        <slot name="intro"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Card5"
}
</script>
<style lang="less" scoped>
@import "assets/css/all.less";
.Card5 {
  display: flex;
  height: 4rem;
  font-size: @font-size-md;
  padding: 10px 0px;
  border-bottom: 1px solid #eee;
  .c5_left {
    width: 25vw;
    text-align: center;
    line-height: 4rem;
    .img {
      width: 25vw;
      height: 4rem;
      border-radius: 5px;
      display: inline-block;
      background-position: center;
      background-size: cover;
      overflow: hidden;
      img {
        width: 25vw;
        height: 4rem;
        // top: 50%;
        // transform: translateY(-50%);
      }
    }
  }
  .c5_center {
    color: #888888;
    flex: 4;
    max-width: 60vw;
    padding-left: 10px;
    div {
      position: relative;
      height: 100%;
      // top: 50%;
      // transform: translateY(-50%);
      b {
        overflow: hidden;
        letter-spacing: 4px;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      p {
        position: absolute;
        font-size: 0.8rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        color: @gray-6;
        bottom: 0px;
        span {
          margin-right: 5px;
        }
      }
    }
  }
}
</style>