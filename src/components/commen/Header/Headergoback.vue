<template>
  <div>
    <Header>
      <span slot="Header_left"
            @click="goback"
            class="iconfont icon-zuo"
            style="font-size:2rem"></span>
      <span slot="Header_title">
        <slot name="Headertitle"></slot>
      </span>
    </Header>
  </div>
</template>
<script>
import Header from "./Header"
export default {
  name: 'Headergoback',
  components: {
    Header
  },
  methods: {
    goback () {
      // zijinbody
      if (this.$route.path.indexOf("vhelp") === 1 || this.$route.path.indexOf("vaffairs") === 1) {
        this.$router.push("/index/home")
      } else if (this.$route.path.indexOf("zijinbody") === 1) {
        this.$router.push("/cwzj")
      } else if (this.$route.path.indexOf("cwzj") === 1) {
        this.$router.push("/index/home")
      } else {
        this.$router.go(-1)
      }
      // if(this.$route.path.indexOf(this.path))
      // this.$router.back()
      // window.history.back()
      // window.history.back();
    }
  },
}
</script>
