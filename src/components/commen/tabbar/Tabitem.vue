<template>
  <a class="Tabitem"
     @click="itemclick($event)"
     :class="activeClass"
     :style="Color">
    <slot name="Tabitem_icon"></slot>
    <br>
    <slot name="Tabitem_sign"></slot>
  </a>
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
    itemclick (event) {
      let fdom = event.currentTarget;
      let cspan = document.createElement("span");
      cspan.className = "activespan"
      fdom.appendChild(cspan)
      setTimeout(() => {
        fdom.removeChild(cspan)
      }, 300)
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
  text-align: center;
  width: 20vw;
  height: 49px;
  transition: all 0.3s linear;
}
.activespan {
  position: absolute;
  display: inline-block;
  z-index: -1;
  transform: translate(-67%, -50%);
  background-color: #dddddd;
  animation: myactive1 1 0.3s infinite;
  -moz-animation: myactive1 0.3s infinite;
  -webkit-animation: myactive1 0.3s infinite;
  -o-animation: myactive1 0.3s infinite;
  border-radius: 50%;
  pointer-events: none;
}
@keyframes myactive1 {
  0% {
    width: 0vw;
    height: 0vw;
  }
  100% {
    width: 40vw;
    height: 40vw;
  }
}
</style>