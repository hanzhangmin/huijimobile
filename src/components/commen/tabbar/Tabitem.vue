<template>
  <div class="Tabitem"
       @click="itemclick"
       :class="activeClass"
       :style="Color">
    <div>
      <slot name="Tabitem_icon"></slot>
    </div>
    <div>
      <slot name="Tabitem_sign"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "Tabitem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "green"
    }
  },
  computed: {
    isActive () {
      // console.log(this.$route.path)
      // return this.$route.path === this.path 可行，但是下面有更加稳妥的方法
      return !this.$route.path.indexOf(this.path)
      // indexOf(item ,num) item 要找的字符串 num 检索开始位置下标 存在则返回第一次存在的下标，不存在返回 -1 
    },
    activeClass () {
      // console.log(this.activeColor)
      return this.isActive ? "active" : "";
    },
    Color () {
      return this.isActive ? { "color": this.activeColor } : {}
    }
  },
  methods: {
    itemclick () {
      try {
        this.$router.push(this.path)
      } catch (e) {
        console.log(e);
      }
    }
  },
}
</script>
<style>
.Tabitem {
  flex: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
}

.Tabitem div {
  flex: 1;
  display: inline-block;
}
.Tabitem div:last-child {
  font-size: 16px;
}
/* 设置路由切换动画 */
.active {
  animation: myactive 0.3s;
  -moz-animation: myactive 0.3s;
  -webkit-animation: myactive 0.3s;
  -o-animation: myactive 0.3s;
}
@keyframes myactive {
  0% {
    transform: scale(0.5);
  }
  75% {
    transform: scale(1.2);
  }
  90% {
    transform: scale(0.9);
  }
  95% {
    transform: scale(1.1);
  }
  97% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(1.05);
  }
}
</style>