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
    <div class="c5_right">
      <span class="iconfont icon-you"></span>
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
  // margin: 10px;
  display: flex;
  padding: 10px;
  font-size: @font-size-md;
  border: 1px solid #efefef;
  border-radius: 5px;
  div {
    margin: 0px 5px;
  }
  .c5_left {
    flex: 3;
    text-align: center;
    .img {
      width: 16vw;
      height: 4rem;
      display: inline-block;
      background-position: center;
      background-size: cover;
      overflow: hidden;
      img {
        width: 25vw;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }
  .c5_center {
    color: #888888;
    flex: 8;
    max-width: 70vw;
    div {
      position: relative;
      height: 100%;
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
        bottom: 0px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        color: @gray-6;
        letter-spacing: 2px;
      }
    }
  }
  .c5_right {
    flex: 1;
    height: 4rem;
    line-height: 4rem;
    text-align: right;
    margin-right: 20px;
    // span {
    //   text-align: center;
    // }
  }
}
</style>