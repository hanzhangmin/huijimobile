<template>
  <button class="routerbutton"
          @click="itemclick"
          :style="Color">
    <slot name="rbsign"></slot>
  </button>
</template>
<script>
export default {
  name: "routerbutton",
  props: {
    path: String,
    activecolor: {
      type: String,
      default: "green"
    },
    activebkcolor: {
      type: String,
      default: "#cfcfcf"
    }
  },
  computed: {
    isActive () {
      // console.log(this.$route.path)
      // return this.$route.path === this.path 可行，但是下面有更加稳妥的方法
      return !this.$route.path.indexOf(this.path)
      // indexOf(item ,num) item 要找的字符串 num 检索开始位置下标 存在则返回第一次存在的下标，不存在返回 -1 
    },
    Color () {
      return this.isActive ? { "color": this.activecolor, "background-color": this.activebkcolor } : {}
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
<style scoped>
.routerbutton {
  background-color: #efefef;
  color: #555;
  margin: 0 2px;
  flex: 1;
  padding: 5px 2px;
  text-align: center;
  border: none;
  outline: #cf2d28;
  border-radius: 5px;
  background-color: white;
}
</style>