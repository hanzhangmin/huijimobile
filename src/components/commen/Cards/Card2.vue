<template>
  <div class="Card5">
    <slot name="C5_rank">
      <!-- <div class="C5_rank"></div> -->
    </slot>

    <div class="c5_left">
      <slot name="img"></slot>
      <!-- <div class="img"
           :style="{'background-image': 'url('+item.img+')'}"></div> -->
    </div>
    <div class="c5_center">
      <div>
        <slot name="name"></slot>
        <slot name="intro"></slot>
      </div>
    </div>
    <div class="c5_right">
      <slot name="button">
      </slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "Card2"
}
</script>
<style lang="less" scoped>
@import "assets/css/all.less";
.Card5 {
  display: flex;
  height: 3rem;
  border-bottom: 1px solid @gray-4;
  padding-left: 5px;
  padding-right: 5px;
  font-size: @font-size-md;
  .C5_rank {
    // flex: auto;
    flex: 1;
    line-height: 2rem;
    text-align: center;
    // float: right;
    span {
      font-size: @font-size-lg;
      color: @gray-6;
    }
    .iconfont {
      font-size: 0.8rem;
    }
    .icon-first {
      background-image: linear-gradient(red, rgb(134, 1, 1));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .icon-third {
      background-image: linear-gradient(rgb(44, 171, 255), rgb(31, 127, 190));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .icon-second {
      background-image: linear-gradient(orange, rgb(155, 101, 1));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    // .rank1 {
    // }
    // .rank2 {
    // }
    // .rank3 {
    // }
  }
  .c5_right {
    flex: 1;
    // button {
    //   position: relative;
    //   float: right;
    //   border-radius: 4px;
    //   top: 0.7rem;
    //   width: 1rem;
    //   height: 0.6rem;
    //   color: #ffffff;
    // }
    span {
      position: relative;
      float: right;
      margin-right: 5px;
      text-align: center;
      border-radius: 4px;
      top: 0.7rem;
      width: auto;
      height: 0.6rem;
    }
    // .add {
    //   background-color: @maincolor;
    // }
    // .del {
    //   background-color: @gray-5;
    // }
  }
  .c5_left {
    flex: 1;
    text-align: center;
    // margin: 0.3rem;
    .img {
      width: 2.4rem;
      height: 2.4rem;
      display: inline-block;
      border-radius: 100%;
      background-position: center;
      background-size: cover;
      overflow: hidden;
      img {
        min-width: 2.4rem;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }
  .c5_center {
    color: #888888;
    flex: 4;
    max-width: 60vw;
    div {
      position: relative;
      top: 50%;
      transform: translateY(-50%);
      b {
        overflow: hidden;
        letter-spacing: 4px;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
      }
      p {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        color: @gray-6;
      }
    }
  }
}
</style>